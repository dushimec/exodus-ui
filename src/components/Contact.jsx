import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center bg-stone-50 bg-opacity-50 overflow-hidden">
      <header className="relative w-full bg-black bg-opacity-30 text-white py-0.5">
        <div className="relative flex flex-col items-center px-4 sm:px-6 lg:px-20 pt-7 pb-10 sm:pb-32 lg:pb-20 min-h-[300px] sm:min-h-[400px] lg:min-h-[482px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f93c0c151d2456604e78e6fd64e05bbe07b681d348b7c4a62bf319aeb9c8c617?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-20 md:px-20 md:pt-24">
            <div className="px-2 py-4 text-2xl mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
              Contact 
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-3xl font-semibold text-sky-500">Get in touch with us</h2>

        {/* Contact Info Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 sm:mt-16 lg:mt-24 w-full">
          <ContactInfo
            icon={faPhone}
            title="Phone"
            content="+250788726181"
          />
          <ContactInfo
            icon={faMapMarkerAlt}
            title="Address"
            content="Remera Gisimenti(Ikaze House)"
          />
          <ContactInfo
            icon={faEnvelope}
            title="Email"
            content="Oldfoxcoltd@gmail.com"
          />
        </div>

        <p className="mt-12 sm:mt-16 lg:mt-20 text-xl font-medium text-center">
          IF YOU GOT ANY QUESTION PLEASE DO NOT HESITATE TO SEND US MESSAGE.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8 sm:mt-12 space-y-6">
          <FormInput
            name="name"
            type="text"
            placeholder="Your names"
            value={formData.name}
            onChange={handleInputChange}
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <FormInput
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-6 py-5 h-40 text-sm font-medium bg-zinc-300 bg-opacity-80 text-black text-opacity-90 outline-none resize-none"
            />
            <label htmlFor="message" className="sr-only">Message</label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center items-center px-6 py-3 w-full sm:w-auto text-sm font-medium text-sky-500 bg-white border-2 border-sky-500 transition-all duration-300 ease-in-out hover:bg-sky-500 hover:text-white"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </main>

      <footer className="relative w-full mt-12 mb-7">
        <div className="relative flex justify-center items-center py-24 sm:py-32 lg:py-40 min-h-[300px] sm:min-h-[386px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb3deeba424020f688b6234b39e89db4d7448f38d6f16a6282d024b44f5911b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
            alt="Footer background"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </footer>
    </div>
  );
}

function ContactInfo({ icon, title, content }) {
  return (
    <div className="flex flex-col items-center sm:w-1/3 w-full text-center">
      <FontAwesomeIcon icon={icon} className="w-[30px] h-[30px] text-sky-500" />
      <h3 className="mt-2 text-lg sm:text-xl text-sky-500">{title}</h3>
      <p className="mt-2 text-sm sm:text-base font-medium text-black text-opacity-80">{content}</p>
    </div>
  );
}

function FormInput({ name, type, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-6 py-5 text-sm font-medium bg-zinc-300 bg-opacity-80 text-black text-opacity-90 outline-none"
      />
      <label htmlFor={name} className="sr-only">{placeholder}</label>
    </div>
  );
}
