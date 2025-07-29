import express from 'express';
import { createEntry, getAllEntries } from '../controllers/formController.js';

const router = express.Router();

router.post('/form', createEntry);
router.get('/form', getAllEntries);

export default router;