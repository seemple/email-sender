import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not defined in the environment variables');
}

export const config = {
    sendGridApiKey: process.env.SENDGRID_API_KEY,
    port: process.env.PORT || 3000,
};