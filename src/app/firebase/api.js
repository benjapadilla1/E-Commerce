import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { app } from './firebase';
import { getFirestore } from "firebase/firestore"

export const recuperarItem = getFirestore(app)
// Crear Orden
export const createItem = async (obj) => {
    const colRef = collection(recuperarItem, 'clientes');
    const data = await addDoc(colRef, obj);
    return data.id;
}
