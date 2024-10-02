import React from 'react';

function ContactInfo() {
  return (
    <div className="flex flex-col  text-white">
      <h3 className="text-xl font-extrabold">Contact info</h3>
      <div className="flex flex-col items-start px-3.5 mt-11 text-base font-bold whitespace-nowrap max-md:pr-5 max-md:mt-10">
        <p>Address:</p>
        <p className="mt-5">Phone:</p>
        <p className="mt-5">Email:</p>
      </div>
    </div>
  );
}

export default ContactInfo;