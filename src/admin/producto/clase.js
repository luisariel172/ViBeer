//
//  *****************************************************************
//
//                          P R O D U C T O
//
//  *****************************************************************
//
export class Producto {

    //
    //  Nombre de tabla y plural de la clase
    //
    static tabla = 'productos';
    static nombrePlural = 'Productos';


    //
    //  Array con propiedades
    //
    static propiedades = getClaves(new this());


    //
    //  Devuelve array de objetos-Producto de TODOS los datos persistidos.
    //
    static async all() {
        let respuesta = await Api.getTabla(this.tabla);
        const ret = [];
        for (let obj in respuesta) {
            respuesta[obj]['id'] = obj;
            ret.push(respuesta[obj]);
        };
        return ret;
    }


    //
    //  Devuelve instancia de objeto persistido con id.
    //
    static async find(id) {
        if (isNull(id))
			return alertError('Producto.find(): Parámetro-id inválido.')
        const obj = await Api.getById(this.tabla, id);
        if (obj) {
            obj['id'] = id;
            return new this(obj);
        } else {
            return null;
        }
    };
    

    //
    //  Construye instancia con parámetro-objeto.
    //
    constructor(paramObj) {
        this.id = paramObj?.id ?? '';
        this.fecha = paramObj?.fecha ?? fechaAMD();
		this.hora = (isNull(paramObj) ? 0 : Number(paramObj.hora));
        this.descripcion = paramObj?.descripcion ?? '';
    };


    //
    //  Persiste instancia, devuelve true o false.
    //
    save() {
        if (this.valid()) {;
            return Api.set('productos', this);
        } else {
            return false;
        };
    };


    //
    //  Valida instancia.
    //
    valid() {
        //
        let _errores = '';
        //
        if (isNull(this.fecha)) _errores += 'Debe ingresar fecha. ';
        //
        if (isNaN(this.hora)) _errores += 'Hora debe ser un número.';
        if (!Number.isInteger(this.hora)) _errores += 'Hora debe ser un número entero.';
        if (this.hora < 0 || this.hora > 23) _errores += 'Hora inválida (válida 0 a 23).';
        //
        if (isNull(this.descripcion)) _errores += 'Debe ingresar descripción.';
        //
        if (!isNull(_errores)) this['_errores'] = _errores;
        //
        return isNull(_errores);
        //
    };


    //
    //  Actualiza instancia con objeto y persiste.
    //
    updateAttributes(paramObj) {
        this.fecha = (paramObj.fecha ? String(paramObj.fecha) : '');
        this.hora = (paramObj.hora ? Number(paramObj.hora) : 0);
        this.descripcion = (paramObj.descripcion ? String(paramObj.descripcion) : '');
        return this.save()
    }


    //
    //  Borra instancia de la nube.
    //
    destroy() {
        return Api.delete('productos', this.id);
    };

};
