import React from 'react';
import Stepper from '../components/Stepper';
import { StepperContext } from '../components/contexts/StepperContext';

import { ServiceInfo } from './ServiceQuality';
import { ServiceBehavior } from './ServiceBehavior';
import { Evaluation } from './Evaluation';
import { useSelector } from 'react-redux';

const Survey = () => {

  const { steps } = useSelector((state) => state.steps)
  const { currentStep } = useSelector((state) => state.steps)

  // useEffect(() => {

  // },[currentStep])

  const displayStep = (step) => {
    switch (step) {
      case 1:
          return <ServiceInfo />;
      case 2:
          return <ServiceBehavior />;
      case 3:
          return <Evaluation />;
    
      default:
    }
  }


  return (
    <div>
    {/* Stepper */}
    <div className="mt-5">
      <Stepper 
        steps = {steps}
        currentStep = {currentStep}  
      />
      <div>
        <StepperContext.Provider value={{}}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
    </div>
    </div>
  )
}

export default Survey