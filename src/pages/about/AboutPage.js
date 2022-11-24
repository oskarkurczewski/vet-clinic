import React from "react";
import "./style.scss"

export const AboutPage = () => {
   return (
      <div className="about-container">
         <div className="about-us">
            <h1>About us</h1>
            <p>Lodz's most prominent Vet Clinic at Politechniki 7 is a place which has been offering help for your pets since 2016. It functions 24/7 (however the visiting hours are restricted), all days in the year. 
               We have professional and modern equipment, as well as huge experience which are crucial to save lives of our four-legged friends.
            </p>
            <img width={500} src="/3ds.jpg" alt="3ds"></img>
         </div>
         <div className="our-doctors">
          <h1>Our doctors</h1>
          <div className="doctors">
            <div className="doctor">
            <img height={300} src="/doc1.png" alt="doc1"></img>
               <p><b>Nick Chaplin</b></p>
               <p className="desc">Founder of the Clinic. Being a vet has been his dream since early childhood. Nick, apart from treating animals, enjoys fast cars and a good meal once in a while.</p>
            </div>
            <div className="doctor">
            <img height={300} src="/doc2.png" alt="doc2"></img>
               <p><b>Rachel Goswell</b></p>
               <p className="desc">Co-founder of the Clinic. Her love for animals has led her to taking up a career of a vet. In her free time, she likes to go sightseeing in the mountains.  </p>
            </div>
          </div>
         </div>
      </div>
   )
}