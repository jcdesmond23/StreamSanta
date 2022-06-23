import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { watsonRouter } from './routes/index.js'

// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable/disable http request logging
app.use(morgan('dev'));

// enable json message body for posting data to API
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

// router to hit anything Watson
app.use('/watson', watsonRouter);

// default index route
app.get('/', (req, res) => {
  res.send('Welcome to StreamSensei');
});

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);
