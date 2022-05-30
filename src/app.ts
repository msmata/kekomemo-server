import express from 'express';
import cors from 'cors';
import { ComidaRoutes } from './routes/ComidaRoutes';
import { RegistroComidaRoutes } from './routes/RegistroComidaRoutes';

class App {
   private comidaRoutes: ComidaRoutes;
   private registroComidaRoutes: RegistroComidaRoutes;
   public app: express.Application;

   constructor() {
      this.app = express();
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(cors());
      this.comidaRoutes = new ComidaRoutes();
      this.registroComidaRoutes = new RegistroComidaRoutes();
      this.comidaRoutes.routes(this.app);
      this.registroComidaRoutes.routes(this.app);
   }
}

export default new App().app;
