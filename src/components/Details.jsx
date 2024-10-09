import * as React from "react";

function Details() {
  return (
    <div className="w-[1440px] h-[2835px] relative bg-stone-50">
      {/* Background Image and Overlay */}
      <img
        className="w-[1440px] h-[609px] left-0 top-0 absolute"
        src="https://via.placeholder.com/1440x609"
        alt="City Background"
      />
      <div className="w-[1440px] h-[609px] left-0 top-0 absolute bg-black/50" />

      {/* Title */}
      <div className="w-[390px] h-[116px] left-[104px] top-[439px] absolute text-white text-8xl font-semibold font-['Inter']">
        Istanbul
      </div>

      {/* Sidebar for Booking Form */}
      <div className="w-[491px] h-[1505px] left-[884px] top-[354px] absolute">
        <div className="w-[491px] h-[254.67px] left-0 top-0 absolute bg-white/75" />
        <div className="w-[491px] h-[1250px] left-0 top-[255px] absolute bg-white" />

        {/* Booking Form Header */}
        <div className="w-[491px] h-[65.76px] left-0 top-0 absolute bg-sky-500" />

        {/* Form Elements */}
        <div className="left-[35px] top-[100px] absolute w-[420px] h-auto">
          <div className="text-black text-lg font-semibold mb-2">
            Booking Form
          </div>

          {/* Date Field */}
          <label className="block mb-2 text-sm text-black/30">Choose the Date:</label>
          <input
            type="date"
            className="w-full h-14 border border-black/40 px-2 mb-4"
            placeholder="12/09/2024"
          />

          {/* Guests Field */}
          <label className="block mb-2 text-sm text-black/30">Number of Guests:</label>
          <select className="w-full h-14 border border-black/40 px-2 mb-4">
            <option value="0">Adults 0</option>
            <option value="1">Adults 1</option>
            <option value="2">Adults 2</option>
            <option value="3">Adults 3</option>
          </select>

          {/* Tour Options Field */}
          <label className="block mb-2 text-sm text-black/30">Option for Tour:</label>
          <select className="w-full h-14 border border-black/40 px-2 mb-4">
            <option value="standard">Standard Tour</option>
            <option value="premium">Premium Tour</option>
          </select>

          {/* Contact Information */}
          <div className="mt-8">
            <label className="block mb-2 text-sm text-black/30">Full Name*</label>
            <input
              type="text"
              className="w-full h-14 border border-black/40 px-2 mb-4"
              placeholder="Your full name"
            />

            <label className="block mb-2 text-sm text-black/30">Email Address*</label>
            <input
              type="email"
              className="w-full h-14 border border-black/40 px-2 mb-4"
              placeholder="Your email"
            />

            <label className="block mb-2 text-sm text-black/30">Travel Date*</label>
            <input
              type="date"
              className="w-full h-14 border border-black/40 px-2 mb-4"
            />

            <label className="block mb-2 text-sm text-black/30">Your Enquiry*</label>
            <textarea
              className="w-full h-[167px] border border-black/40 px-2 mb-4"
              placeholder="Enter your message"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mt-6">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm font-light">
              *I agree with <a href="#" className="text-sky-500">Terms of service</a> and{" "}
              <a href="#" className="text-sky-500">Privacy Statement</a>.
            </span>
          </div>

          {/* Submit Button */}
          <button className="w-full h-14 bg-sky-500 text-white mt-6">Submit Booking</button>
        </div>
      </div>

      {/* Tour Information Section */}
      <div className="w-[756px] h-[396px] left-[66px] top-[687px] absolute">
        <span className="text-sky-500 text-4xl font-semibold">
          Hagia Sophia (Istanbul):
        </span>
        <span className="text-black text-4xl font-normal">
          Once a Byzantine cathedral, later an Ottoman mosque, and now a museum, Hagia Sophia is an architectural marvel that blends Christian and Islamic elements.
        </span>
        <br />
        <span className="text-sky-500 text-4xl font-semibold">Blue Mosque (Istanbul):</span>
        <span className="text-black text-4xl font-normal">
          Officially known as Sultan Ahmed Mosque, this iconic structure is famed for its blue-tiled interior and grand domes.
        </span>
      </div>

      {/* Recently Visited Trips Section */}
      <div className="left-[143px] top-[1120px] absolute text-black text-4xl font-semibold">
        Recently Visited Trip
      </div>
      <img
        className="w-[561px] h-[338px] left-[133px] top-[1203px] absolute"
        src="https://via.placeholder.com/561x338"
        alt="Recently Visited Trip"
      />

      {/* Related Tours Section */}
      <div className="left-[134px] top-[1866px] absolute text-black text-4xl font-semibold">
        Related Tours
      </div>

      {/* Related Tours Cards */}
      <div className="w-[446px] h-[388px] left-[133px] top-[1925px] absolute bg-white shadow-md">
        <img
          className="w-[445px] h-[223px] left-0 top-0 absolute"
          src="https://via.placeholder.com/445x223"
          alt="Kibeho"
        />
        <div className="left-[33px] top-[235px] absolute text-black text-[28px] font-semibold">
          Kibeho
        </div>
        <div className="w-[445px] h-[115px] left-[33px] top-[255px] absolute text-black text-base">
          <div className="flex space-x-4 mt-4">
            <span>Nyaruguru</span>
            <span className="ml-auto">35 Likes</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img
              className="w-6 h-6"
              src="https://via.placeholder.com/24"
              alt="Like Icon"
            />
            <span>Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
