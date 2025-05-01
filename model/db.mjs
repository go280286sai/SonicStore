import { MongoClient } from 'mongodb';

const uri = 'mongodb://root:masterkey@mongo:27017';
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('✅ Успешное подключение к MongoDB');
    const db = client.db('testdb');
    return db;
  } catch (err) {
    console.error('❌ Ошибка подключения:', err);
  }
}

export { connectDB, client };

