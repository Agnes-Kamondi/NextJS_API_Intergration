"use client";
import { ChangeEvent, useState } from 'react';
import { userLogin } from '@/app/utils/userLogin';
import { useRouter } from 'next/navigation'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await userLogin({ username, password });
            setResponse(response.message ?? 'Successful login');
            router.push('/components/posts');
        } catch (error) {
            setLoading(false);
            const message = (error as Error).message;
            setError(message);
        }
    };

    return (
        <div className="login-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form onSubmit={handleLogin} className="bg-white shadow-xl rounded-lg p-8 w-50% mx-auto"> 
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="border border-gray-400 rounded-md w-full py-3 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-gray-400 rounded-md w-full py-3 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200" 
                />
                <button 
                    type="submit" 
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200" 
                    disabled={loading}
                >
                    {loading ? 'Loading ...' : 'Login'}
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {response && <p className="text-green-500 mt-4">{response}</p>}
            </form>
        </div>
    );
};

export default Login;