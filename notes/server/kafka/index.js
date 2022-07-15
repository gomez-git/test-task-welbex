import kafka from 'kafkajs';

const { Kafka } = kafka;

export default new Kafka({
  clientId: 'note',
  brokers: ['kafka:9092'],
});
