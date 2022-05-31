import {
   collection,
   getDocs,
   CollectionReference,
   DocumentData,
} from 'firebase/firestore';

import { db } from '../config/firebase-config';

const listadoComidas: Comida[] = [
   { id: '1', name: 'Guiso de lentejas' },
   { id: '2', name: 'Ravioles' },
   { id: '3', name: 'Fideos' },
   { id: '4', name: 'Milanesas' },
   { id: '5', name: 'Hamburguesas' },
];

type Comida = {
   id: string;
   name: string;
};

export class ComidaService {
   private comidasCollectionRef: CollectionReference<DocumentData>;

   constructor() {
      this.comidasCollectionRef = collection(db, 'comidas');
   }

   public async listarComidas(): Promise<Comida[]> {
      const firebaseData = await getDocs(this.comidasCollectionRef);
      const comidasDB = firebaseData.docs.map((doc) => {
         return { id: doc.id, name: doc.get('name') as string };
      });
      return comidasDB;
   }

   public agregarComida(comidaNueva: string) {
      const nuevoId =
         Math.max(...listadoComidas.map((lc) => parseInt(lc.id))) + 1;
      listadoComidas.push({ id: nuevoId.toString(), name: comidaNueva });
   }
}
