import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 relative overflow-hidden">
          <h2 className="text-white text-2xl font-semibold mb-8">
            Admin Login
            <div className="h-0.5 w-12 bg-blue-500 mt-2"></div>
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                id="username"
                placeholder="Email"
                className="w-full bg-transparent text-gray-300 border-b border-gray-700 focus:border-blue-500 focus:outline-none py-2 transition-colors"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
                className="w-full bg-transparent text-gray-300 border-b border-gray-700 focus:border-blue-500 focus:outline-none py-2 pr-10 transition-colors"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
          <div className="absolute bottom-0 right-0 w-24 h-12 overflow-hidden">
            <svg className="w-full h-full text-blue-500 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}