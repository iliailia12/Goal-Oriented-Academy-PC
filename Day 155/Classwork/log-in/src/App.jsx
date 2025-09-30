import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });

  // ფორმის შევსებისას state-ის განახლება
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // ფორმის გაგზავნისას კონსოლში ვაახლებთ ინფუთებს
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">დაგვიბრუნე შენი ინფო!</h2>

        <div>
          <label htmlFor="input1" className="block text-sm font-semibold text-gray-700">Input 1:</label>
          <input
            type="text"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Type something..."
          />
        </div>

        <div>
          <label htmlFor="input2" className="block text-sm font-semibold text-gray-700">Input 2:</label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Type something..."
          />
        </div>

        <div>
          <label htmlFor="input3" className="block text-sm font-semibold text-gray-700">Input 3:</label>
          <input
            type="text"
            id="input3"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Type something..."
          />
        </div>

        <div>
          <label htmlFor="input4" className="block text-sm font-semibold text-gray-700">Input 4:</label>
          <input
            type="text"
            id="input4"
            name="input4"
            value={formData.input4}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Type something..."
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
