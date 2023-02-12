import express, { Request, Response } from 'express';
import { Response as ResponseNetwork } from '../../network/response';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.headers);
  res.header('custom-header', 'custom-value');
  ResponseNetwork.succes(req, res, 'messages list');
});

router.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.status(201).send({
    message: 'message created'
  });
});

export default router;
