import  { useState } from 'react';
// import CustomizePage from '../CustomizePage';
import GamesLike from './GamesLike';



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
  {
    id: 3,
    text: 'What kind of storage you want',
    options: ['SSD', 'HDD','BOTH'],
  },
  // Add more questions as needed
];

function QuestionarePage() {
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
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white font-sans">
      <div className="text-center max-w-lg p-5">
        {currentStep === 0 ? (
          <>
            <h1 className='text-5xl mb-5'>Build Your Dream PC</h1>
            <p className='text-lg mb-7'>Welcome to our PC builder wizard. Let's start by answering a few questions to tailor your perfect PC build.</p>
            <button className='text-base text-gray-900 bg-blue-600 rounded px-5 py-2.5 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-700' onClick={handleStartClick}>Get Started</button>
          </>
        ) :   (
          
          <div className="mt-5">
            <h2 className=' text-[25px]'>{questions[currentStep - 1]?.text}</h2>
            <div >
              {questions[currentStep - 1]?.options.map(option => (
                <button className='block mx-auto   border border-gray-300 bg-blue-500 p-4 mt-3 w-[150px]' key={option} onClick={() => handleOptionSelect(questions[currentStep - 1]?.id, option)}>
                  {option}
                </button>
              ))}
            </div>
          
          </div>
        )}
        {currentStep === 4 && (
          <GamesLike/>
          // <CustomizePage/>
          )}
      </div>
    </div>
  );
}

export default QuestionarePage;
