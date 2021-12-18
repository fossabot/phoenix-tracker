// Import the functions you need from the SDKs you need
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET
} from '@env';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { createContext } from 'react';

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(config);

const { Provider } = createContext({} as { app: FirebaseApp });

export default function FirebaseProvider({ children }: { children: JSX.Element }): JSX.Element {
  return <Provider value={{ app }}>{children}</Provider>;
}
