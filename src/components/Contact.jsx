import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center bg-stone-50 bg-opacity-50 overflow-hidden">
      <header className="relative w-full bg-black bg-opacity-30 text-white py-0.5">
        <div className="relative flex flex-col items-center px-4 sm:px-6 lg:px-20 pt-7 pb-24 sm:pb-32 lg:pb-52 min-h-[300px] sm:min-h-[400px] lg:min-h-[482px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f93c0c151d2456604e78e6fd64e05bbe07b681d348b7c4a62bf319aeb9c8c617?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mt-16 sm:mt-20 lg:mt-28">
            <h1 className="px-8 py-4 text-3xl font-semibold border-4 border-white bg-zinc-300 bg-opacity-0">
              CONTACT US
            </h1>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mt-6 text-3xl font-semibold text-sky-500">Get in touch with us</h2>

        <div className="flex flex-wrap justify-center gap-8 mt-12 sm:mt-16 lg:mt-24 w-full">
          <ContactInfo
            icon="/phone-icon.png"
            title="Phone"
            content="+250788726181"
          />
          <ContactInfo
            icon="/address-icon.png"
            title="Address"
            content="Rwanda, Kigali, Kicukiro-remera"
          />
          <ContactInfo
            icon="/email-icon.png"
            title="Email"
            content="Exodus@gmail.com"
          />
        </div>

        <p className="mt-12 sm:mt-16 lg:mt-20 text-xl font-medium text-center">
          IF YOU GOT ANY QUESTION PLEASE DO NOT HESITATE TO SEND US MESSAGE.
        </p>

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
          <button
            type="submit"
            className="flex justify-center items-center px-6 py-3 w-full sm:w-auto text-sm font-medium text-sky-500 bg-white border-2 border-sky-500 transition-all duration-300 ease-in-out hover:bg-sky-500 hover:text-white"
          >
            SEND MESSAGE
          </button>
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
    <div className="flex flex-col items-center">
      <img src={icon} alt={title} className="w-[55px] h-[55px]" />
      <h3 className="mt-2 text-xl text-sky-500">{title}</h3>
      <p className="mt-2 text-xs font-medium text-black text-opacity-80 text-center">{content}</p>
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
