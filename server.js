const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const api = require('./routes/api');



dotenv.config();
const db = require('./config/db').default;
// db();
// Initialize Express app

const app = express();
app.use(cors());


app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(helmet({
  crossOriginResourcePolicy: false
}))


app.use('/api', api);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});








