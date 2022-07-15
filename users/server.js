import app from './server/app.js';
import sequelize from './server/db/db.js';
import producer from './server/kafka/producer.js';

const port = process.env.PORT ?? 4000;
const host = process.env.DB_HOST;

app.listen(port, async () => {
  console.log(`Server up on http://${host}:${port}`); // eslint-disable-line no-console
  await sequelize.authenticate();
  console.log('Database connected!'); // eslint-disable-line no-console
  await producer.connect();
  console.log('Producer connected!'); // eslint-disable-line no-console
});
