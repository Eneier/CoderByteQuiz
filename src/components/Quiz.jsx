import React, {useState} from 'react';

const Quiz = ({ question, onCLickVariant, title, nextQuizHandler }) => {


    return (
        <div className="container">
            <div className="nav">
                <div className="title">Quiz number {title}</div>
                <button className="btn primary" onClick={nextQuizHandler}>Next quiz</button>
            </div>
            <div className="card">
                <div className="item1">{question.title} / 10
                </div>
                <div className="variants">
                    <h3>SELECT ONLY ONE</h3>
                    <div>
                        {
                            question.variants.map((text, index) => (
                                <>
                                    <input onClick={() => onCLickVariant(index)} type="radio" id={index} key={text} name="radio-group"/>
                                    <label htmlFor={index}>{text}</label>
                                </>

                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;