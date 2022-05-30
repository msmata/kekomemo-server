import { Request, Response } from 'express';
import { ComidaService } from '../services/ComidaService';

export class ComidaController {
   private comidaService: ComidaService;

   constructor() {
      this.comidaService = new ComidaService();
   }

   public listarComidas = (_req: Request, res: Response) => {
      console.log('ComidaController => ', this);
      console.log('comidaService =>', this.comidaService);
      const listadoComidas = this.comidaService.listarComidas();
      return res.status(200).send(listadoComidas);
   };
}
