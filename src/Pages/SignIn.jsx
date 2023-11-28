import { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLock, BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineGithub, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Oval } from 'react-loader-spinner';
import { LogIn } from '../Utils/Auth';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../Utils/Slicer';
import Logo from '../../public/taskfy3.png'
import { LocalStorage } from '../Utils/helpers';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [passVisible, setPassVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEyeToggle = () => {
        setIsVisible(!isVisible);
        setPassVisible(!passVisible);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required'),
            password: Yup.string().min(6).max(20).required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            try {
                await LogIn.EmailandPassword(values.email, values.password).then((user) => {
                    LocalStorage.setItem({
                        accessToken: user.accessToken,
                        userEmail: user.email,
                    });
                    dispatch(setAccessToken(user.accessToken));
                    navigate('/home');
                });
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                alert(error.message);
            } finally {
                resetForm();
            }
        },
    });

    const Socials = [
        { name: 'Google', icon: <FcGoogle size={30} /> },
        { name: 'Facebook', icon: <BiLogoFacebook size={30} color="blue" /> },
        { name: 'Github', icon: <AiOutlineGithub size={30} /> },
    ];

    return (
        <div className='body flex flex-col items-center justify-center bg-[#eff7ff] h-[100dvh]'>
            <div className="SignInBody w-[30%] flex flex-col items-center rounded my-2 mt-5">
                <img
                    src={Logo}
                    className='logo h-20'
                />

                <p className="SignUp text-[1.5rem] mt-2 text-[#182953] font-bold">Welcome Back</p>
        
                <form className="form w-full flex flex-grow-0 flex-col items-center p-5">
                    <Input
                        placeholder="Email Address.."
                        type="email"
                        IconBefore={<HiOutlineMail />}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name={'email'}
                        IconAfter={undefined}
                        disabled={false}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <small className="error text-[12px] text-center text-[red]">{formik.errors.email}</small>
                    ) : null}
                    <Input
                        placeholder="Password.."
                        type={passVisible ? 'text' : 'password'}
                        ContainerStyles={'email mt-4'}
                        IconBefore={<BiLock />}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        name="password"
                        IconAfter={isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        onIconAfterClicked={() => handleEyeToggle()}
                    />
                    {formik.touched.email && formik.errors.password ? (
                        <small className="error text-[12px] text-center text-[red]">{formik.errors.password}</small>
                    ) : null}
                    <Button
                        ContainerStyle={'email mt-4 bg-[#182953] text-[white] font-semibold'}
                        text={'LOGIN'}
                        type="submit"
                        onClick={formik.handleSubmit}
                        renderChildren={<Oval height={25} strokeWidth={5} secondaryColor="white" color="white" visible={isLoading} />}
                    />
                </form>
                <p className="text-center my-10">-----------or------------</p>
                <div className="socials w-full flex flex-row items-center gap-10 justify-center">
                    {Socials.map((item) => (
                        <div key={item.name} className="social cursor-pointer">
                            {item.icon}
                        </div>
                    ))}
                </div>
                <div className="footer w-full px-8 my-5">
                    <Button
                        text={'Dont have an account? Sign Up'}
                        ContainerStyle={'signIn bg-[#eff7ff]'}
                        onClick={() => {
                            navigate('/SignUp');
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
