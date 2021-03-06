import InvariantError from "../../expecptions/InvariantError";
import { VALIDATION_ERR } from "../../lib/constantErrorType";
import { UserPayloadSchema } from "./schema";

const userValidation = {
  validateUserPayload: (payload) => {
    const validationResult = UserPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
};

export default userValidation;
