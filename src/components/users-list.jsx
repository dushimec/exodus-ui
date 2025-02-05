import React, { useState, useEffect } from 'react';
import { MoreVertical, Mail, Phone, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; // Import CSS

export function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        // const response = await fetch('/api/users');
        // const data = await response.json();
        const data = [
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
        ];
        setUsers(data);
      } catch (err) {
        toast.error("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle user selection
  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    try {
      // Replace with actual API call
      // await fetch(`/api/users/${userId}`, { method: 'DELETE' });
      setUsers(users.filter(user => user.id !== userId));
      toast.success("User deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete user.");
    }
  };

  // Handle bulk actions
  const handleBulkAction = (action) => {
    // Implement bulk actions logic
    toast.info(`Performing ${action} on selected users.`);
  };

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Registered Users</h2>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            {filteredUsers.map((user) => (
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
                    <button className="p-1 hover:bg-gray-100 rounded" onClick={() => handleDeleteUser(user.id)}>
                      <Trash2 size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit2 size={16} />
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
