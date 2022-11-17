import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged,
} from "firebase/auth";

import { toastSuccess, toastError, toastWarning } from "../helpers/Toast";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createEmailUser = async (email, password, displayName, navigate) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
            displayName: displayName,
        });

        navigate("/");

        toastSuccess("Registered succesfully.");
    } catch (error) {
        toastError(error.message);
    }
};

export const loginEmailUser = async (email, password, navigate) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
        toastSuccess("Login successful.");
    } catch (error) {
        toastError(error.message);
    }
};

export const logout = async () => {
    signOut(auth);
    toastSuccess("Logout successful.");
};

export const loginWithGoogle = async (navigate) => {
    const googleProvider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, googleProvider);

        navigate("/");

        toastSuccess("Login successful.");
    } catch (error) {
        toastError(error.message);
    }
};

export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);

        toastWarning("Please check your email for the password resetting instructions.");
    } catch (error) {
        toastError(error.message);
    }
};

export const userObserver = (setUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            setUser({ email: user.email, displayName: user.displayName, photoURL: user.photoURL });
        } else {
            setUser(false);
        }
    });
};
