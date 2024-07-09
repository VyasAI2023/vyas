import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTJ5VT8wN16pg9ja2lMaAiDyMgP0ZGGjM",
    authDomain: "vyas-auth.firebaseapp.com",
    projectId: "vyas-auth",
    storageBucket: "vyas-auth.appspot.com",
    messagingSenderId: "815458381003",
    appId: "1:815458381003:web:fb1efccaf7f4eee3743f4e"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
