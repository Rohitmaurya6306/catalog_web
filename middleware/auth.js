const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

module.exports = function(req, res, next) {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized: Invalid admin credentials' });
    }
};
