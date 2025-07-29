// app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/database.js';
import formRoutes from './routes/formRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import swaggerUI from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger-output.json'); 


// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();



// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Form Application API');
});

app.use('/api', formRoutes);

// Error handling middleware
app.use(errorHandler);

// Swagger route setup
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Start server after DB sync
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection failed:', err);
});