import { useState, useContext} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { UserContext } from "../context";
import {useRouter} from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [state, setState] = useContext(UserContext);

    const router = useRouter();



    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            setLoading(true);
            const {data} = await axios.post(`/login`, {
                email,
                password,
            });

            if(data.error){
                toast.error(data.error)
                setLoading(false)
            }
            else{
                //save token on context
                setState({
                    user: data.user,
                    token: data.token
                });
                // save token on local storage
                window.localStorage.setItem('auth',JSON.stringify(data));
                router.push("/");
            }
        }
        catch(err){
            toast.error(err.response.data);
            setLoading(false);
        }
    }

    if(state && state.token) router.push('/');

    return(
        <div className="container-fluid">
            <div className="row py-5 text-light bg-default-image">
                <div className="col text-center">
                    <h1>Login</h1>
                </div>
            </div>

            <div className="row py-5 justify-content-center">
                <div className="col-md-6 offset-md-3">
                    <AuthForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        page= "login"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="text-center"> Still not registered? {" "}
                        <Link href="/register">
                            <a>Register</a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="text-center"> Did you forgot password? {" "}
                        <Link href="/forgot-password">
                            <a>Forgot Password</a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
