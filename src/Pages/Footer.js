import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        
        {/* Company Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-gray-600">
            <li>About us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Anti-discrimination Policy</li>
            <li>UC Impact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* For Customers Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">For Customers</h2>
          <ul className="space-y-2 text-gray-600">
            <li>UC Reviews</li>
            <li>Categories Near You</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* For Partners Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">For Partners</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Register as a Professional</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          <div className="flex space-x-4">
            {/* Social Media Icons (You can replace these with actual icons) */}
            <span className="text-2xl text-gray-600">🐦</span>
            <span className="text-2xl text-gray-600">📘</span>
            <span className="text-2xl text-gray-600">📸</span>
            <span className="text-2xl text-gray-600">💼</span>
          </div>

          <div className="mt-6">
            {/* App Store Links */}
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="mb-4 w-36"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="w-36"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © Copyright All rights reserved. 
      </div>
    </footer>
  );
};

export default Footer;
