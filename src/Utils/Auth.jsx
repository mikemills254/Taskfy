import { auth, Db } from "./Firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { LocalStorage } from "./helpers";

export const CreateAccount = {
    EmailandPassword: async (email, password, username) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const docID = await storeUserInfor(username, email, password);
            return { user, docID };
        } catch (error) {
            console.error("Sign in error:", error);
            throw error;
        }
    },
};

export const LogIn = {
    EmailandPassword: async (email, password) => {
        try {
            const results = await signInWithEmailAndPassword(auth, email, password);
            const user = results.user;
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};

export const LogOut = async () => {
    try {
        return auth.signOut().then(() => {
            LocalStorage.removeItem('accessToken');
        });
    } catch (error) {
        throw error;
    }
};

export const Firestore = {
    AddDataToFirestore: async (topic, description, due_date, category, email) => {
        try {
            const results = await addDoc(collection(Db, 'Tasks'), {
                Topic: topic,
                Description: description,
                DueDate: due_date,
                Category: category,
                Email: email
            });
            return results;
        } catch (error) {
            console.error('Error adding task', error);
        }
    }
};

export const ResetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email).then(() => {
        return { msg: 'Email sent' };
    });
};

const storeUserInfor = async (username, email, password) => {
    try {
        const docRef = await addDoc(collection(Db, "Users"), {
            Username: username,
            Email: email,
            Password: password,
        });
        return docRef.id;
    } catch (error) {
        throw error;
    }
};
