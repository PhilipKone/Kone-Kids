import { useState, useCallback } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_placeholder';

const loadPaystack = () => {
  return new Promise<any>((resolve) => {
    if ((window as any).PaystackPop) { 
      resolve((window as any).PaystackPop); 
      return; 
    }
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v2/inline.js';
    script.onload = () => resolve((window as any).PaystackPop);
    document.head.appendChild(script);
  });
};

const generateTransactionId = () => `KKP-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

interface PaystackOptions {
  email: string;
  phone: string;
  amountGHS: number;
  coinPackageName: string;
  onSuccess: (reference: string) => void;
  onClose: () => void;
}

export function useKonePay() {
  const [isProcessing, setIsProcessing] = useState(false);

  const initiatePayment = useCallback(async ({ email, phone, amountGHS, coinPackageName, onSuccess, onClose }: PaystackOptions) => {
    setIsProcessing(true);
    try {
      const PaystackPop = await loadPaystack();
      const txRef = generateTransactionId();

      const handler = PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: amountGHS * 100, // Paystack expects pesewas/kobo
        currency: 'GHS',
        ref: txRef,
        metadata: {
          custom_fields: [
            { display_name: 'Phone', variable_name: 'phone', value: phone },
            { display_name: 'Package', variable_name: 'package', value: coinPackageName },
            { display_name: 'App', variable_name: 'app', value: 'Kone Kids' },
          ],
        },
        callback: async (response: any) => {
          // Log to Firestore
          try {
            await addDoc(collection(db, 'kone_kids_purchases'), {
              transactionId: response.reference,
              email: email,
              phone: phone,
              package: coinPackageName,
              amountGHS: amountGHS,
              method: 'Card/MoMo',
              status: 'success',
              paystackRef: response.reference,
              createdAt: serverTimestamp(),
            });
          } catch (err) {
            console.error('Firestore log error:', err);
          }
          
          setIsProcessing(false);
          onSuccess(response.reference);
        },
        onClose: () => {
          setIsProcessing(false);
          onClose();
        },
      });

      handler.openIframe();
    } catch (err) {
      console.error('Paystack error:', err);
      setIsProcessing(false);
      alert('Payment system failed to load. Please check your connection.');
      onClose();
    }
  }, []);

  return { initiatePayment, isProcessing };
}
