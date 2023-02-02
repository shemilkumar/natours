const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// process.on('uncaughtException', (err) => {
//   console.log(err.name, err.message);
//   console.log('UNCAUGHT EXPECTION Shutting down...');
//   process.exit(1);
// });

const app = require('./app');

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

const server = app.listen(3000, () => {
  console.log('App running at port 3000...');
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
