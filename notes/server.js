import app from './server/app.js';
import sequelize from './server/db/db.js';
import consumer, { deleteMessage } from './server/kafka/consumer.js';

const port = process.env.PORT ?? 4000;
const host = process.env.DB_HOST;

app.listen(port, async () => {
  console.log(`Server up on http://${host}:${port}`); // eslint-disable-line no-console
  await sequelize.authenticate();
  console.log('Database connected!'); // eslint-disable-line no-console
  await consumer.connect();
  await consumer.subscribe({ topic: 'delete-user' });
  await deleteMessage();
  console.log('Consumer connected!'); // eslint-disable-line no-console
});
