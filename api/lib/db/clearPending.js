const { createKeyvMongo } = require('./connectDb');
const Keyv = require('keyv');

module.exports = async () => {
  const keyvMongo = createKeyvMongo('cache');
  const pendingRequests = new Keyv({ store: keyvMongo, namespace: 'pendingRequests' });
  await pendingRequests.clear();
};
