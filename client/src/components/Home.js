import React from 'react';
import img1 from '../assets/imgs/react-logo.png'
import img2 from '../assets/imgs/node-logo.png'
import img3 from '../assets/imgs/express-logo.png'


const Home = () => {
    return (
        <div>
            <div className="container-home">
                <h1>React MERN App</h1>
                <div className="images-container">
                <img src={img2} className="logo logo-node" alt="tech pic" />
                <img src={img1} className="logo logo-react" alt="tech pic" />
                <img src={img3} className="logo logo-express" alt="tech pic" />
            </div>
            </div>
        </div>
    )
}

export default Home;