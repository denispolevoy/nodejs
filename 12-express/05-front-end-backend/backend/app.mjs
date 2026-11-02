import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Logs info about request
app.use(morgan('tiny'));
// Converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// Converts form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));
// Enable all CORS requests
app.use(cors());

app.use((req, res) => {
  const personData = {
    name: 'Denis',
    isStudent: true,
  };
  console.log(req.body);
  // return res.send('This is express server');
  return res.json(personData); // преобразует обьект в формат json и отправит его клиенту
});

app.listen(5000, () => console.log('Server is listening at port 5000'));
