import Image from 'next/image';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>About Us</h1>
          <p className='mt-4 text-lg text-gray-600'>
            We are passionate about building innovative solutions to make your
            life easier.
          </p>
        </div>

        {/* Content Section */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Company Info */}
          <div>
            <h2 className='text-2xl font-bold text-gray-900'>Our Mission</h2>
            <p className='mt-4 text-gray-700'>
              Our mission is to create impactful solutions that drive innovation
              and enable our clients to achieve their goals. We are committed to
              delivering the highest quality of service and developing
              meaningful products that make a difference.
            </p>
            <h2 className='mt-8 text-2xl font-bold text-gray-900'>
              Our Vision
            </h2>
            <p className='mt-4 text-gray-700'>
              To be a leader in technology by building tools and solutions that
              empower people and businesses to achieve success in the digital
              world. We believe in leveraging the latest technologies to create
              sustainable solutions.
            </p>
          </div>

          {/* Image or Team Section */}
          <div>
            <Image
              className='w-full rounded-lg shadow-lg'
              src='https://via.placeholder.com/600x400' // Replace with actual image
              alt='Team'
            />
            <p className='mt-4 text-center text-gray-600 italic'>
              Our dedicated team working together.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-bold text-gray-900 text-center'>
            Meet the Team
          </h2>
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Team Member 1 */}
            <div className='text-center'>
              <Image
                className='w-32 h-32 mx-auto rounded-full'
                src='https://via.placeholder.com/150' // Replace with actual image
                alt='Team Member 1'
              />
              <h3 className='mt-4 text-xl font-semibold text-gray-900'>
                John Doe
              </h3>
              <p className='mt-1 text-gray-600'>CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className='text-center'>
              <Image
                className='w-32 h-32 mx-auto rounded-full'
                src='https://via.placeholder.com/150' // Replace with actual image
                alt='Team Member 2'
              />
              <h3 className='mt-4 text-xl font-semibold text-gray-900'>
                Jane Smith
              </h3>
              <p className='mt-1 text-gray-600'>CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className='text-center'>
              <Image
                className='w-32 h-32 mx-auto rounded-full'
                src='https://via.placeholder.com/150' // Replace with actual image
                alt='Team Member 3'
              />
              <h3 className='mt-4 text-xl font-semibold text-gray-900'>
                Alex Johnson
              </h3>
              <p className='mt-1 text-gray-600'>Lead Designer</p>
            </div>
            {/* Team Member 4 */}
            <div className='text-center'>
              <Image
                className='w-32 h-32 mx-auto rounded-full'
                src='https://via.placeholder.com/150' // Replace with actual image
                alt='Team Member 4'
              />
              <h3 className='mt-4 text-xl font-semibold text-gray-900'>
                Emma Brown
              </h3>
              <p className='mt-1 text-gray-600'>Lead Developer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-12 text-center'>
          <h2 className='text-2xl font-bold text-gray-900'>Join Us</h2>
          <p className='mt-4 text-lg text-gray-600'>
            We're always looking for talented people to join our team. If you're
            passionate about technology and making an impact, we'd love to hear
            from you!
          </p>
          <a
            href='/careers'
            className='mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors'
          >
            View Careers
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
