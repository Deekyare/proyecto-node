//aca hacemos uso del bcrypt

import bcrypt from "bcrypt";

const SALT_ROUND: number = 10;

//va  a devolver una promesa de tipo string que va a ser el password hasheado
export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUND);
};

//leer y comparar el hash de la bd

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
