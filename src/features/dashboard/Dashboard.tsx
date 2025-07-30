import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard!</p>

            <Link
                to="/profile"
                className="bg-blue-600 text-white px-3 py-1 rounded"
            >
                Profile
            </Link>
        </div>
    );
};

export default Dashboard;
