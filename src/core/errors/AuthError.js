import AppError from "@/core/errors/AppError";

export default class AuthError extends AppError {
  constructor(data, ...defaultParams) {
    super(data, ...defaultParams);
  }
}
