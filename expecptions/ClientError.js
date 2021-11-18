import { CLIENT_ERR } from "../lib/constantErrorType";

class ClientError extends Error {
  CLIENT_ERR = 'CLIENT_ERR';
  constructor(message, type = CLIENT_ERR, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
  }
}

export default ClientError;
