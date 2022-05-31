import { Request, Response } from 'express';
import { ComidaService } from '../services/ComidaService';

export class ComidaController {
   private comidaService: ComidaService;

   constructor() {
      this.comidaService = new ComidaService();
   }

   public listarComidas = async (_req: Request, res: Response) => {
      const listadoComidas = await this.comidaService.listarComidas();
      return res.status(200).send(listadoComidas);
   };

   public agregarComida = async (req: Request, res: Response) => {
      const comidaNueva = req.body.nombreComida;
      await this.comidaService.agregarComida(comidaNueva);
      return res.status(200).send('OK');
   };
}
