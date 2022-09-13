
//
//	Lee un producto con id
//

//	Propio !!!
import { getDocument } from '../../api/db';

//	Defaukt !!!
export default async function lee(id) {
	const ret = await getDocument('productos', id);
	return ret || {};
};
