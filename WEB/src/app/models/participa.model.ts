export class Participa {
  id: number;

  idUsuario: number;
  idEvento: number;
  creaOParticipa: boolean | null;

  constructor() {
    this.id = 0;
    this.idUsuario = 0;
    this.idEvento = 0;
    this.creaOParticipa = null;

  }
}
