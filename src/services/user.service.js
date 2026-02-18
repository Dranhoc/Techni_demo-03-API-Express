import dayjs from 'dayjs';
import db from '../database/index.js';
import bcrypt from 'bcrypt';
const { ENCRYPTION_ROUND } = process.env;

const userService = {
	create: async (data) => {
		// pas deux fois le même email
		const existingEmail = await db.User.findOne({
			where: {
				email: data.email,
			},
		});
		if (existingEmail) {
			// TODO custom error
			throw new Error('Email already exists');
		}
		// plus de 18ans
		const checkDate = dayjs().subtract(18, 'year');
		const birthDate = dayjs(data.birthDate);
		if (birthDate > checkDate) {
			throw new Error('User is too young');
		}
		data.password = bcrypt.hashSync(data.password, +ENCRYPTION_ROUND);
		const newUser = await db.User.create(data);
		return newUser;
	},
};

export default userService;
