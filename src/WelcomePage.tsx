import  { useState } from 'react';
import './WelcomePage.css';
import CustomizePage from './CustomizePage';



const questions = [
  {
    id: 1,
    text: 'What will be the primary use of your PC?',
    options: ['Gaming', 'Work', 'General Use'],
  },
  {
    id: 2,
    text: 'What is your budget?',
    options: ['< $1000', '$1000 - $2000', '> $2000'],
  },
  // Add more questions as needed
];

function WelcomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});


  const handleStartClick = () => {
    setCurrentStep(1); // Move to the first question
  };

  const handleOptionSelect = (questionId: number, option: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    const nextStep = currentStep + 1;
    if (nextStep <= questions?.length) {
      setCurrentStep(nextStep); // Move to the next question or finish
    } else {
  
      (setCurrentStep(nextStep))
    }
  };
  console.log("answers",answers)
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        {currentStep === 0 ? (
          <>
            <h1>Build Your Dream PC</h1>
            <p>Welcome to our PC builder wizard. Let's start by answering a few questions to tailor your perfect PC build.</p>
            <button onClick={handleStartClick}>Get Started</button>
          </>
        ) :   (
          
          <div className="questionnaire">
            <h2>{questions[currentStep - 1]?.text}</h2>
            <div className="options">
              {questions[currentStep - 1]?.options.map(option => (
                <button key={option} onClick={() => handleOptionSelect(questions[currentStep - 1]?.id, option)}>
                  {option}
                </button>
              ))}
            </div>
          
          </div>
        )}
        {currentStep === 3 && (
          <CustomizePage/>)}
      </div>
    </div>
  );
}

export default WelcomePage;
