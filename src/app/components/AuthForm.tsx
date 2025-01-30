"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    });

    const toggleAuthMode = () => {
        setIsLogin((prev) => !prev);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Handle authentication logic here (e.g., API request)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-purple-500 to-deep-purple-700 p-4">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
        >
            <h2 className="text-3xl font-bold text-deep-purple-700 mb-6 text-center">
            {isLogin ? 'Sign In' : 'Sign Up'}
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-deep-purple-500 focus:border-deep-purple-500 transition duration-300"
                    required
                />
                </div>
            )}

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-deep-purple-500 focus:border-deep-purple-500 transition duration-300"
                required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-deep-purple-500 focus:border-deep-purple-500 transition duration-300"
                required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-deep-purple-600 text-white py-2 px-4 rounded-lg hover:bg-deep-purple-700 focus:ring-4 focus:ring-deep-purple-500 focus:outline-none transition duration-300"
            >
                {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
            </form>

            <div className="mt-6 text-center">
            <button
                onClick={toggleAuthMode}
                className="text-deep-purple-600 hover:text-deep-purple-700 focus:outline-none underline transition duration-300"
            >
                {isLogin ? 'Create an account' : 'Already have an account? Sign In'}
            </button>
            </div>
        </motion.div>
        </div>
    );
};

export default AuthForm;