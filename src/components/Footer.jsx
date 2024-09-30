import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-[#0a192f] text-gray-300 py-4'>
      <div className='max-w-[1000px] mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Smaran Bhattarai. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
