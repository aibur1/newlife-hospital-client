import firebaseConfig from "./Firebase.config";
import {initializeApp} from "firebase/app";


const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializeFirebase;