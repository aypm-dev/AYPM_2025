import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { PORTFOLIO_EMAIL, APP_PASSWORD } from '$env/static/private';
// @ts-ignore
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: PORTFOLIO_EMAIL,
		pass: APP_PASSWORD
	}
});

const schema = z.object({
	email: z.string().email(),
	body: z.string().refine((value) => value.length > 0, 'Body required')
});

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		if (!form.valid) return fail(400, { form });

		try {
			const mailOptions = {
				from: PORTFOLIO_EMAIL,
				to: PORTFOLIO_EMAIL,
				replyTo: form.data.email,
				subject: 'AYPM PORTFOLIO: ' + form.data.email,
				text: form.data.body
			};

			const info = await transporter.sendMail(mailOptions);

			console.log(info.response);
		} catch (error) {
			console.error(error);
		}

		return { form };
	}
};
