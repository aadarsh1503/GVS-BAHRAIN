import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch'; // Ensure node-fetch is installed
import { sendEmail } from './emailService.js';
import { sendNewsletter } from './newsletterService.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default Route
app.get('/', (req, res) => {
  res.send('Hello from Node server!');
});

// Email Sending Endpoint
app.post('/send-email', async (req, res) => {
  const {
    company,
    name,
    ddd,
    telephone,
    email,
    message,
    uniqueId,
    portOfLoading,
    portOfLoadingCity,
    portOfDischarge,
    portOfDischargeCity,
    commodity,
    grossWeight,
    weightUnit,
    length,
    width,
    height,
    dimensionUnit,
    boxesPallets,
    boxPalletSize,
    boxPalletUnit,
    modeOfShipment,
  } = req.body;

  try {
    // Format dimensions
    const dimensions = `${length} ${dimensionUnit} × ${width} ${dimensionUnit} × ${height} ${dimensionUnit}`;
    

    // Call the sendEmail function
    await sendEmail({
      company,
      name,
      ddd,
      telephone,
      email,
      message,
      uniqueId,
      portOfLoading,
      portOfLoadingCity,
      portOfDischarge,
      portOfDischargeCity,
      commodity,
      grossWeight,
      weightUnit,
      dimensions,
      boxesPallets,
      boxPalletSize,
      boxPalletUnit,
      modeOfShipment,
    });

    // Send response back to the client
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error in /send-email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});


// Newsletter Subscription Endpoint
app.post('/subscribe-newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    await sendNewsletter(email); // Use the sendNewsletter function
    res.status(200).json({ message: 'Newsletter sent successfully' });
  } catch (error) {
    console.error('Error sending newsletter:', error);
    res.status(500).json({ message: 'Error sending newsletter' });
  }
});

// Captcha Verification Endpoint
app.post('/verify-captcha', async (req, res) => {
  const { token } = req.body; // Captcha token sent from the frontend
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use your secret key from environment variables

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
    console.error('Error verifying captcha:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
