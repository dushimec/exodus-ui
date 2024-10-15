import React from 'react';
import { FaTachometerAlt, FaPlus, FaStar, FaFolder, FaComment, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
  // Card data for Total Booked, Revenue, Customers, Packages
  const cards = [
    { title: 'Total Booked', value: '$24,590', growth: '+12.08%', bg: 'bg-blue-500', textColor: 'text-white' },
    { title: '30 Days Revenue', value: '$18,680', growth: '-12.08%', bg: 'bg-white', textColor: 'text-black' },
    { title: 'Total Customers', value: '$50,680', growth: '+12.08%', bg: 'bg-white', textColor: 'text-black' },
    { title: 'Tour Packages', value: '$16,590', growth: '+12.08%', bg: 'bg-white', textColor: 'text-black' },
  ];

  // Recent Bookings Table Data
  const bookings = Array(6).fill({
    packageName: 'New Delhi To Dhaka',
    type: 'Oneway',
    price: '50$',
    status: 'Pending',
    userImg: 'https://randomuser.me/api/portraits/women/44.jpg',
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-60 h-full bg-blue-100 p-4 fixed top-16">
        <div className="text-center font-bold text-lg mb-6">Admin</div>
        <ul className="space-y-4">
          <li className="text-blue-600 font-semibold"><FaTachometerAlt className="inline-block mr-2" /> Dashboard</li>
          <li><FaPlus className="inline-block mr-2" /> Add New Trip</li>
          <li><FaStar className="inline-block mr-2" /> Reviews</li>
          <li><FaFolder className="inline-block mr-2" /> Manage Trips</li>
          <li><FaComment className="inline-block mr-2" /> Comments</li>
        </ul>
        <div className="absolute bottom-4 left-4 flex items-center">
          <img className="w-12 h-12 rounded-full mr-2" src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" />
          <div>
            <p className="text-sm font-bold">Amanda</p>
            <p className="text-xs">View profile</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-60">
        {/* Navbar */}
        <>
      <div className="flex  gap-10 px-8 bg-zinc-800 shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-10">
        <div className="flex gap-10 text-white whitespace-nowrap max-md:max-w-full">
          <div className="flex gap-3.5 my-auto text-3xl font-bold">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8958aba8dbecb81083982022cdeefb584a61a42aecad77d4d3ef39ed696516b7?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
              className="object-contain shrink-0 aspect-[2.06] rounded-[300px] w-[70px]"
            />
            <div className="self-start rotate-[2.4492937051703357e-16rad]">
              Admin
            </div>
          </div>
          <div className="flex text-sm leading-loose bg-black bg-opacity-0">
            <div className="flex overflow-hidden flex-col pt-4 font-bold text-sky-500 rounded-md bg-black bg-opacity-0">
              <div className="self-center">Dashboard</div>
              <div className="flex shrink-0 mt-3 h-1 bg-sky-500 rounded-sm" />
            </div>
            <div className="overflow-hidden px-3 py-4 rounded-md bg-black bg-opacity-0">
              Trips
            </div>
            <div className="overflow-hidden px-3 py-4 rounded-md bg-black bg-opacity-0">
              Users
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-start my-auto max-md:max-w-full">
          <div className="flex flex-auto gap-1.5 px-3 py-2 text-sm leading-loose rounded-md border border-solid bg-black bg-opacity-0 border-neutral-300 text-neutral-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/986d3b530cf46a2b625dda9e6051d31bbc4eaebd97045022cb15bddea2b30f67?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
            <div className="basis-auto">Search ...</div>
          </div>
          <div className="flex gap-4 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8296bd342e30adf355df1e86c790f7de040dc0a9730943f87b2f706361485141?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be6440efd060024f33d349efa2cce0f8fb49c6f968e2bb700ebb02014a12388?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc1fd9b4c4af68ce851b1873877047a4ad439208bdc0afcc5b99a38ad118e858?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/011061a1ed24e1073ef30951767dfc087d60328f4e4009ddaa9eb65991d1d3be?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
              className="object-contain shrink-0 self-stretch w-9 rounded-2xl aspect-square"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </>
  

        {/* Cards Section */}
        <div className="grid grid-cols-4 gap-4 mt-24 px-8">
          {cards.map((card, index) => (
            <div key={index} className={`${card.bg} ${card.textColor} p-6 rounded-lg shadow-md`}>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
              <p className={`text-sm ${card.growth.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{card.growth}</p>
            </div>
          ))}
        </div>

        {/* Pending Tasks and Recent Bookings */}
        <div className="flex mt-6 px-8 space-x-8">
          {/* Pending Task Section */}
        

          {/* Recent Booking Section */}
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Recent Booking</h3>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Package Name</th>
                  <th className="text-left">Type</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 flex items-center">
                      <img src={booking.userImg} alt="User" className="w-10 h-10 rounded-full mr-2" />
                      {booking.packageName}
                    </td>
                    <td>{booking.type}</td>
                    <td>{booking.price}</td>
                    <td className="text-blue-500">{booking.status}</td>
             
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


