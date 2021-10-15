import { useContext } from "react";
import { UserContext } from "../context";

const Home = () =>{
    const [state, setState] = useContext(UserContext);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 text-center">דף הבית</h1>
                    <img  src="/images/default.jpg" alt="default image"/>
                </div>
            </div>
        </div>
    )
}

export default Home;
