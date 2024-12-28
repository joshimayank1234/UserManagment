import React, { useEffect, useState } from 'react';
import { Users, Mail, Phone, MapPin, Search, UserPlus,IndianRupee, IdCard, ShoppingCart, ShoppingBasket } from 'lucide-react';
  
  export default function User() {
    const [ProductsearchData, setProductsearchData] = useState('');
    const [productStatus, setProductStatus] = useState([
      {
        userName: "Mayank",
        productName:"Sweat Shirt",
        email: "mayank123@gmail.com",
        phone: 987654321,
        productId: "123 ",
        varient: "old",
        payment:"COD"
      },
      {
        userName: "vishal",
        productName:"T-shirt",
        email: "vishal123@gmail.com",
        phone: 987654321,
        productId: "456",
        varient: "Moderate",
        payment:"Done by UPI"
      },
      {
        userName: "Ayush",
        productName:"Hoddie",
        email: "Ayush123@gmail.com",
        phone: 987654321,
        productId: "789",
        varient: "latest",
        payment:"COD"
      }
    ]);
  
    // Filter users based on search input
    const filteredUsers = productStatus.filter(user => 
      user.userName.toLowerCase().includes(ProductsearchData.toLowerCase())||
      user.productName.toLowerCase().includes(ProductsearchData.toLowerCase())
    );
  
    useEffect(() => {
      async function getData() {
        try {
          const res = await axios.get("");
          setProductStatus(res.data);
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
            <ShoppingCart className="h-6 w-6" />
            Product Status
          </h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <input
                onChange={(e) => setProductsearchData(e.target.value)}
                value={ProductsearchData}
                type="text"
                placeholder="Search users..."
                className="pl-8 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
                    <ShoppingBasket className="h-5 w-5" />
                    Product Name
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
                    <ShoppingBasket className="h-5 w-5" />
                    Product ID
                  </div>
                </th>
                <th className="border-b p-4 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <IdCard className="h-5 w-5" />
                    Varient
                  </div>
                </th>
                <th className="border-b p-4 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    Payment Status
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((e, index) => (
                <tr 
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">{e.userName}</td>
                  <td className="p-4">{e.productName}</td>
                  <td className="p-4 text-gray-600">{e.email}</td>
                  <td className="p-4">{e.phone}</td>
                  <td className="p-4 text-gray-600">{e.productId}</td>
                  <td className="p-4 text-gray-600">{e.varient}</td>
                  <td className="p-4">{e.payment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

