import { Router } from 'express';
const router = Router();
import { createTransport } from 'nodemailer';

router.post('/send', async (req, res) => {
  const { name, email, phone, content } = req.body;

  const transporter = createTransport({
    host: process.env.HOST_MAIL,
    port: process.env.PORT_MAIL,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASSWORD_MAIL
    }
  });
  const htmlTemplate = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2>Новое сообщение с сайта</h2>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    <p><strong>Сообщение:</strong><br>${content.replace(/\n/g, '<br>')}</p>
  </div>
`;
const mailOptions = {
  from: `"${name}" <${email}>`,
  to: 'получатель_email@gmail.com',
  subject: `Новое сообщение от ${name}`,
  html: htmlTemplate
};

  try {
    await transporter.sendMail(mailOptions);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при отправке сообщения.');
  }
});

export default router;