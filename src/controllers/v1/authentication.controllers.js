import jwt from 'jsonwebtoken';
import * as UserModel from '../../models/user.model';
import * as ProfilModel from '../../models/profile.model';
import { HttpException, HttpStatus } from '../../errors/HttpException.error';


export const login = async(request, response, next) => {
    let token = "";
    const { email, password } = request.body;
    const user = await UserModel.findByCredentials({ email: email, password: password });
    if (user != null) {
        token = jwt.sign({ email: user.email }, 'SECRET');
        response.json({
            user: user,
            token
        });
    } else {
        next(new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED));
    }

}

export const register = async(request, response, next) => {
    const { email, password } = request.body;
    let updateAt = new Date();
    let createdAt = new Date();
    const checkUser = await UserModel.getUserByEmail(email);
    bcrypt.hash(password, trial, async(err, hash) => {
        const user = await UserModel.createUser({ email, password: hash, createdAt, updateAt, });
        response.status(201).json(user);
    });
};