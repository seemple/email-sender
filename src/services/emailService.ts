import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { config } from '../config';

if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not defined in the environment variables');
}
sgMail.setApiKey(config.sendGridApiKey);

@Injectable()
export class EmailService {
    async sendEmail(from: string, subject: string, body: string, to: string | string[], isHtml: boolean = false): Promise<void> {
        const msg = {
            from,
            subject,
            to: to,
            ...(isHtml ? { html: body } : { text: body }),
        };

        try {
            await sgMail.send(msg);
        } catch (error) {
            if (error instanceof Error) {
                console.error('SendGrid Error:', (error as any).response?.body || error.message);
            } else {
                console.error('SendGrid Error:', error);
            }
            throw error;
        }
    }
}