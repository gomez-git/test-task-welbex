import app from './server/app.js';
import consumer, { createMessage } from './server/kafka/consumer.js';

const port = process.env.PORT ?? 4000;
const host = process.env.HOST ?? 'localhost';

app.listen(port, async () => {
  console.log(`Server up on http://${host}:${port}`); // eslint-disable-line no-console
  setTimeout(async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'create-user', fromBeginning: true });
    await createMessage();
    console.log('Consumer connected!'); // eslint-disable-line no-console
  }, 5000);
});
