import {
   collection,
   getDocs,
   CollectionReference,
   DocumentData,
   addDoc,
} from 'firebase/firestore';

import { db } from '../config/firebase-config';

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

   public async agregarComida(comidaNueva: string) {
      const comidas = await this.listarComidas();
      if (!comidas.find((c) => c.name === comidaNueva)) {
         await addDoc(this.comidasCollectionRef, { name: comidaNueva });
      }
   }
}
