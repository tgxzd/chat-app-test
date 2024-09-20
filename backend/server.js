import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import MessageRoutes from './routes/message.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Middleware
app.use('/api/auth', authRoutes);
app.use('/api/messages' , MessageRoutes);




// Start the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});