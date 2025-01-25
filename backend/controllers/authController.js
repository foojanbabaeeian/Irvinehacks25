const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        console.error('Could not authenticate user', error.message);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expired' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(400).json({ success: false, message: 'Invalid token' });
        }
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    authenticate,
};