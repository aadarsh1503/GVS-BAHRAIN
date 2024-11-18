import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sendEmail } from './emailService.js';
import { sendNewsletter } from './newsletterService.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello from Node server!');
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { company, name, ddd, telephone, email, message, uniqueId } = req.body;

  // Log the data received (no console here, just for reference)
  // console.log('Received form data:', req.body);

  try {
    // Send email with all the data including uniqueId
    await sendEmail({ company, name, ddd, telephone, email, message, uniqueId });

    // Send response back to the client
    res.status(200).json({
      message: 'Email sent successfully',
      data: { company, name, ddd, telephone, email, message, uniqueId },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.post('/subscribe-newsletter', async (req, res) => {
    const { email } = req.body;
  
    try {
      await sendNewsletter(email); // Use the sendNewsletter function
      res.status(200).json({ message: 'Newsletter sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending newsletter' });
    }
  });
  app.post('/verify-captcha', async (req, res) => {
    const { token } = req.body;  // Captcha token sent from the frontend
    const secretKey = 'YOUR_SECRET_KEY'; // reCAPTCHA secret key
  
    // Google reCAPTCHA verification URL
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;
  
    try {
      const response = await fetch(verificationUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        res.json({ message: 'Captcha verified successfully' });
      } else {
        res.status(400).json({ message: 'Captcha verification failed' });
      }
    } catch (error) {
      console.error("Error verifying captcha:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
