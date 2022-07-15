import kafka from './index.js';
import { deleteNotes } from '../dao/notes.js';

const consumer = kafka.consumer({ groupId: 'notes' });

export const deleteMessage = async () => {
  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      if (topic === 'delete-user') {
        await deleteNotes(message.value.toString());
      }
    },
  });
};

export default consumer;
