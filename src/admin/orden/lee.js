
//
//	Lee una orden con id
//

//	Propio !!!
import { getDocument } from '../../api/db';

//	Defaukt !!!
export default async function lee(id) {
	const ret = await getDocument('ordenes', id);
	return ret || {};
};
