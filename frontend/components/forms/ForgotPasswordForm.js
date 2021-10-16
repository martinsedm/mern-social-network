import {SyncOutlined} from "@ant-design/icons";

const ForgotPasswordForm = ({
                                handleSubmit,
                                email,
                                setEmail,
                                newPassword,
                                setNewPassword,
                                secret,
                                setSecret,
                                loading,
                                page
                            }) => {
    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group p-2">
                <small>
                    <label className="text-muted">האימייל שלך</label>
                </small>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="מייל"/>
            </div>
            <div className="form-group p-2">
                <small>
                    <label className="text-muted">סיסמא חדשה</label>
                </small>
                <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="הכנס סיסמא חדשה"/>
            </div>
           <>
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
                        onChange={(e) => setSecret(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="תרשום את התשובה שלך כאן"
                    />
                </div>
            </>
            <div className="form-group p-2">
                <button disabled={!email || !newPassword || !secret || loading }
                        className="btn btn-primary col-12">
                    {loading ? <SyncOutlined spin className="py-1"/> : 'צור סיסמא חדשה'}
                </button>
            </div>
        </form>
    )
}

export default ForgotPasswordForm;
