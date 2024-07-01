// import React, { useState } from 'react'
import { useState, useEffect } from "react"


function DarkMode() {
     const [isDarkMode, setIsDarkMode] = useState(false)

     

     const toggleDarkMode = () => {
          setIsDarkMode(!isDarkMode)
     }
     return (
          <>
               <div onClick={toggleDarkMode}>
                    {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}


               </div>
          </>
     )
}

export default DarkMode
