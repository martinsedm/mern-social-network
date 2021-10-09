import Link from "next/link";

const Nav = () =>{
        return(
            <nav className="nav d-flex justify-content-between" style={{backgroundColor: 'red'}}>
                    <Link href="/">
                        <a className="nav-link text-light">הבית</a>
                    </Link>
                    <Link href="/register">
                        <a className="nav-link text-light">הרשמה</a>
                    </Link>
                    <Link href="/login">
                        <a className="nav-link text-light">התחברות</a>
                    </Link>
            </nav>
        )
}

export default Nav;
