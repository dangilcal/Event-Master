export class Evento {
  id: number;

  nombre: string | null;
  nInscripciones: number;
  aforoMax: number;
  categoria: string | null;
  direccion: string | null;
  fechaInicio: Date | null;
  fechaFin: Date | null;
  descripcion: string | null;
  imagen: string | null;

  constructor() {
    this.id = 0;
    this.nombre = null;
    this.nInscripciones = 0;
    this.aforoMax = 0;
    this.categoria = null;
    this.direccion = null;
    this.fechaInicio = null;
    this.fechaFin = null;
    this.descripcion = null;
    this.imagen = null;
  }
}
