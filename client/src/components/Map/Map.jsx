import React from 'react';

function LocationSection() {
  return (
    <div className="flex lg:justify-start  lg:items-start p-4">
      <div className="w-full lg:ml-0 ml-32 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Location:</h2>
        <p className="text-sm mb-2">Phone: +97145284037 Whatsapp: +971554201838</p>
        {/* Embed Google Map with iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9883072023586!2d55.329139175384235!3d25.270978777663522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc12f2944b9%3A0xf9029a4ef1c7a79b!2s221%20Salah%20Al%20Din%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1730708745804!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationSection;
