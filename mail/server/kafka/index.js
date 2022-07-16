import kafka from 'kafkajs';

const { Kafka } = kafka;

export default new Kafka({
  clientId: 'mail',
  brokers: ['kafka:9092'],
});
