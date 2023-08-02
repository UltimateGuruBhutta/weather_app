import React from 'react'

import { LuSearch,LuLocateFixed } from "react-icons/lu"; 
function InputField() {
   return(
  <>
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row mx-2 items-center justify-center  space-x-4">
        < input 
          type="text" placeholder='Search cities ... ' 
          className="text-xl font-light p-2 w-ful shadow-xl focus:outline-none capitalize placeholder:lowercase"/>
         
      </div>
      <div className='flex items-center space-x-2 '>   <LuSearch  size={35}  className=" text-white cursor-pointer  transition ease-out hover:scale-125 " /   >
 <LuLocateFixed  size={35}className="text-white cursor-pointer transition ease-out hover:scale-125  "   /   >
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='matric'  className='text-white font-light text-xl font-serif' >°C</button><p className=' text-xl text-white mx-1'>|</p><button name='imperial' className='font-serif text-white font-light text-xl'>°F</button>
      </div>
    </div>
  </>
  
  )
}

export default InputField

 