import {useState} from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { HiOutlineMail } from 'react-icons/hi'
import { BiLock, BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineGithub, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Oval } from 'react-loader-spinner'
import { CreateAccount } from '../Utils/Auth'
import { useDispatch} from 'react-redux'
import { LocalStorage } from '../Utils/helpers'
import Logo from '../../public/taskfy3.png'

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    const [ passVisible, setPassVisible ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    const handleEyeToggle = () => {
        setIsVisible(!isVisible);
        setPassVisible(!passVisible);
    }
    
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required"),
            password: Yup.string()
                .min(6).max(20)
                .required("Password is required")
        }),
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true)
            try {
                await CreateAccount.EmailandPassword(values.email, values.password, values.username)
                    .then((results) => {
                        console.log(results.user)
                        LocalStorage.setItem({
                            accessToken: results.user.accessToken, 
                            userEmail: results.user.email, 
                            userName: values.username
                        })
                        // dispatch(setAccessToken(results.user.accessToken))
                        navigate('/home');
                    })
            setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error.message)
            } finally {
                resetForm()
            }
        }
    })

    const Socials = [
        {name: 'Google', icon: <FcGoogle size={30}/> },
        {name: 'Facebook', icon: <BiLogoFacebook size={30} color='blue'/> },
        {name: 'Github', icon: <AiOutlineGithub size={30}/> }
    ]

    return (
        <div className='body bg-[#eff7ff] flex flex-col items-center justify-center'>
            <div className="SignUpBody bg-[#eff7ff] w-[30%] flex flex-col items-center rounded my-2">
                <img
                    src={Logo}
                    className='logo h-20'
                />

                <p className="SignUp text-[1.5rem] mt-2 text-[#182953] font-bold">Create Account</p>
                <form className='form w-full flex flex-grow-0 flex-col items-center p-5'>
                    <Input 
                        placeholder="Username"
                        type='text'
                        IconBefore={<HiOutlineMail />}
                        value={formik.values.username}
                        onChange={formik.handleChange} 
                        name={'username'} 
                        IconAfter={undefined}
                    />
                    <Input 
                        placeholder="Email Address.."
                        type='email'
                        IconBefore={<HiOutlineMail />}
                        value={formik.values.email}
                        onChange={formik.handleChange} 
                        name={'email'} 
                        IconAfter={undefined}
                        ContainerStyles={'email mt-4'}
                    />
                    <Input 
                        placeholder="Password.."
                        type={ passVisible ? 'text' : 'password'  }
                        ContainerStyles={'email mt-4'}
                        IconBefore={<BiLock/>}
                        name={'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        IconAfter={isVisible ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                        onIconAfterClicked={() => handleEyeToggle()}
                    />
                    <Button
                        ContainerStyle={'email mt-4 bg-[#182953] text-[white] font-semibold'}
                        text={'Create Account'}
                        type='submit'
                        onClick={formik.handleSubmit}
                        renderChildren={
                            <Oval height={25} strokeWidth={5} secondaryColor='white' color='white' visible={isLoading} />
                        }
                    />

                </form>
                <p className='text-center my-10'>-----------or------------</p>
                <div className='socials w-full flex flex-row items-center gap-10 justify-center'>
                    {Socials.map((item) => (
                        <div key={item.name} className='social cursor-pointer'>
                            {item.icon}
                        </div>
                    ))}
                </div>
                <div className='footer w-full px-8 my-5'>
                    <Button
                        text={'Already have an account? Sign In'}
                        ContainerStyle={'signIn bg-[#eff7ff] text-[15px]'}
                        onClick={() => {
                            navigate('/signIn')
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignUp