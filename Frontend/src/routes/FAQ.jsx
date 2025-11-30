import React, { useState } from 'react';
import Header from '../components/Header';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const QuestionBox=({ques, ans})=>{
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col justify-center items-center' onClick={()=> setIsOpen(!isOpen)}>
        <div className={`flex justify-between items-center border-2 p-5 w-[60%] shadow-sm shadow-accent-content cursor-pointer`}>
          <h2 className='font-semibold text-primary'>{ques}</h2>
          <ArrowDropDownIcon
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition duration-300`} />
        </div>
        <div className={`border ${isOpen ? "max-h-[500px] p-5 opacity-100 " : "max-h-0 p-0 opacity-0"} w-[60%] transition-all duration-500`}>
          <p>{ans}</p>
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  
  return (
    <div className=''>
      <Header title="FAQ" subtitle="Frequently asked questions" />
      <div className='flex flex-col mt-10'>
      <QuestionBox ques="How to utilize the calendar?" ans="Just got to the calendar tab, select a date and add an event. " />
      <QuestionBox ques="How to utilize the calendar?" ans="Just got to the calendar tab, select a date and add an event." />
      <QuestionBox ques="How to utilize the calendar?" ans="Just got to the calendar tab, select a date and add an event." />
      <QuestionBox ques="How to utilize the calendar?" ans="Just got to the calendar tab, select a date and add an event." />
      <QuestionBox ques="How to utilize the calendar?" ans="Just got to the calendar tab, select a date and add an event." />
      <QuestionBox ques="How to utilize the calendar?" ans="Just got to the calendar tab, select a date and add an event." />
      </div>
    </div>

  )
}

export default FAQ;
