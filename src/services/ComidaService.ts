const listadoComidas: Comida[] = [
   { id: 1, name: 'Guiso de lentejas' },
   { id: 2, name: 'Ravioles' },
   { id: 3, name: 'Fideos' },
   { id: 4, name: 'Milanesas' },
   { id: 5, name: 'Hamburguesas' },
];

type Comida = {
   id: number;
   name: string;
};

export class ComidaService {
   constructor() {}

   public listarComidas(): Comida[] {
      return listadoComidas;
   }

   public agregarComida(comidaNueva: string) {
      const nuevoId = Math.max(...listadoComidas.map((lc) => lc.id)) + 1;
      listadoComidas.push({ id: nuevoId, name: comidaNueva });
   }
}
