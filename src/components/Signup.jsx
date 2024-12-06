import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './Context/AuthContext';

const Signup = () => {
  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();


  const {user , setUser } = useContext(AuthContext);

  const navigate = useNavigate();


 const currentUser = JSON.parse(localStorage.getItem("user"));

 

  useEffect(() => {
    if(currentUser?.name) {
      navigate('/home')
    }
 },[])





  // Form submit handler
  const onSubmit = async (data) => {
    try {
      // Make POST request to the backend API using axios
      const response = await axios.post('http://localhost:3000/api/auth/register', data);

      // Handle successful registration (you can use response.data for any additional info from the backend)
      toast.success('User registered successfully!');
    } catch (error) {
      // Handle errors returned from the backend or network issues
      if (error.response) {
        // If the server responded with an error
        toast.error(error.response.data.msg || 'Registration failed.');
      } else {
        // If there was a network or other error
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="flex flex-1 w-full h-screen justify-center bg-slate-800 border border-gray-950">
        <div className="w-1/2 my-11 p-10">
          <div className="flex md:w-full justify-center py-10 items-center bg-white rounded-md">
            <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-gray-800 font-bold text-3xl mb-3">Register form</h1>

              {/* Name Input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 w-96">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              {/* Email Input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="email"
                  placeholder="Email address"
                  {...register('email')}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              {/* Password Input */}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  placeholder="Password"
                  {...register('password', )}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              {/* Submit Button */}
              <button
                type="submit"
                className="block w-1/2 bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Register
              </button>

             

              {/* Forgot Password Link */}
              <Link to="/login" className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
               Already have an account? Login 
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
