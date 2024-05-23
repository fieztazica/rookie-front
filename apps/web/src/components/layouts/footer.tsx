import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="p-2 bg-accent">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src="https://dummyimage.com/64x64.png"
            alt="rookie store's logo"
          />
          <div>
            <h4>Rook Store</h4>
            <p className="text-sm">Address</p>
            <p className="text-sm">Phone</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
