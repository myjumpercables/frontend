import React from 'react';
import './styles/Home.css'

export const Home = () => (
    <div id="jumbo" className="h-100 jumbotron-fluid w-80 text-center" style={{overflowY: "hidden"}}>
    <div className="bg-light">
        <div className="display-4 font-weight-bold">
            jumpercables
        </div>

        <p className="lead font-weight-light">
            The premier service management app!
        </p>
    </div>
    </div>
)

export default Home;