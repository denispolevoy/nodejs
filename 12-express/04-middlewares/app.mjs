import express from 'express';
import morgan from 'morgan';

const app = express();

// Logs info about request
app.use(morgan('tiny'));
// Converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// Converts form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  console.log(req.body);
  return res.send('This is express server');
});

app.listen(5000, () => console.log('Server is listening at port 5000'));
