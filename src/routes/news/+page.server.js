import { redirect } from '@sveltejs/kit';
import { DB_USER, DB_PASSWORD } from '$env/static/private';
// import { secretKey } from '$lib/secret/secrets';

export const load = ({ cookies, url }) => {
	// console.log({ secretKey });
	console.log(`Connecting to the database with username: ${DB_USER} with password: ${DB_PASSWORD}`);
	if (!cookies.get('username')) {
		throw redirect(307, `/auth?redirectTo=${url.pathname}`);
	}
};

// export const load =
