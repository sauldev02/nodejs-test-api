import { HTTP_STATUS } from "../constants/http-status";

interface ApiErrorParams {
  statusCode: keyof typeof HTTP_STATUS;
  message: string;
  details?: string;
  payload?: Record<string, any>;
}

type ApiErrorResponse = Omit<ApiErrorParams, "message" | "statusCode"> & { code: string };

export class ApiError extends Error {
  public statusCode: number;
  public error?: ApiErrorResponse;

  constructor({ message, statusCode, details, payload }: ApiErrorParams) {
    super(message);
    this.statusCode = HTTP_STATUS[statusCode] as number;

    this.error = {
      code: statusCode,
      details,
      payload,
    }
  }
}
