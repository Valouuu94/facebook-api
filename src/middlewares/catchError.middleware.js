export const catchError = () => ({ statusCode = 500, message }, _request, response, _next) =>
  response
    .status(statusCode)
    .json({ error: { message } });
