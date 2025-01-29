import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-purple-500 to-deep-purple-700 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-deep-purple-700 mb-6 text-center">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-deep-purple-500 focus:border-deep-purple-500 transition duration-300"
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
              placeholder="john@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-deep-purple-500 focus:border-deep-purple-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-deep-purple-500 focus:border-deep-purple-500 transition duration-300"
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
      </div>
    </div>
  );
};

export default AuthForm;