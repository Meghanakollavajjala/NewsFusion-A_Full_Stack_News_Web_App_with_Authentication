const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from Bearer token
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // Attach user ID to request

    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
