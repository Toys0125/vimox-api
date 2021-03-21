import { Route } from '../shared/interfaces';
import { signUp, login } from '../controllers';
import { schemeSignup } from '../validationSchemes';
import { validateScheme } from '../middlewares';

export const auth: Route[] = [
	{
		path: '/auth/signup',
		method: 'post',
		handlers: [validateScheme(schemeSignup), signUp],
	},
	{
		path: '/auth/login',
		method: 'post',
		handlers: [login],
	},
];
