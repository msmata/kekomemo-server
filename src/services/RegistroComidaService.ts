import {
   collection,
   getDocs,
   CollectionReference,
   DocumentData,
   addDoc,
   Timestamp,
} from 'firebase/firestore';

import { db } from '../config/firebase-config';

type RegistroComidas = {
   id: string;
   idComida: string;
   fecha: Date;
   tipoComida: number;
};

export class RegistroComidaService {
   private registrosCollectionRef: CollectionReference<DocumentData>;

   constructor() {
      this.registrosCollectionRef = collection(db, 'registros');
   }

   public async listarRegistros(): Promise<RegistroComidas[]> {
      const firebaseData = await getDocs(this.registrosCollectionRef);
      const registrosDB = firebaseData.docs.map((doc) => {
         const timestamp = doc.get('fecha') as Timestamp;
         return {
            id: doc.id,
            idComida: doc.get('idComida'),
            fecha: new Date(timestamp.seconds * 1000),
            tipoComida: parseInt(doc.get('tipoComida')),
         };
      });
      return registrosDB;
   }

   public async agregarRegistroComida(registroNuevo: RegistroComidas) {
      const fecha = new Date(registroNuevo.fecha);
      const timestamp = new Timestamp(fecha.getTime() / 1000, 0);
      await addDoc(this.registrosCollectionRef, {
         idComida: registroNuevo.idComida,
         fecha: timestamp,
         tipoComida: registroNuevo.tipoComida,
      });
   }
}
