// import React, { useState } from "react";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom"; // Import Link

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState(""); // Separate state for username
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility
//   const [photo, setPhoto] = useState(null); // State for photo upload

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh on form submission
//     // Add your registration logic here
//     console.log("Registering:", { name, email, password, photo });
//   };

//   return (
//     <div className="flex overflow-hidden flex-col justify-center items-center px-10 py-20 text-sm bg-stone-50 max-md:px-3 max-md:py-12 bg-[url('./IMAGE/back.png')] bg-cover bg-center bg-no-repeat h-screen pt-40">
//       <div className="flex flex-col justify-center items-center px-10 py-8 max-w-full bg-black bg-opacity-90 w-[400px] max-md:px-3">
//         <form className="flex flex-col max-w-full w-[300px]" onSubmit={handleSubmit}>
//           <div className="self-center text-2xl font-bold text-white">REGISTER</div>
//           <div className="shrink-0 self-center mt-1 border-sky-500 border-solid border-[1px] h-[2px] w-[120px]" />
//           <div className="self-center mt-5 text-sm font-semibold text-white max-md:mt-5">
//             create your account
//           </div>

//           {/* Username Input */}
//           <div className="flex flex-col mt-10 relative">
//             <input
//               type="text"
//               placeholder=" "
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
//               required
//             />
//             <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
//               Names
//             </label>
//           </div>

//           {/* Email Input */}
//           <div className="flex flex-col mt-10 relative">
//             <input
//               type="email"
//               placeholder=" "
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
//               required
//             />
//             <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
//               Email
//             </label>
//           </div>

//           {/* Password Input */}
//           <div className="flex flex-col mt-10 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder=" "
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
//               required
//             />
//             <label className="absolute text-gray-300 text-sm mb-10 transition-all duration-200 origin-left">
//               Password
//             </label>
//             <div
//               className="absolute right-0 transform -translate-y-1/2 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <EyeIcon className="h-5 w-5 text-white" />
//               ) : (
//                 <EyeSlashIcon className="h-5 w-5 text-white" />
//               )}
//             </div>
//           </div>

//           {/* Photo Upload Input */}
//           <div className="flex flex-col mt-10 relative">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setPhoto(e.target.files[0])} // Handle photo upload
//               className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
//               required
//             />
//             <label className="absolute text-gray-300 text-sm mb-10 transition-all duration-200 origin-left">
//               Upload Photo
//             </label>
//           </div>

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="px-8 py-2 mt-8 text-lg font-bold text-white whitespace-nowrap bg-sky-500 max-md:px-4 max-md:mt-5 max-md:max-w-full text-center cursor-pointer hover:bg-sky-600"
//           >
//             Register
//           </button>

        

//           {/* Already have an account? */}
//           <div className="flex justify-between items-center ml-10 mt-6 max-w-full w-[200px] max-md:mt-5 text-xs">
//             <div className="text-white">Already have an account?</div>
//             <Link to="/login" className="text-sky-500 cursor-pointer">Login</Link> {/* Updated to Link */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

function Signup() {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", { name, email, password, photo });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-10 py-20 text-sm bg-stone-50 max-md:px-3 max-md:py-12 bg-[url('./IMAGE/back.png')] bg-cover bg-center bg-no-repeat h-screen pt-40">
      <div className="flex flex-col justify-center items-center px-10 py-8 max-w-full bg-black bg-opacity-90 w-[400px] max-md:px-3">
        <form className="flex flex-col max-w-full w-[300px]" onSubmit={handleSubmit}>
          <div className="self-center text-2xl font-bold text-white">{t("signup.register")}</div>
          <div className="shrink-0 self-center mt-1 border-sky-500 border-solid border-[1px] h-[2px] w-[120px]" />
          <div className="self-center mt-5 text-sm font-semibold text-white max-md:mt-5">
            {t("signup.createAccount")}
          </div>

          <div className="flex flex-col mt-10 relative">
            <input
              type="text"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
              {t("signup.names")}
            </label>
          </div>

          <div className="flex flex-col mt-10 relative">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
              {t("signup.email")}
            </label>
          </div>

          <div className="flex flex-col mt-10 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm mb-10 transition-all duration-200 origin-left">
              {t("signup.password")}
            </label>
            <div
              className="absolute right-0 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-white" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-white" />
              )}
            </div>
          </div>

          <div className="flex flex-col mt-10 relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm mb-10 transition-all duration-200 origin-left">
              {t("signup.uploadPhoto")}
            </label>
          </div>

          <button
            type="submit"
            className="px-8 py-2 mt-8 text-lg font-bold text-white whitespace-nowrap bg-sky-500 max-md:px-4 max-md:mt-5 max-md:max-w-full text-center cursor-pointer hover:bg-sky-600"
          >
            {t("signup.registerButton")}
          </button>

          <div className="flex justify-between items-center ml-10 mt-6 max-w-full w-[200px] max-md:mt-5 text-xs">
            <div className="text-white">{t("signup.alreadyHaveAccount")}</div>
            <Link to="/login" className="text-sky-500 cursor-pointer">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
