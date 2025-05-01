import { connectDB, client } from '../db.mjs';

async function main(email) {
    const db = await connectDB();
    const users = db.collection('subscribers');

    let created_at = new Date();
    let formatted = created_at.toISOString().split('T')[0];

    // Проверим, существует ли уже пользователь с таким email
    const existingUser = await users.findOne({ email: email });
    if (existingUser) {
        console.log('Пользователь с таким email уже существует');
        return;
    }
    // Добавим документ
    await users.insertOne({ email: email, created_at: formatted });

    await client.close(); // Закрыть соединение
}

export default main;