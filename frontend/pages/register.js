import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import {SyncOutlined} from '@ant-design/icons';
import AuthForm from "../components/forms/AuthForm";

const Register = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secret, setSecret] = useState('');
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            setLoading(true);
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
                name,
                email,
                password,
                secret
            });
            setName("");
            setEmail("");
            setPassword("");
            setSecret("");
            setOk(data.ok);
            setLoading(false);
        }
        catch(err){
            toast.error(err.response.data);
            setLoading(false);
        }
    }

    return(
        <div className="container-fluid">
            <div className="row py-5 text-light bg-default-image">
                <div className="col text-center">
                    <h1>הרשמה</h1>
                </div>
            </div>

            <div className="row py-5 justify-content-center">
                <div className="col-md-6 offset-md-3">
                   <AuthForm
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    secret={secret}
                    setSecret={setSecret}
                    loading
                   />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Modal
                        title="       "
                        visible={ok}
                        onCancel={() => setOk(false)}
                        footer={null}
                    >
                        <p>You have successfully registered!</p>
                        <Link href="/login">
                            <a className="btn btn-primary btn-sm">Login</a>
                        </Link>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Register;
