import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for submitting the form data to a backend or email service
    alert('Message sent successfully!');
  };

  return (
    <div className='bg-gray-100 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>Contact Us</h1>
          <p className='mt-4 text-lg text-gray-600'>
            We would love to hear from you! Please fill out the form below to
            get in touch with us.
          </p>
        </div>

        {/* Contact Form */}
        <div className='mt-12'>
          <form
            onSubmit={handleSubmit}
            className='max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg'
          >
            {/* Name Input */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block text-lg font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='mt-2 p-3 w-full border rounded-md focus:ring focus:ring-blue-500'
                placeholder='Enter your full name'
              />
            </div>

            {/* Email Input */}
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block text-lg font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='mt-2 p-3 w-full border rounded-md focus:ring focus:ring-blue-500'
                placeholder='Enter your email address'
              />
            </div>

            {/* Message Input */}
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block text-lg font-medium text-gray-700'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                className='mt-2 p-3 w-full border rounded-md focus:ring focus:ring-blue-500'
                placeholder='Enter your message'
                rows={6}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className='text-center'>
              <button
                type='submit'
                className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className='mt-12 text-center'>
          <h2 className='text-2xl font-bold text-gray-900'>Or Reach Us At</h2>
          <p className='mt-4 text-lg text-gray-600'>
            Email:{' '}
            <a
              href='mailto:support@yourcompany.com'
              className='text-blue-600 underline'
            >
              support@yourcompany.com
            </a>
          </p>
          <p className='text-lg text-gray-600'>Phone: +1 (123) 456-7890</p>
          <p className='text-lg text-gray-600'>
            Address: 123 Your Company Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
