// app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import sequelize from './config/database.js';
import formRoutes from './routes/formRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', formRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection failed:', err);
});
