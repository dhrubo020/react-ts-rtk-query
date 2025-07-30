import React from 'react';

const Footer: React.FC = () => (
    <footer className="text-center p-4 bg-gray-100 mt-auto">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
);

export default Footer;
