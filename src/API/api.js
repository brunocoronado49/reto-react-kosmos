import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDocs
} from 'firebase/firestore';
import { database } from './config';

const collectionName = "fields-user";

export const addField = newfields =>
    addDoc(collection(database, collectionName), newfields);

export const getFields = () =>
    getDocs(collection(database, collectionName));

export const deletField = id =>
    deleteDoc(doc(database, collectionName, id));

