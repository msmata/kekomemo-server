import { Request, Response } from 'express';
import { RegistroComidaService } from '../services/RegistroComidaService';

export class RegistroComidaController {
   private registroComidaService: RegistroComidaService;

   constructor() {
      this.registroComidaService = new RegistroComidaService();
   }

   public listarRegistroComidas = (_req: Request, res: Response) => {
      const registroComidas = this.registroComidaService.listarRegistros();
      return res.status(200).send(registroComidas);
   };

   public agregarRegistroComida = (req: Request, res: Response) => {
      const idComida = req.body.idComida;
      const fecha = req.body.fecha;
      const tipoComida = req.body.tipoComida;
      this.registroComidaService.agregarRegistroComida({
         id: 1,
         idComida,
         fecha,
         tipoComida,
      });
      return res.status(200).send('OK');
   };
}
