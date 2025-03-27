import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app = express ()

//middelware para utilizar json al recibir y enviar info a la api
app.use(express.json())

//Routes
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
//Autentificación
//User



export default app