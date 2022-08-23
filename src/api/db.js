
//
//	Acceso a base de datos
//

import {
	db,
	doc,
	getDocs,
	getDoc,
	collection,
	query,
	where,
	limit,
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

	const queryCollection = query(collection(db, col), where(...q), limit(1));
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
