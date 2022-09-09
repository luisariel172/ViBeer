
//
//  Conexión a Firestore
//

import { initializeApp } from 'firebase/app';
import {
	collection,
	getDocs,
	getFirestore,
	doc,
	getDoc,
	addDoc,
	deleteDoc,
	updateDoc,
	query,
	where,
	limit
} from 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCcA6J7sFxq26YPMQHQ3lYJWdAYL53jTMk',
	authDomain: 'vibeer-96cd7.firebaseapp.com',
	projectId: 'vibeer-96cd7',
	storageBucket: 'vibeer-96cd7.appspot.com',
	messagingSenderId: '423537977548',
	appId: '1:423537977548:web:8f4364325d748a3dfe3a69'
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db, doc, getDocs, getDoc, addDoc, deleteDoc, updateDoc, collection, query, where, limit };
