import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>Privacy Policy</h1>
          <p className='mt-4 text-lg text-gray-600'>
            Your privacy is important to us. This policy explains how we
            collect, use, and safeguard your information.
          </p>
        </div>

        {/* Content Section */}
        <div className='mt-12'>
          {/* Information Collection */}
          <div>
            <h2 className='text-2xl font-bold text-gray-900'>
              1. Information We Collect
            </h2>
            <p className='mt-4 text-gray-700'>
              We collect personal information that you provide to us directly,
              such as when you create an account, make a purchase, or
              communicate with us. This may include your name, email address,
              payment details, and other information.
            </p>
            <p className='mt-4 text-gray-700'>
              We may also collect non-personal information automatically when
              you use our services, such as your IP address, browser type, and
              usage data through cookies and similar technologies.
            </p>
          </div>

          {/* Usage of Information */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              2. How We Use Your Information
            </h2>
            <p className='mt-4 text-gray-700'>
              We use the information we collect to provide and improve our
              services, process transactions, communicate with you, and ensure a
              secure experience. Specifically, we may use your information to:
            </p>
            <ul className='list-disc list-inside mt-4 text-gray-700'>
              <li>Provide and maintain our services</li>
              <li>Process payments and prevent fraud</li>
              <li>Communicate with you regarding updates or support</li>
              <li>Analyze usage and improve our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Sharing of Information */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              3. Information Sharing
            </h2>
            <p className='mt-4 text-gray-700'>
              We do not share your personal information with third parties
              except as necessary to provide our services, comply with the law,
              or protect our rights. We may share your information with trusted
              third-party service providers who assist us in delivering our
              services, such as payment processors and hosting providers.
            </p>
            <p className='mt-4 text-gray-700'>
              These third parties are bound by confidentiality agreements and
              are only allowed to use your information in connection with the
              services they provide to us.
            </p>
          </div>

          {/* Data Security */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              4. Data Security
            </h2>
            <p className='mt-4 text-gray-700'>
              We take appropriate security measures to protect your personal
              information from unauthorized access, disclosure, alteration, and
              destruction. However, please note that no method of transmitting
              data over the internet is completely secure, and we cannot
              guarantee the absolute security of your information.
            </p>
          </div>

          {/* Cookies */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              5. Cookies and Tracking Technologies
            </h2>
            <p className='mt-4 text-gray-700'>
              We use cookies and similar tracking technologies to collect and
              store information about your interactions with our website. You
              can control the use of cookies through your browser settings.
              Please note that disabling cookies may affect your experience with
              our services.
            </p>
          </div>

          {/* Your Rights */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>6. Your Rights</h2>
            <p className='mt-4 text-gray-700'>
              Depending on your location, you may have certain rights regarding
              your personal information, including the right to access, correct,
              delete, or restrict the processing of your information. You may
              also have the right to object to the processing of your data and
              the right to data portability.
            </p>
            <p className='mt-4 text-gray-700'>
              To exercise these rights, please contact us at{' '}
              <a
                href='mailto:privacy@yourcompany.com'
                className='text-blue-600 underline'
              >
                privacy@yourcompany.com
              </a>
              .
            </p>
          </div>

          {/* Changes to Policy */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              7. Changes to This Privacy Policy
            </h2>
            <p className='mt-4 text-gray-700'>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. When we make changes, we will notify you by
              revising the date at the top of this policy.
            </p>
          </div>

          {/* Contact Information */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>8. Contact Us</h2>
            <p className='mt-4 text-gray-700'>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className='mt-2 text-gray-700'>
              Email:{' '}
              <a
                href='mailto:privacy@yourcompany.com'
                className='text-blue-600 underline'
              >
                privacy@yourcompany.com
              </a>
            </p>
            <p className='text-gray-700'>Phone: +1 (123) 456-7890</p>
            <p className='text-gray-700'>
              Address: 123 Your Company Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
