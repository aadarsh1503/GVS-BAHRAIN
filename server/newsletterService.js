import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import validator from 'validator';

dotenv.config();

export const sendNewsletter = async (email) => {
  // Validate email format
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email address.");
  }

  // Check if the email is from Gmail
  const emailDomain = email.split('@')[1];
  if (emailDomain !== 'gmail.com') {
    throw new Error("Please use a valid Gmail address.");
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Mail options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Global Vision Solution!',
    text: 'Thank you for subscribing to our newsletter!',
    html: `
      <h2>Welcome to Global Vision Solution!</h2>
      <p>Thank you for subscribing to our newsletter. We’re excited to share our latest updates with you!</p>
      <p>Stay connected,</p>
      <p><strong>Global Vision Solution Team</strong></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
