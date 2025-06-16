import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { apiErrorResponse } from "@shared/responses/api-response";

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //... Acciones adicionales como guardar registros de errores etc.
  apiErrorResponse({ res, error: err });
};

export default errorHandler;