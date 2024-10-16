'use client';
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const GetQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add form submission logic (e.g., send form data to a server)
    console.log("Form submitted:", formData);
    alert("Your quote request has been submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="quote-section" className="p-20">
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Get a Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
            />
            </div>

            {/* Email Field */}
            <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
            />
            </div>

            {/* Message Field */}
            <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your needs..."
                rows={4}
            />
            </div>

            {/* Submit Button */}
            <div className="text-center">
            <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-300"
            >
                Request a Quote
            </button>
            </div>
        </form>
        </div>
    </section>
  );
};

export default GetQuoteForm;
