const jwt = require("jsonwebtoken");

const { createError } = require("./error.js");


const verifyToken = (req, res, next) => {
  // Get the token from the request headers or cookies
  const token = req.headers.authorization || req.cookies.access;

  if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
      // Verify the token
      const decoded = jwt.verify(token, 'thesecreatkey');
      req.user = decoded; // Set the decoded user information in the request object
      next(); // Move to the next middleware
  } catch (error) {
      return res.status(400).json({ message: 'Invalid token.' });
  }
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

module.exports = { verifyAdmin, verifyToken, verifyUser };
