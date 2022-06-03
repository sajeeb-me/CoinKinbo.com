import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.init';
import { toast } from 'react-toastify';
import PageLoading from '../../components/PageLoading';
import SocialMediaLogin from './SocialMediaLogin';
import LoginImage from '../../assets/images/login.jpg'

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    // const [token] = useToken(user)

    useEffect(() => {
        if (user) {
            // console.log(user);
            navigate('/')
        }
    }, [user, navigate])
    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        // console.log(error.code);
        switch (error?.code) {
            case "auth/email-already-in-use":
                toast.error("Already have account with this email", {
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
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
        await updateProfile({ displayName: name });
    };
    return (
        <section>
            <div className='flex text-center md:w-5/6 lg:w-4/6 md:mx-auto lg:mx-auto shadow-xl rounded-xl border m-5 lg:m-10 items-center'>
                <div className='flex-1 hidden md:block'>
                    <img className='h-[500px] w-full rounded-l-xl' src={LoginImage} alt="" />
                </div>
                <div className='flex-1 p-8'>
                    <h1 className='text-2xl lg:text-3xl font-semibold text-primary mb-5'>Register now</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder='Name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "First name is required"
                                    }
                                })}
                                className={`border-b w-full outline-none mb-3 p-1 ${errors.name && 'border-b-error'}`}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt -mt-3 text-error">{errors.name.message}</span>}
                            </label>
                        </div>

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
                        <div className="form-control w-full">
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
                                className={`border-b w-full outline-none mb-3 p-1 ${errors.name && 'border-b-error'}`}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt -mt-3 text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>

                        {/* submit button  */}
                        <input type="submit" value="Sign Up" className="w-full btn btn-primary font-semibold text-white  border-0" />
                    </form>

                    <p className='text-sm font-semibold mt-3'>Already have account? <Link to='/login' className='text-primary'>Login now</Link></p>

                    {/* social media login  */}
                    <SocialMediaLogin />
                </div>
            </div>
        </section>
    );
};

export default Register;