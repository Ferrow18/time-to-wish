import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export const createFirebaseUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, {
      displayName: name,
    });
    await sendEmailVerification(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signInFirebaseUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signOutFirebaseUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      return user;
    } else {
      console.log("No user");
      return null;
    }
  });
};

export const resetPasswordEmail = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
