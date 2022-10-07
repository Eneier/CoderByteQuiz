import React from 'react';

const Result = ({ correct, title}) => {
    return (
        <div className="container">
            <div className="nav">
                <div className="title">Quiz number {title}</div>
                <button className="btn primary">Next quiz</button>
            </div>
            <div className="card">
               <div className="result">You got {correct} points!!!</div>
                <a href="/">
                    <button className="btn primary">Try Again</button>
                </a>
            </div>
        </div>
    );
};

export default Result;