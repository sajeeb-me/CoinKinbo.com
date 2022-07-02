import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import SocialMediaLogin from './SocialMediaLogin';
import LoginImage from '../../assets/images/login.jpg'
import useToken from '../../hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/coins';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            // console.log(user);
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])
    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        // console.log(error.code);
        switch (error?.code) {
            case "auth/user-not-found":
                toast.error("User not found", {
                    toastId: 1
                });
                break;
            case "auth/wrong-password":
                toast.error("Wrong password", {
                    toastId: 1
                });
                break;
            default:
                toast.error("Something went wrong", {
                    toastId: 1
                })
        }
    }

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email, password);
    };
    return (
        <section>
            <div className='flex text-center md:w-5/6 lg:w-4/6 md:mx-auto lg:mx-auto shadow-xl rounded-xl border m-5 lg:m-10 items-center'>
                <div className='flex-1 hidden md:block'>
                    <img className='h-[500px] w-full rounded-l-xl' src={LoginImage} alt="" />
                </div>
                <div className='flex-1 p-8'>
                    <h1 className='text-2xl lg:text-3xl font-semibold text-primary mb-5'>Login now</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* email  */}
                        <div className="form-control w-full">
                            <input
                                type="email"
                                placeholder='Email'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                className={`border-b w-full outline-none mb-3 p-1 ${errors.name && 'border-b-error'}`}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt -mt-3 text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">Provide a valid email</span>}
                            </label>
                        </div>

                        {/* pass  */}
                        <div className="form-control w-full mb-3">
                            <input
                                type="password"
                                placeholder='Password'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                                className={`border-b w-full outline-none p-1 ${errors.name && 'border-b-error'}`}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                            <p
                                onClick={() => navigate('/resetpassword')}
                                className='text-left font-medium cursor-pointer opacity-80 hover:opacity-100'
                            >
                                Forget password?
                            </p>
                        </div>

                        {/* submit button  */}
                        <input type="submit" value="Login" className="w-full btn btn-primary font-semibold text-white  border-0" />
                    </form>

                    <p className='text-sm font-semibold mt-3'>New to CoinKibo? <Link to='/register' className='text-primary'>Create an account</Link></p>

                    {/* social media login  */}
                    <SocialMediaLogin />
                </div>
            </div>
        </section>
    );
};

export default Login;