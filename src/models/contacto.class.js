export class Contacto{
    name = '';
    lastName = '';
    email = '';
    conectado = true;

    constructor(name, lastName, email, conectado){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.conectado = conectado;
    }
}