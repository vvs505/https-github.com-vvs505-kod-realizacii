import React from 'react';
import { ProgramStep as ProgramStepType } from '../types';

interface Props {
  step: ProgramStepType;
  index: number;
}

const ProgramStep: React.FC<Props> = ({ step, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative group">
        {/* Soft decorative blob behind image */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-30 blur-3xl transition-colors duration-500 group-hover:bg-[#CDE5DA]/40 ${isEven ? 'bg-[#E8EFEA]/60' : 'bg-[#F5F1EC]/60'}`}></div>
        
        <div className="relative h-72 md:h-[30rem] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-mint/5 border-4 border-white/60 transform transition-transform duration-700 hover:scale-[1.02]">
           <img 
            src={step.illustration} 
            alt={step.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="flex items-center gap-6">
          <span className="text-7xl font-serif text-[#CDE5DA] font-bold select-none opacity-80">
            0{index + 1}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-dark italic leading-tight">{step.name}</h3>
        </div>
        
        <div className="space-y-6 pl-2">
          <div className="inline-block px-4 py-1.5 bg-[#E8EFEA] rounded-full text-[10px] font-bold tracking-[0.15em] text-brand-dark/70 uppercase">
            {step.block}
          </div>
          <p className="text-lg leading-loose text-brand-dark/80 font-light">
            {step.description}
          </p>
          
          <ul className="space-y-3 pt-4">
            {step.results.map((res, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-brand-dark/70 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0"></span>
                {res}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramStep;
