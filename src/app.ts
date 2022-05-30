import express from 'express';
import cors from 'cors';
import { ComidaRoutes } from './routes/ComidaRoutes';

class App {
   private comidaRoutes: ComidaRoutes;
   public app: express.Application;

   constructor() {
      this.app = express();
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(cors());
      this.comidaRoutes = new ComidaRoutes();
      console.log('comidaRoutes => ', this.comidaRoutes);
      this.comidaRoutes.routes(this.app);
   }
}

export default new App().app;
