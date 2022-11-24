import React from "react";
import "./style.scss";

export const MainPage = () => {
   return (
      <div className="mainpage-container">
         <div className="text-container">
            <h1>No ruff times.</h1>
            <p>Curing all creatures, smaller and bigger!</p>
         </div>
         <div className="opening-hours">
            <h1>Opening hours:</h1>
            <p><b>Mon-Fri</b> 06:00-20:00<br/><b>Fri-Sun</b> 10:00-16:00</p>
         </div>
      </div>
   )
}