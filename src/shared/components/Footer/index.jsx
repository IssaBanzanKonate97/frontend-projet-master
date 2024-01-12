// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h5 className="text-lg font-semibold mb-2">Call Institutadios</h5>
            <ul>
              <li className="mb-1">Call Institutadios at  <br/> 01 82 88 75 89</li>
              <li>Send a message to <br/> support@institutadios.com</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Discover Institutadios</h5>
            <ul>
            <li className="mb-1"><a href="/who-we-are" className="hover:underline">Who are we?</a></li>
            <li className="mb-1"><a href="/our-partners" className="hover:underline">Our partners</a></li>
            <li className="mb-1"><a href="/media" className="hover:underline">Médoucine in the media</a></li>
            <li className="mb-1"><a href="/practitioners" className="hover:underline">Our practitioners by city</a></li>
            <li className="mb-1"><a href="/videos" className="hover:underline">Videos</a></li>
              {/* Add other list items */}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Institutadios commits</h5>
            <ul>
             <li className="mb-1"><a href="/How do we collect our reviews?" className="hover:underline">How do we collect our reviews?</a></li>
              {/* Add other list items */}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Rejoin us</h5>
            <ul>
            <li className="mb-1"><a href="/We are hiring" className="hover:underline">We are hiring</a></li>
              {/* Add other list items */}
            </ul>
          </div>
        </div>
        
        <div className="text-sm mt-4">
          <p>
          We offer a free 15-minute appointment service for those looking to become practitioners in the field of addiction. Our company specializes in innovative approaches to addiction.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
