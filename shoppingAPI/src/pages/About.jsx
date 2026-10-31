import React from 'react';
import '../styles/About.css';

function About() {

    return (

        <>

        <h1 id="title">About</h1>
        
        <p id="subTitle">Learn more about ShoppingAPI</p>

        <div className="aboutSection">

            <p id="whatSection">What is ShoppingAPI?</p>

            <p id="info">ShoppingAPI is a React program that receives product information from an API and displays products in a responsive shopping interface.</p>

            <h3>Technologies Used</h3>

        <div id="technologies">
            <p>React</p>
            <p>JavaScript</p>
            <p>CSS</p>
            <p>REST APIs</p>
            <p>Fetch</p>
        </div>

        <div id="functionality">
            <h3>How it Works</h3>

            <p>React loads the application</p>
            <p>useEffect makes the API request</p>
            <p>DummyJSON returns product data</p>
            <p>Product data is stored in state</p>
            <p>React shows the products</p>

        </div>

    </div>
        
        </>

    )

};

export default About;
