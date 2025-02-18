// Entry point for the backend server
const express = require('express');
import { createServer } from 'http';
const bodyParser = require('body-parser');
const cors = require('cors');
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', routes);

const server = createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
