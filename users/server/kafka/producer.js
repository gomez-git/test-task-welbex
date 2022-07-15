import kafka from './index.js';

const producer = kafka.producer();

export const sendDeleteMessage = async ({ id }) => producer.send({
  topic: 'delete-user',
  messages: [{ value: id }],
});

export const sendCreateMessage = async (email) => producer.send({
  topic: 'create-user',
  messages: [{ value: email }],
});

export default producer;
