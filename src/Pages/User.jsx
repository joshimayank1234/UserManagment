import React, { useEffect, useState } from 'react';
import { Users, Mail, Phone, MapPin, Search, UserPlus } from 'lucide-react';

export default function User() {
  const [searchData, setSearchData] = useState('');
  const [userData, setUserData] = useState([
    {
      userName: "Mayank",
      email: "mayank123@gmail.com",
      phone: 987654321,
      address: "123 bhopal"
    },
    {
      userName: "vishal",
      email: "vishal123@gmail.com",
      phone: 987654321,
      address: "456 bhopal"
    },
    {
      userName: "Ayush",
      email: "Ayush123@gmail.com",
      phone: 987654321,
      address: "789 bhopal"
    }
  ]);

  // Filter users based on search input
  const filteredUsers = userData.filter(user => 
    user.userName.toLowerCase().includes(searchData.toLowerCase())
  );

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("");
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    // getData(); // Uncomment when API endpoint is ready
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6" />
          User Management
        </h1>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <input
              onChange={(e) => setSearchData(e.target.value)}
              value={searchData}
              type="text"
              placeholder="Search users..."
              className="pl-8 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition-colors">
            <UserPlus className="h-4 w-4" />
            Add User
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="border-b p-4 text-left font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  UserName
                </div>
              </th>
              <th className="border-b p-4 text-left font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </div>
              </th>
              <th className="border-b p-4 text-left font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </div>
              </th>
              <th className="border-b p-4 text-left font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Address
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr 
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-4">{user.userName}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4 text-gray-600">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}