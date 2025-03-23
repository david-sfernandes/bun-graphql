import jwt from "jsonwebtoken";
import SECRET from "../../constant/secret";

export default function extractPayload(authHeader: string) {
  if (!authHeader) return null;
  const token = authHeader.split(" ")[1];
  const payload = jwt.verify(token, SECRET);
  return payload;
}
