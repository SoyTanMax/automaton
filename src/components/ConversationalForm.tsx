import React, { useState } from 'react';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { Button } from './Button';
import { Input } from './Input';

const questions = [
  { id: 1, name: 'collectionName', label: "How will you name your collection?", type: 'text' },
  { id: 2, name: 'symbolName', label: "Set a name for your symbol", type: 'text' },
  { id: 3, name: 'description', label: "Write an interesting description", type: 'text' },
  { id: 4, name: 'mintCost', label: "How much will each mint cost?", type: 'text' },
  { id: 5, name: 'externalUrl', label: "What is your project URL?", type: 'text' },
  { id: 6, name: 'coverImage', label: "Upload an image for your collection cover", type: 'file' },
];

export function ConversationalForm({handleBack: handleBackProp}: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = (e) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
      setPreviousQuestionIndex(currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Form submission:', answers);
    }
  };

  const handleBack = () => {
    if(currentQuestionIndex === 0){
      handleBackProp()
    }
    if (currentQuestionIndex > 0) {
      setPreviousQuestionIndex(currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const animationClass = currentQuestionIndex > previousQuestionIndex ? 'slide-up-animation' : 'slide-down-animation';
  const currentQuestion = questions[currentQuestionIndex];
  const isLastStep = currentQuestionIndex + 1 === questions.length;

  return (
    <form onSubmit={handleNext} className={`flex gap-2 items-start ${animationClass}`}>
      <Button variant='icon' onClick={handleBack}>
        <ArrowLeftIcon />
      </Button>
      <div key={currentQuestionIndex} className='flex flex-col gap-4 mt-1.5'>
        <Input 
          type={currentQuestion.type}
          label={currentQuestion.label}
          name={currentQuestion.name}
          onChange={handleChange}
          value={answers[currentQuestion.name]}
          autoFocus
        />
        <div className='flex gap-2 items-center'>
          <Button type="submit" className={`${isLastStep && 'w-full'}`}>
            {isLastStep ? 'Generate collection' : 'OK'}
          </Button>
          {!isLastStep && <p>press Enter</p>}
        </div>
      </div>
    </form>
  );
}

type Props = {
  handleBack: Function
}