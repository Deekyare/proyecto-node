import { user } from "../models/user.interface"
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret'


// va a recibir un user de tipo user. que es el modelo de user que creamos, con id email,etc
//va a devolver un string que es el jsonwebtoken
export const generateToken = (user: user): string => {
    return jwt.sign ({ id: user.id, email: user.email}, JWT_SECRET, {expiresIn: '1h'})
}