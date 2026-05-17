/**
 * PWA Utility for App Badging API
 * Allows setting a numeric badge on the app icon when installed as a PWA.
 */

export const updateAppBadge = (count: number) => {
  if (typeof navigator !== 'undefined' && 'setAppBadge' in navigator) {
    if (count > 0) {
      (navigator as any).setAppBadge(count).catch((error: any) => {
        console.warn('PWA: Error setting badge', error);
      });
    } else {
      (navigator as any).clearAppBadge().catch((error: any) => {
        console.warn('PWA: Error clearing badge', error);
      });
    }
  }
};
