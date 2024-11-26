import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async ({
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
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name} <${email}>" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact Us Form Submission - Ref: ${uniqueId}`,
    text: `
      Reference ID: ${uniqueId}
      Company: ${company}
      Name: ${name}
      DDD: ${ddd}
      Telephone: ${telephone}
      Email: ${email}
      Message: ${message}

      --- Additional Information ---
      Port of Loading: ${portOfLoading || 'N/A'} (City: ${portOfLoadingCity || 'N/A'})
      Port of Discharge: ${portOfDischarge || 'N/A'} (City: ${portOfDischargeCity || 'N/A'})
      Commodity: ${commodity || 'N/A'}
      Gross Weight: ${grossWeight || 'N/A'} ${weightUnit || ''}
      Dimensions (L×W×H): ${dimensions || 'N/A'}
      Number of Boxes/Pallets: ${boxesPallets || 'N/A'}
      Size of Each Box/Pallet: ${boxPalletSize || 'N/A'} 
      Mode of Shipment: ${modeOfShipment || 'N/A'}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
