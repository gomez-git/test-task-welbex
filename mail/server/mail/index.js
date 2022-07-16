import nodemailer from 'nodemailer';

export default (email) => nodemailer.createTestAccount((_err, account) => {
  const transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  const message = {
    from: `"WelbeX" <${account.user}>`,
    to: email,
    subject: 'Welcome',
    text: 'Welcome',
    html: '<b>Welcome</b>',
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(`Error occurred. ${err.message}`);
      return process.exit(1);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});
