import { Request, Response, NextFunction } from 'express';

export const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({ error: 'Unknown Endpoint' });
};

export class ServerError extends Error {
  name: string;

  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ServerError';
    this.status = status;
  }
}

export const errorHandler = (
  error: Error | ServerError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ServerError) {
    res
      .status(error.status)
      .send({ message: error.message, status: error.status });
  } else {
    next(error);
  }
};
