import { initializeApp } from "firebase/app";
import { User } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore/lite';
import { ContactInfo } from '../subPages/home/contact';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBlMwGiEKa-CkFUYXaEsXs0XN_7cVx7IoE",
  authDomain: "facundo-carballo.firebaseapp.com",
  projectId: "facundo-carballo",
  storageBucket: "facundo-carballo.appspot.com",
  messagingSenderId: "1079782105084",
  appId: "1:1079782105084:web:33bcca94f32902d597dc79",
  measurementId: "G-JHMVZDSYTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

export async function sendMessage(contactInfo: ContactInfo): Promise<void> {
    const document = doc(db, 'Messages', contactInfo.email);
    await setDoc(document, {
        'email': contactInfo.email,
        'tel': contactInfo.tel,
        'name': contactInfo.name,
        'lastName': contactInfo.lastName,
        'message': contactInfo.details,
        'interest': contactInfo.interest,
    });
}

export async function findUser(user: User): Promise<boolean> {
  const documentReference = doc(db, 'Users', user.uid);
  const document = await getDoc(documentReference);
  return document.exists();
}

export async function createUserDB(user: User) {
  const document = doc(db, 'Users', user.uid);
  await setDoc(document, {
    'email': user.email,
    'tel': user.phoneNumber,
    'name': user.displayName,
    'photoURL': user.photoURL
  });
}


