
//
//	Acceso a base de datos
//

import {
	db,
	doc,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	collection,
	query,
	where,
	limit
} from './conexion';

//	Devuelve array de colección
export async function getCollection(col) {
	
	const snapshot = await getDocs(collection(db, col));

	return snapshot.docs.map((snapshotDoc) => {
		return {
			id: snapshotDoc.id,
			...snapshotDoc.data(),
		};
	});
}

//	Devuelve colección con query
export async function getCollectionWithQuery(col, q) {

	const queryCollection = query(collection(db, col), where(...q), limit(40));
	const snapshot = await getDocs(queryCollection);

	if (snapshot.size === 0) {
		return [];
	}

	return snapshot.docs.map((snapshotDoc) => {
		return {
			id: snapshotDoc.id,
			...snapshotDoc.data(),
		};
	});
}

//	Devuelve documento con colección y id
export async function getDocument(col, id) {

	const docRef = doc(db, col, id);
	const snapshot = await getDoc(docRef);

	if (snapshot.exists()) {
		return { id: snapshot.id, ...snapshot.data() };
	}
	return null;
}


 //	Borra colección
export async function borrarColeccion(col) {

	const snapshot = await getDocs(collection(db, col));

	snapshot.docs.forEach((snapshotDoc) => {
		deleteDoc(doc(db, col, snapshotDoc.id));
	});
}

 //	Borra un documento con colección y id
export async function borrarDoc(col, id) {
	await deleteDoc(doc(db, col, id));
}

//	Crea un item en la colección
export async function creaItem(col, item) {
	return await addDoc(collection(db, col), item);
};

export function getRefDoc(col, id) {
	return doc(db, col, id);
}
