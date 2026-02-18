import userService from '../services/user.service.js';

const authController = {
	register: async (req, res) => {
		await userService.create(req.data);

		res.status(204).send();
	},
};

export default authController;
