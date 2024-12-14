import React from 'react';
import { MoreVertical, Mail, Phone } from 'lucide-react';

export function UsersList() {
  // Sample users data - in a real app, this would come from your backend
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joinDate: "2023-12-01",
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      joinDate: "2023-12-05",
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    // Add more sample users as needed
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Registered Users</h2>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search users..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4">User</th>
              <th className="text-left py-4 px-4">Email</th>
              <th className="text-left py-4 px-4">Join Date</th>
              <th className="text-left py-4 px-4">Status</th>
              <th className="text-left py-4 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b last:border-b-0">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">{user.email}</td>
                <td className="py-4 px-4">{user.joinDate}</td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Mail size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Phone size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

