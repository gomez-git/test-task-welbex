import kafka from './index.js';
import sendEmail from '../mail/index.js';

const consumer = kafka.consumer({ groupId: 'mails', maxInFlightRequests: 1 });

export const createMessage = async () => {
  await consumer.run({
    eachMessage: ({ topic, message }) => {
      if (topic === 'create-user') {
        setTimeout(() => consumer.resume([{ topic }]), 1000);
        consumer.pause([{ topic }]);
        sendEmail(message.value.toString());
      }
    },
  });
};

export default consumer;
