import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import pg from 'pg';

const pgClient = new pg.Client({
  user: 'postgres',
  password: 'supersecret',
  host: 'db',
  database: 'postgres',
});
await pgClient.connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', async (req, res) => {
  const result = await pgClient.query('SELECT * FROM test');
  res.json(result);
});

app.post('/', (req, res) => {
  const { test } = req.body;
  if (test) {
    console.log(test);
    res.sendStatus(200);
  }
  res.sendStatus(400);
});

export default app;
