import express from  'express'
import {PORT} from './config/env.js'
import connectToDatabase from './database/mongodb.js';
import bookRouter from './router/book.routes.js';

const app = express();

app.use(express.json());
app.use('/api/v1/books', bookRouter);

app.listen(PORT, async() => {
  console.log(`Server listening at http://localhost:${PORT}`);
  await connectToDatabase();
});
