const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: 'Unknown Endpoint' });
};

export class ServerError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ServerError';
    this.status = status;
  }
}

const errorHandler = (error, _req, res, next) => {
  res
    .status(error.status)
    .send({ message: error.message, status: error.status });
};

export { errorHandler, unknownEndpoint };
