import { useContext } from "react";
import { UserContext } from "../context";

const Home = () =>{
    const [state, setState] = useContext(UserContext);

    return(
        <div className="container-fluid">
            <div className="row py-5 text-light bg-default-image">
                <div className="col text-center">
                    <h1>Home Page</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;
