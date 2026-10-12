import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about" id="about">
            <h2>About Me</h2>
            <p>
                I'm an MS Electrical and Computer Engineering student at Northeastern University (expected May 2027), after completing a BS in Computer Engineering with a minor in Business Administration. I'm interested in software development, embedded systems, and machine learning. Across three co-ops at medical device companies I've worked on embedded C++, real-time sensing algorithms, and data pipelines.
            </p>
            <p>
                Outside of engineering, I'm a Manchester City supporter who used to play soccer myself, and a diehard Boston sports fan. I spend a fair amount of time building sports analytics models as a hobby — which is actually where the FPL and NFL survivor pool projects on this site came from. I lift regularly with a focus on progressive overload, follow markets and economics closely, and when I'm not working you'll usually find me with rap, R&amp;B, or house music on. I like systems that reward getting the details right, whether that's a defense, a trading model, or a training pipeline.
            </p>
        </section>
    );
}

export default About;
