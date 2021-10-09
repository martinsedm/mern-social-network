import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () =>{
    return(
        <div className="container">
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
