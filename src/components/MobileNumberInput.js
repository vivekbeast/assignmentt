import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MobileNumberInput() {

  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://64.227.149.177:3000/api/store-number', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile }),
    });
    if (response.ok) {
      navigate('/verify-otp');
    }
  };













  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Enter Mobile Number</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg  transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default MobileNumberInput
