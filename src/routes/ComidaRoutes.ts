import express from 'express';
import { ComidaController } from '../controllers/ComidaController';

export class ComidaRoutes {
   private comidaController: ComidaController;

   constructor() {
      this.comidaController = new ComidaController();
   }

   routes(app: express.Application) {
      console.log('comidaController de routes => ', this.comidaController);
      app.route('/comidas').get(this.comidaController.listarComidas);
   }
}
