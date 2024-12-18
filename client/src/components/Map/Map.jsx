import React from 'react';

function LocationSection() {
  return (
    <div className="flex flex-col lg:flex-row ml-0 lg:ml-32 lg:justify-start lg:items-start p-4 gap-32">
      {/* Location 1 */}
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Location:<br /><br /> BAHRAIN</h2>
        <p className="text-sm mb-2">Phone: +973 17491444 Whatsapp: +973 17491444</p>
        <p className="text-sm mb-2">
          Address: Office 22, Bldg 661, Rd 1208, Block 712 - Salmabad,
          Kingdom Of Bahrain
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3010228011653!2d50.5237206!3d26.186884299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
          width="120%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map Bahrain"
        ></iframe>
      </div>

      {/* Location 2 */}
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4"><br /> <br /> UAE</h2>
        <p className="text-sm mb-2">Phone: +971 45284037 Whatsapp: +971 554201838</p>
        <p className="text-sm mb-2">
          Address: 221 Salah Al Din St - Deira - Dubai - United Arab Emirates
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9883072023586!2d55.329139175384235!3d25.270978777663522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc12f2944b9%3A0xf9029a4ef1c7a79b!2s221%20Salah%20Al%20Din%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1730708745804!5m2!1sen!2sin"
          width="120%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map Dubai"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationSection;
