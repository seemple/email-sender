import express from 'express';
import bodyParser from 'body-parser';
import { setEmailRoutes } from './routes/emailRoutes';
import { config } from './config';

const app = express();
const PORT = config.port;

app.use(bodyParser.json());

// Register the email routes
app.use('/api', setEmailRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});