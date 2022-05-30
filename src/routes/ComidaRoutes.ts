import express from 'express';
import { ComidaController } from '../controllers/ComidaController';

export class ComidaRoutes {
   private comidaController: ComidaController;

   constructor() {
      this.comidaController = new ComidaController();
   }

   routes(app: express.Application) {
      app.route('/comidas').get(this.comidaController.listarComidas);
      app.route('/comidas').post(this.comidaController.agregarComida);
   }
}
