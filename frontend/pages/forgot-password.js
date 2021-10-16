import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Button } from "antd";
import Link from "next/link";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import { useRouter } from "next/router";
import {UserContext} from "../context";

const forgetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [secret, setSecret] = useState('');
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const [state] = useContext(UserContext);
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(name, email, password, secret);
            setLoading(true);
            const { data } = await axios.post(`/forgot-password`, {
                email,
                newPassword,
                secret,
            });

            console.log("forgot password res => ", data);

            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            }

            if (data.success) {
                setEmail("");
                setNewPassword("");
                setSecret("");
                setOk(true);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    if(state && state.token) router.push('/');

    return(
        <div className="container-fluid">
            <div className="row py-5 text-light bg-default-image">
                <div className="col text-center">
                    <h1>שחזור סיסמא</h1>
                </div>
            </div>

            <div className="row py-5 justify-content-center">
                <div className="col-md-6 offset-md-3">
                    <ForgotPasswordForm
                        email={email}
                        setEmail={setEmail}
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}
                        handleSubmit={handleSubmit}
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
                        <p>יצירת הסיסמא החדשה הושלמה ואתה יכול להתחבר איתה.</p>
                        <Link href="/login">
                            <a className="btn btn-primary btn-sm">Login</a>
                        </Link>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default forgetPassword;
