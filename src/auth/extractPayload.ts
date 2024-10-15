import jwt from "jsonwebtoken";
import SECRET from "../constant/secret";

const extractPayload = (authHeader: any) => {
  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  const payload = jwt.verify(token, SECRET);
  return payload;
};

export default extractPayload;
