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
                        <label className="text-muted">Your Name</label>
                    </small>
                    <input
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Full Name"/>
                </div> )}
                <div className="form-group p-2">
                    <small>
                        <label className="text-muted">Your Email</label>
                    </small>
                    <input
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="Email"/>
                </div>
                <div className="form-group p-2">
                    <small>
                        <label className="text-muted">Your Password</label>
                    </small>
                    <input
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Password"/>
                </div>
                { page !== "login" && <>
                <div className="form-group p-2">
                    <small>
                        <label className="text-muted">Select a Question</label>
                    </small>
                    <select className="form-control">
                        <option>What is your Favorite Color?</option>
                        <option>Who is your best friend?</option>
                        <option>Where city did you born?</option>
                    </select>
                    <small className="form-text text-muted">
                        You can use it later for reset your password.
                    </small>
                </div>
                <div className="form-group p-2">
                    <input
                        value={secret}
                        onChange={(e)=> setSecret(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Write here your answer"
                    />
                </div>
                </>}
                <div className="form-group p-2">
                    <button disabled={page === "login" ?  !email || !password || loading :
                        !name || !email || !password || !secret || loading } className="btn btn-primary col-12">
                        {loading ? <SyncOutlined spin className="py-1"/> : 'Register'}
                    </button>
                </div>
            </form>
        )
}

export default AuthForm;
