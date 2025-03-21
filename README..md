
  # Email Sender Service

 

## Overview

The **Email Sender Service** is a simple web service built with Node.js and Express to send emails using the SendGrid API. It provides an endpoint to send emails with support for plain text or HTML content.

  

## Stack and Requirements

### Stack

- **Node.js**: Backend runtime environment.

- **Express**: Web framework for building RESTful APIs.

- **SendGrid API**: Email delivery service.

- **Docker**: Containerization for deployment.

- **Docker Compose**: Multi-container orchestration.

  


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


### Requirements

- **Node.js** (v18 or higher)

- **npm** (v8 or higher)

- **Docker** (v20 or higher)

- **Docker Compose** (v2.0 or higher)

- A valid **SendGrid API Key**

  

## Steps to Start Development

1. Clone the repository:

```bash
git clone <repository-url>
cd email-sender
```

  

2. Install dependencies:

```bash
npm install
```

  

3. Create a `.env` file in the root directory and add the following:

```dotenv
SENDGRID_API_KEY=your_actual_sendgrid_api_key
PORT=3002
```

  

4. Start the development server:

```bash
npm run start
```

  

5. Test the API using Postman or `curl`:

-  **Endpoint**: `http://localhost:3002/api/send-email`
-  **Method**: `POST`
-  **Headers**: `Content-Type: application/json`
-  **Body**:
```json

{

"to": "recipient@example.com",
"subject": "Test Email",
"body": "<h1>Hello, this is a test email!</h1>",
"from": "verified-sender@example.com",
"isHtml": true
}

```

  

## Build

To build the project for production:

1. Run the following command:

```bash
npm run build
```

2. The compiled files will be available in the `dist/` directory.

  

## Docker

### Build and Run with Docker Compose

1. Ensure Docker and Docker Compose are installed on your system.

2. Build and start the service:

```bash
docker-compose up --build
```

3. The service will be available at `http://localhost:3002/api/send-email`.

  

### Environment Variables

Ensure the `.env` file is present in the root directory with the required variables:

```dotenv
SENDGRID_API_KEY=your_actual_sendgrid_api_key
PORT=3002
```

  

### Verify the Docker Container

To check if the container is running:

```bash
docker  ps
```

  

### Stop the Service

To stop the service:

```bash
docker-compose  down
```

  

## License

This project is licensed under the MIT License.

 

## Key Sections:

1. **Overview**: Describes the purpose of the service.

2. **Stack and Requirements**: Lists the technologies used and prerequisites.

3. **Steps to Start Development**: Explains how to set up the project locally.

4. **Build**: Instructions for building the project.

5. **Docker**: Details on how to use Docker for running the service.