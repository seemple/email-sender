import { Router, Request, Response } from 'express';
import { EmailService } from '../services/emailService';
import { EmailRequest } from '../types';

const router = Router();
const emailService = new EmailService();

export function setEmailRoutes() {
    router.post('/send-email', async (req: Request<{}, {}, EmailRequest>, res: Response) => {
        const { from, subject, body, to, isHtml } = req.body;

        try {
            await emailService.sendEmail(from, subject, body, to, isHtml);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ 
                message: 'Failed to send email', 
                error: error instanceof Error ? error.message : 'Unknown error' 
            });
        }
    });

    return router;
}