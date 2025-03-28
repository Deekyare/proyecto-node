import jwt from 'jsonwebtoken';
import express, { NextFunction, Request, Response } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/usersControllers';

//enrutador de express
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret'

//rutas

//middleware de jwt para ver si estamos autenticados. EL meddleware necesita un next, 
//para q despues q haga lo q hace haga next

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  //para la autenticacion mandamos el token a traves del header
const authHeader = req.headers ['authorization']
//hacemos un split porque necesitamos la segunda parte despues del token
const token = authHeader && authHeader.split(' ')[1]
if (!token) {
    return res.status(401).json({error: 'No autorizado'})
}
jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if(err){
        console.error('Error en la autenticación:', err)
        return res.status(403).json ({ error: 'No tienes acceso a este recurso'})
    }
    next();
})
    
}

router.post("/", authenticateToken,createUser);
router.get("/", authenticateToken, getAllUsers);
router.get("/:id", authenticateToken, getUserById);
router.put("/:id", authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);

export default router;
