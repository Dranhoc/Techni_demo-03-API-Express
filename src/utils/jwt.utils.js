import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

export const generateToken = (user) => {
	const payload = {
		id: user.id,
		role: user.role,
	};
	const token = jwt.sign(payload, JWT_SECRET, {
		expiresIn: 60 * 60 * 2, // temps de vie du token en secondes
	});

	return token;
};
