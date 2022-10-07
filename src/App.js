import './App.css';
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import questions from './store/state'
import {useState} from "react";

function App() {

    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [title, setTitle] = useState(Object.keys(questions).length - 1)
    const [question, setQuestion] = useState(questions.quiz1[step])

    const nextQuizHandler = () => {
        if (title < Object.keys(questions).length)
                    setTitle(prev => prev + 1)
                else  {
                    alert('There is no quiz anymore')
                }
                setQuestion(questions.quiz2[step])
        setCorrect(0)
        setStep(0)
    }

    const onCLickVariant = (index) => {
        console.log(step, index)
        setStep(step + 1)
        if (title == 1) {
            setQuestion(questions.quiz1[step + 1])
        } else setQuestion(questions.quiz2[step + 1])
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div>
            {
                step !== questions.quiz1.length ? <Quiz question={question}
                                                        onCLickVariant={onCLickVariant}
                                                        title={title}
                                                        nextQuizHandler={nextQuizHandler}
                    />
                    :
                     <Result correct={correct}
                             title={title}
                     />
            }
        </div>


    );
}

export default App;
