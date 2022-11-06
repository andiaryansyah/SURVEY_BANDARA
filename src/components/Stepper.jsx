import React, {useEffect, useState, useRef} from "react";

const Stepper = ({steps, currentStep}) => {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
      const newSteps = [...steps]
      let count = 0;

      while (count < newSteps.length){
        if (count === stepNumber) {
          newSteps[count] = {
            ...newSteps[count],
            selected:true,
            completed:true,
          };
          count ++;
        } else if (count < stepNumber) {
          newSteps[count] = {
            ...newSteps[count],
            selected:true,
            completed:true,
          };
          count ++;
        } else {
          newSteps[count] = {
            ...newSteps[count],
            selected:false,
            completed:false,
          };
          count ++;
        }
      }

      return newSteps;
  }

  useEffect(() => {
    const stepsState = steps.map((step, index) => Object.assign({}, {
      completed:false,
      selected: index === 0 ? true : false,
    }))
    stepRef.current = stepsState;
    const current = updateStep( currentStep -1, stepRef.current);
    setNewStep(current);
  },[steps, currentStep])

  const displaySteps = newStep.map((step, index) => {
    return (
      <div key={index} className="w-full">
        
        <div className={`w-full border-t-8 transition duration-500 ease-in-out ${step.completed ? "border-blue-600" : "border-gray-300"}`}>
          {/* Display Line */}
        </div>
      </div>
    );
  })

  return (
    <>
    <div className="mx-4 p-4 flex justify-between">
          <div className="font-bold mb-5">
            <h1>{steps[currentStep - 1]}</h1>
          </div>
          <div className="font-bold text-blue-500">
            {/* display number */}
            {currentStep}/<span className="text-gray-400">3</span>
          </div>
        </div>
    <div className="flex justify-between items-center">
      {displaySteps}
    </div>
    </>
  );
};

export default Stepper;
