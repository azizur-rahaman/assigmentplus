'use client';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                step.number < currentStep
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-110'
                  : step.number === currentStep
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl scale-125 ring-4 ring-blue-200'
                  : 'bg-white border-2 border-gray-300 text-gray-400'
              }`}
            >
              {step.number < currentStep ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <div className="mt-2 text-center">
              <div
                className={`text-xs font-semibold transition-colors ${
                  step.number <= currentStep ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                {step.title}
              </div>
              <div className="text-xs text-gray-500 mt-0.5 hidden sm:block">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
