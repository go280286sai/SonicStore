// subscription.mjs
import { connectDB } from './db.mjs';
import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer';

 const transporter = createTransport({
    host: process.env.HOST_MAIL,
    port: process.env.PORT_MAIL,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASSWORD_MAIL
    }
  });

function generateToken() {
  return randomBytes(32).toString('hex');
}

export async function sendConfirmationEmail(email, token) {
    const host = process.env.HOST;
    const port = process.env.PORT;
  const link = `http://${host}:${port}/confirm?token=${token}`;
  await transporter.sendMail({
    from: 'no-reply@example.com',
    to: email,
    subject: 'Подтвердите подписку',
    html: `<p>Подтвердите подписку: <a href="${link}">${link}</a></p>`
  });
}

export async function subscribeUser(email) {
  const db = await connectDB();
  const col = db.collection('subscriptions');

  const exists = await col.findOne({ email });
  if (exists) return { status: 'already_subscribed' };

  const token = generateToken();

  await col.insertOne({
    email,
    confirmed: false,
    token,
    created_at: new Date(),
    plan: 'free'
  });

  await sendConfirmationEmail(email, token);
  return { status: 'pending_confirmation' };
}

export async function confirmUser(token) {
  const db = await connectDB();
  const col = db.collection('subscriptions');

  const result = await col.findOneAndUpdate(
    { token },
    { $set: { confirmed: true }, $unset: { token: '' } }
  );

  return result.value ? { status: 'confirmed' } : { status: 'invalid_token' };
}

export async function unsubscribeUser(email) {
  const db = await connectDB();
  const col = db.collection('subscriptions');

  const result = await col.deleteOne({ email });
  return result.deletedCount ? { status: 'unsubscribed' } : { status: 'not_found' };
}

export async function upgradeUser(email, plan) {
  const db = await connectDB();
  const col = db.collection('subscriptions');

  const validPlans = ['free', 'premium'];
  if (!validPlans.includes(plan)) return { status: 'invalid_plan' };

  const result = await col.updateOne({ email }, { $set: { plan } });
  return result.modifiedCount ? { status: 'upgraded', plan } : { status: 'not_found' };
}
