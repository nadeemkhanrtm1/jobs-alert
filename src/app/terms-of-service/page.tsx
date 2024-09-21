import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>Terms of Service</h1>
          <p className='mt-4 text-lg text-gray-600'>
            These terms govern your use of our services. By accessing or using
            our services, you agree to the terms outlined below.
          </p>
        </div>

        {/* Content Section */}
        <div className='mt-12'>
          {/* Acceptance of Terms */}
          <div>
            <h2 className='text-2xl font-bold text-gray-900'>
              1. Acceptance of Terms
            </h2>
            <p className='mt-4 text-gray-700'>
              By accessing or using our website or services, you acknowledge
              that you have read, understood, and agree to be bound by these
              terms. If you do not agree to these terms, you may not access or
              use our services.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              2. Changes to Terms
            </h2>
            <p className='mt-4 text-gray-700'>
              We reserve the right to modify these terms at any time. When
              changes are made, we will notify you by updating the date at the
              top of this page. Your continued use of the services after the
              posting of revised terms indicates your acceptance of those
              changes.
            </p>
          </div>

          {/* Use of Services */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              3. Use of Services
            </h2>
            <p className='mt-4 text-gray-700'>
              You agree to use our services only for lawful purposes and in
              accordance with these terms. You are prohibited from using our
              services:
            </p>
            <ul className='list-disc list-inside mt-4 text-gray-700'>
              <li>For any unlawful or fraudulent activity</li>
              <li>
                To impersonate any person or entity or falsely state your
                affiliation with a person or entity
              </li>
              <li>
                To interfere with the proper working of the services, including
                by introducing viruses or other harmful code
              </li>
              <li>
                To collect or store personal information of others without their
                consent
              </li>
            </ul>
          </div>

          {/* User Accounts */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              4. User Accounts
            </h2>
            <p className='mt-4 text-gray-700'>
              To use certain features of our services, you may be required to
              create an account. You agree to provide accurate and up-to-date
              information when creating an account and to maintain the
              confidentiality of your login credentials. You are responsible for
              all activities that occur under your account.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              5. Intellectual Property
            </h2>
            <p className='mt-4 text-gray-700'>
              All content provided on our website, including text, graphics,
              logos, and images, is the property of our company or its content
              suppliers and is protected by intellectual property laws. You may
              not reproduce, distribute, or create derivative works of any
              content without our express written consent.
            </p>
          </div>

          {/* Termination */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>6. Termination</h2>
            <p className='mt-4 text-gray-700'>
              We reserve the right to terminate or suspend your account or
              access to our services at any time, without notice, for conduct
              that we believe violates these terms or is otherwise harmful to us
              or other users.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              7. Limitation of Liability
            </h2>
            <p className='mt-4 text-gray-700'>
              To the fullest extent permitted by law, we are not liable for any
              damages, whether direct, indirect, incidental, or consequential,
              arising out of or in connection with your use of our services.
              This includes but is not limited to damages for loss of profits,
              data, or other intangible losses.
            </p>
          </div>

          {/* Governing Law */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              8. Governing Law
            </h2>
            <p className='mt-4 text-gray-700'>
              These terms and your use of our services will be governed by and
              construed in accordance with the laws of [Your Country]. Any
              disputes arising under these terms will be resolved exclusively in
              the courts of [Your Location].
            </p>
          </div>

          {/* Contact Information */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-900'>9. Contact Us</h2>
            <p className='mt-4 text-gray-700'>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className='mt-2 text-gray-700'>
              Email:{' '}
              <a
                href='mailto:support@yourcompany.com'
                className='text-blue-600 underline'
              >
                support@yourcompany.com
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

export default TermsOfService;
