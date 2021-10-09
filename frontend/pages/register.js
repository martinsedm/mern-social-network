import { useState } from "react";
import axios from "axios";

const Register = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secret, setSecret] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/api/register',{
            name,
            email,
            password,
            secret
        }).then((res)=> console.log(res))
            .catch((err) => console.log(err));
    }

    return(
        <div className="container-fluid">
            <div className="row py-5 bg-secondary text-light">
                <div className="col text-center">
                    <h1>הרשמה</h1>
                </div>
            </div>
            <div className="row py-5 justify-content-center">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <small>
                            <label className="text-muted">השם שלך</label>
                            </small>
                            <input
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="שם מלא"/>
                        </div>
                        <div className="form-group p-2">
                            <small>
                                <label className="text-muted">האימייל שלך</label>
                            </small>
                            <input
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                placeholder="מייל"/>
                        </div>
                        <div className="form-group p-2">
                            <small>
                                <label className="text-muted">הסיסמא שלך</label>
                            </small>
                            <input
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                placeholder="סיסמא"/>
                        </div>
                        <div className="form-group p-2">
                            <small>
                                <label className="text-muted">בחר שאלה</label>
                            </small>
                            <select className="form-control">
                                <option>מה הצבע האהוב עלייך?</option>
                                <option>מה שם של החבר הכי טוב שלך?</option>
                                <option>מה שם חיית המחמד הראשונה שלך?</option>
                                <option>מה שם העיר שבה נולדת?</option>
                            </select>
                            <small className="form-text text-muted">
                                אתה יכול להשתמש בזה על מנת לאתחל את הסיסמא במידה ושכחת אותה.
                            </small>
                        </div>
                        <div className="form-group p-2">
                            <input
                                value={secret}
                                onChange={(e)=> setSecret(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="תרשום את התשובה שלך כאן"
                            />
                        </div>
                        <div className="form-group p-2">
                        <button className="btn btn-primary col-12">שלח</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
