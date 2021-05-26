import React from 'react'
import './Home.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function Home() {
    return (
        <div className = "home">
           <img className = "home_topImage" src = "https://www.ikea.com/images/work-from-home-essentials-shop-now-4febf4565641b1cfba630bc7f845ab55.png?f=xxxl" alt = "" />
           <p className = "border_line"></p>
           <div className = "home_middle">
               <h2 className = "home_descriptionTitle">For a safe Shopping Experience</h2>
               <p className = "home_paragraph">Complying with the norms, the IKEA Hyderabad store will be open from 22nd May between 6:15 am and 9 am. You can continue shopping online, use our contactless Click and Collect service and our remote planning services. Deliveries for Mumbai and Pune customers will resume once the restrictions are lifted.</p>
                <button className = "learnmore_button">Learn more</button>
           </div>
           <p className = "border_line"></p>
           <div className = "home_cards">
               <div className = "first_image">
               <img className = "home_cardImage" src = "https://www.ikea.com/images/12/c6/12c6b8b641721ca14af9a39d287a52a9.png?f=xs" alt = ""/>
               <div className = "firstImage_description">
                   <p className = "firstImage_title">Limited Time Offers</p>
                   <button className = "firstImage_button"><ArrowForwardIcon /></button>
               </div>
               </div>
               <div className = "second_image">
               <img className = "home_cardImage" src = "https://www.ikea.com/images/0e/7b/0e7beadd79e327675811ac351dd70ff9.jpg?f=xs" alt = "" />
               <div className = "secondImage_description">
                   <p className = "firstImage_title">Download the IKEA app now</p>
                   <button className = "secondImage_button"><ArrowForwardIcon /></button>
               </div>
               </div>
               <div className = "third_image">
                <img className = "home_cardImage" src = "https://www.ikea.com/images/4d/e0/4de02b23c4c7302e96cf301fd84d10d2.png?f=xs" alt = "" />
                <div className = "thirdImage_description">
                   <p className = "thirdImage_title">Storage and organising solutions to your home</p>
                   <button className = "secondImage_button"><ArrowForwardIcon /></button>
               </div>
               </div>
           </div>
        </div>
    )
}
