import kafka from 'kafkajs';

const { Kafka } = kafka;

export default new Kafka({
  clientId: 'user',
  brokers: ['kafka:9092'],
});
