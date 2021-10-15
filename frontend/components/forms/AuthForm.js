import {SyncOutlined} from "@ant-design/icons";

const AuthForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    secret,
    setSecret,
    loading,
    page
                  }) =>{
        return(
            <form onSubmit={handleSubmit}>
                {page !== 'login' && (
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
                </div> )}
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
                { page !== "login" && <>
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
                </>}
                <div className="form-group p-2">
                    <button disabled={page === "login" ?  !email || !password : !name || !email || !password || !secret} className="btn btn-primary col-12">
                        {loading ? <SyncOutlined spin className="py-1"/> : 'הרשמה'}
                    </button>
                </div>
            </form>
        )
}

export default AuthForm;
