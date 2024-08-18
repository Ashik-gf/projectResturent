
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, title,subject,paragraph }) => {
  return (
    <section className={` flex flex-col justify-center items-center ${className}`}>
     <div className="header-border border-2 font-jos text-[15px] text-center max-w-[150px] py-[2px]">
      <h1 className= {`  font-jos text-[15px] text-[#292E36] tracking-[4px] uppercase ${className} `} >{title}</h1>
    </div>
    <div className= {` w-full sm:w-[550px] flex flex-col justify-center items-center py-4 ${className}`} >
    <h1 className={`font-cormo text-[35px] text-center font-semibold text-[#292E36] ${className}`}>{subject}</h1>
      <p className= {`text-center justify-center font-jos text-[20px] font-normal text-[#555555] ${className}`} >{paragraph}</p>
    </div>
    </section>
   
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
