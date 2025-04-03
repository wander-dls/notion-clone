import { initializeApp, getApps, App, getApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceKey from "@/service_key.json"

let app: App

if (getApps().length === 0) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app = initializeApp({
    credential: cert(serviceKey as ServiceAccount)
  });
} else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app = getApp();
}

const adminDb = getFirestore(app);
export { app as adminApp, adminDb };