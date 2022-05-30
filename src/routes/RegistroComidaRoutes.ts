import express from 'express';
import { RegistroComidaController } from '../controllers/RegistroComidaController';

export class RegistroComidaRoutes {
   private registroComidaController: RegistroComidaController;

   constructor() {
      this.registroComidaController = new RegistroComidaController();
   }

   routes(app: express.Application) {
      app.route('/registros').get(
         this.registroComidaController.listarRegistroComidas,
      );
   }
}
