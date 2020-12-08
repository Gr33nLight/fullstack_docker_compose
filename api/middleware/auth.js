import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  const auth = req.header('Authorization');

  if (!auth || auth.split(' ').length <= 1 || auth.split(' ')[0] != 'Bearer') {
    return res.status(401).json({ msg: 'Authorization Denied' });
  }

  try {
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).send({ msg: 'Token is not valid' });
  }
}
