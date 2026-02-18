export class EmailAlreadyExistsError extends Error {
	statusCode = 400;

	constructor() {
		super('Email already exists');
	}
}

export class UserTooYoungError extends Error {
	statusCode = 400;
	constructor() {
		super('User is too young');
	}
}
