import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const node_env = 'development'; // Set to 'development' or 'production' as needed
    const JWT_SECRET = 'NHgZ1G19UO8eXxhkMCdToxtsQ8jc/o0L8WCfO0lWsI0=';
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // Prevent XSS attack
        sameSite: 'strict', // CSRF attack
        secure: node_env === 'production' // HTTPS
    });
};

export default generateTokenAndSetCookie;