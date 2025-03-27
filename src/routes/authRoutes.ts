import express from 'express'
import { login, register } from '../controllers/authControllers';

//enrutador de express
const router = express.Router()

//rutas
//en el registro se creará un nuevo usuario y se guardará en la bd
router.post('/register', register)
router.post('/login', login)

export default router;