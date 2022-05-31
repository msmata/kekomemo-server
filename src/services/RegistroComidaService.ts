const registroComidas: RegistroComidas[] = [
   { id: 1, idComida: 1, fecha: new Date(), tipoComida: 1 },
   { id: 2, idComida: 2, fecha: new Date(), tipoComida: 2 },
   { id: 3, idComida: 3, fecha: new Date(), tipoComida: 1 },
];

type RegistroComidas = {
   id: number;
   idComida: number;
   fecha: Date;
   tipoComida: number;
};

export class RegistroComidaService {
   constructor() {}

   public listarRegistros(): RegistroComidas[] {
      return registroComidas;
   }

   public agregarRegistroComida(registroNuevo: RegistroComidas) {
      const nuevoId = Math.max(...registroComidas.map((rc) => rc.id)) + 1;
      registroComidas.push({ ...registroNuevo, id: nuevoId });
   }
}
