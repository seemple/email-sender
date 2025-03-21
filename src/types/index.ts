export interface EmailRequest {
    from: string;
    subject: string;
    body: string;
    to: string | string[];
    isHtml?: boolean; // Optional parameter
}