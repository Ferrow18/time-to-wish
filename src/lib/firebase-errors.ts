import { FirebaseError } from "firebase/app";

export const getFirebaseAuthErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/invalid-credential":
        return "Invalid email or password";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/user-not-found":
        return "User not found";
      case "auth/wrong-password":
        return "Wrong password";
      case "auth/email-already-in-use":
        return "Email already in use";
      default:
        return "Something went wrong";
    }
  }
  return "Something went wrong";
};
