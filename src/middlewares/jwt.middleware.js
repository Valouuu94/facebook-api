// import { request } from 'express';
// import jwt from 'jsonwebtoken';
// import { HttpException, HttpStatus } from '../errors/HttpException.error';
// import * as UserModel from '../models/user.model';

// export const jwtMiddleware = ({ secret }) =>
//   async ({ headers: { authorization: token } }, _response, next) => {
//     try {
//       const { id } = jwt.verify(token, secret);
//       const user = await UserModel.findById({ id });
//       if (!user) {
//         return next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
//       }

//       request.user = user;

//       next();
//     } catch(error) {
//       next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
//     }
//   }

import jwt from 'jsonwebtoken';

const jwtMiddleware = (request, response, next) => {
  const { authorization: token } = request.headers;
  
  try {
    const payload = jwt.verify(token, 'SECRET');
    /** TODO: Find user by id from Payload */
    request.user = payload;

    next();
  } catch (error) {
    response.status(401).json({
      error: {
        code: 'E010',
        message: 'Unauthorized',
      },
    });
  }
}

export default jwtMiddleware;