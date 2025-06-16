import { Response } from "express";
import { ApiError } from "../errors/api-error";
import { HTTP_STATUS } from "../constants/http-status";

interface SuccessResponseParams {
  res: Response;
  data?: any;
  message?: string;
  statusCode?: number;
}

interface ErrorResponseParams {
  res: Response;
  error: ApiError | Error;
}

export function apiSuccessResponse({
  res,
  data = null,
  message = "Operation successful",
  statusCode = HTTP_STATUS.OK,
}: SuccessResponseParams) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function apiErrorResponse({ res, error }: ErrorResponseParams) {
  console.error(error);

  const statusCode = error instanceof ApiError ? error.statusCode : HTTP_STATUS.INTERNAL_SERVER_ERROR;

  const errorResponse = error instanceof ApiError ? error : {
		message: "Internal Server Error",
		error: {
			code: "INTERNAL_SERVER_ERROR",
			details: "Something went wrong",
			payload: undefined,
		},
	};

  const response = {
    success: false,
    message: errorResponse.message,
    error: errorResponse.error,
  };

  return res.status(statusCode).json(response);
}
