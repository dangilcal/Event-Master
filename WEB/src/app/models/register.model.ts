export class Register {
  nombre: string | null;
  apellidos: string | null;
  apodo: string | null;
  dni: string | null;
  email: string | null;
  passwordHash: string | null;

  constructor() {
    this.nombre = null;
    this.apellidos = null;
    this.apodo = null;
    this.dni = null;
    this.email = null;
    this.passwordHash = null;
  }
}
