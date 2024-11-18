import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import './ContactUs.css';
import LocationSection from '../Map/Map'; //

const ContactUs = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    telephone: '',
    email: '',
    message: '',
  });
  const [countryCode, setCountryCode] = useState('+971');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [uniqueId, setUniqueId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Please verify you're not a robot.");
      return;
    }

    if (!countryCode || !formData.telephone.trim()) {
      alert("Please make sure the country code and phone number are filled in.");
      return;
    }

    const shortId = uuidv4().split('-')[0];
    setUniqueId(shortId);

    setSuccessMessage(true);

    const formPayload = {
      ...formData,
      ddd: countryCode,
      telephone: formData.telephone,
      uniqueId: shortId,
    };

    try {
      await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload),
      });

      setTimeout(() => {
        setSuccessMessage(false);
        setFormData({
          company: '',
          name: '',
          telephone: '',
          email: '',
          message: '',
        });
        setCountryCode('+971');
        setRecaptchaValue(null);
        setUniqueId('');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
      setSuccessMessage(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      {successMessage ? (
        <div className="success-message flex items-center bg-DarkBlue text-white p-4 rounded-lg shadow-lg">
          <AiOutlineCheckCircle className="checkmark text-5xl mr-4 animate-pulse" />
          <span className="text-lg font-semibold">
            Form submitted successfully! We'll get in touch with you shortly. Your reference ID is: {uniqueId}
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded space-y-4">
          <h2 className="text-2xl font-semibold text-left">Fill in the required fields*</h2>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company *"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />

          <div className="flex mb-4 space-x-2">
            <div className="w-1/3">
              <PhoneInput
                country={'us'}
                value={countryCode}
                onChange={(value) => setCountryCode(value || '+1')}
                placeholder="Select Country Code"
                inputStyle={{
                  width: '100%',
                  height: '40px',
                  border: '1px solid #D1D5DB',
                  color: '#4B5563',
                }}
              />
            </div>
            <div className="w-2/3">
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Phone Number *"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message *"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            rows="4"
            required
          />

          <ReCAPTCHA
            sitekey="6LeqpnkqAAAAAHNUm3Ey9nv2T0hmhl0Ym4L_yaTS"
            onChange={(value) => setRecaptchaValue(value)}
          />

          <button type="submit" className="w-full py-2 text-white bg-yellow-500 rounded font-semibold hover:bg-yellow-600">
            Send
          </button>
        </form>
      )}

      <div className="lg:-ml-48 -ml-32">
        <LocationSection />
      </div>
    </div>
  );
};

export default ContactUs;
