import jwt from "jsonwebtoken";
import userSchema from "../models/user.schema.js";

const auth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
  if (!authorization) {
   return res.status(401).json({ message: "token required" });
  }
  else{
    const token = authorization.split(" ")[1];
  const { id } = jwt.verify(token, process.env.SECRET_STRING);
  const user = await userSchema.findById(id );
  if (!user) {
   return res.status(401).json({ message: "unauthorized" });
  }
  req.id = id;
  }
  } catch (error) {
    res.status(401).json({ message: error });
  }
  next();
};

export default auth;
