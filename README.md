# Email Service

This project is a simple web service that sends emails using the SendGrid API. It is built with TypeScript and Express.

## Project Structure

```
email-service
├── src
│   ├── app.ts               # Entry point of the application
│   ├── services
│   │   └── emailService.ts  # Service for sending emails
│   ├── routes
│   │   └── emailRoutes.ts    # Routes for email-related operations
│   └── types
│       └── index.ts         # Type definitions
├── package.json             # NPM package configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd email-service
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your SendGrid API key:
   - Create a `.env` file in the root directory and add your SendGrid API key:
     ```
     SENDGRID_API_KEY=your_sendgrid_api_key
     ```

4. Compile the TypeScript files:
   ```
   npm run build
   ```

5. Start the application:
   ```
   npm start
   ```

## Usage

To send an email, make a POST request to the `/send-email` endpoint with the following JSON body:

```json
{
  "to": "recipient@example.com",
  "subject": "Your Subject",
  "body": "Email body content"
}
```

## License

This project is licensed under the MIT License.