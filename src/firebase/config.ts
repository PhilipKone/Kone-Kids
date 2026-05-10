import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, Analytics } from 'firebase/analytics';

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
}

// These values are pulled from your .env file
// Ensure you have VITE_FIREBASE_API_KEY, etc. defined there!
const firebaseConfig: FirebaseConfig = {
    apiKey: (import.meta.env.VITE_FIREBASE_API_KEY || 'dummy_key') as string,
    authDomain: (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'dummy_domain') as string,
    projectId: (import.meta.env.VITE_FIREBASE_PROJECT_ID || 'dummy_project') as string,
    storageBucket: (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'dummy_bucket') as string,
    messagingSenderId: (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'dummy_sender') as string,
    appId: (import.meta.env.VITE_FIREBASE_APP_ID || 'dummy_id') as string,
    measurementId: (import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) as string | undefined
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let analytics: Analytics | undefined;

try {
    // Safety check for missing environment variables
    if (firebaseConfig.apiKey === 'dummy_key') {
        console.warn('Kone Kids Firebase: Missing environment variables. Running in local simulation mode.');
    }
    
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    
    // Only initialize analytics if running in a browser environment
    if (typeof window !== 'undefined') {
        analytics = getAnalytics(app);
    }
} catch (error) {
    console.error('Kone Kids Firebase: Critical Initialization Error. Forcing local fallback.');
    // Provide safe empty objects to prevent application crashes
    app = {} as any;
    auth = {} as any;
    db = {} as any;
}

export { auth, db, analytics };
export default app;
