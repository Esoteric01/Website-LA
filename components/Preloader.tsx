import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div className={`preloader ${!isLoading ? 'hidden' : ''}`}>
       <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width="100">
          <rect width='100' height='100' rx='20' fill='transparent'/>
          <path id="preloader-l" d='M30 75 L30 25 L45 25 M30 50 L45 50' stroke='%2300C46A' stroke-width='10' stroke-linecap='round' stroke-linejoin='round' fill='none' stroke-dasharray="105" stroke-dashoffset="105">
            <animate attributeName="stroke-dashoffset" from="105" to="0" dur="0.8s" fill="freeze" begin="0s" />
          </path>
          <path id="preloader-a" d='M55 25 L80 50 L55 75' stroke='%23f0f0f0' stroke-width='10' stroke-linecap='round' stroke-linejoin='round' fill='none' stroke-dasharray="86" stroke-dashoffset="86">
             <animate attributeName="stroke-dashoffset" from="86" to="0" dur="0.8s" fill="freeze" begin="0s" />
          </path>
      </svg>
    </div>
  );
};

export default Preloader;
