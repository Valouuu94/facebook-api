import express from 'express';
import routes from './routes/main.js';

export const launch = ({ protocol, port, host }) => {
  const application = express();

  application.use(express.json());
  application.use(routes);

  application.listen(
    port,
    () => console.log(`API ready at ${protocol}://${host}:${port}`),
  );
}

