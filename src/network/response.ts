/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

const Response = {
  succes: (req: Request, res: Response, message: any, status = 200) => {
    res.status(status).send({
      error: '',
      body: message
    });
  },
  error: (req: Request, res: Response, message: any, status = 500) => {
    res.status(status).send({
      error: message,
      body: ''
    });
  }
};

export { Response };
