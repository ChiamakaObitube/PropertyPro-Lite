import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Routes from './routes/indexRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(Routes);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to PropertyPro-Lite',
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`PropertyPro-Lite started on port ${port}`);
});

export default app;
