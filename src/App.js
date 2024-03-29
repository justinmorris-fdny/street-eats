import React from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Testimonials from './components/Testimonials';
import ReviewCard from './components/ReviewCard';
import reviews from './review_data';
import './App.css';

function App() { 
  
    let testimonial = "Street Eats is the best food review site that has ever been built.Now I can pick the best food cart with confidence instead of wondering if I'm getting a raw deal."
    return(
    <div className="App">
      <Navbar/>
      <Splash/>
       <Testimonials userTestimonial= {testimonial}/>
      <div className = "container">
        <div className="row">
         <ReviewCard
            name={ reviews[0].name }
            headline={ reviews[0].headline }
            summary={ reviews[0].summary }
            stars={ reviews[0].stars }
            posted={ reviews[0].posted }
          />
          <ReviewCard
            name={ reviews[1].name }
            headline={ reviews[1].headline }
            summary={ reviews[1].summary }
            stars={ reviews[1].stars }
            posted={ reviews[1].posted }
          />
          <ReviewCard
            name={ reviews[2].name }
            headline={ reviews[2].headline }
            summary={ reviews[2].summary }
            stars={ reviews[2].stars }
            posted={ reviews[2].posted }
          />
          <ReviewCard
            name={ reviews[3].name }
            headline={ reviews[3].headline }
            summary={ reviews[3].summary }
            stars={ reviews[3].stars }
            posted={ reviews[3].posted }
          />
          <ReviewCard
            name={ reviews[4].name }
            headline={ reviews[4].headline }
            summary={ reviews[4].summary }
            stars={ reviews[4].stars }
            posted={ reviews[4].posted }
          />
          <ReviewCard
            name={ reviews[5].name }
            headline={ reviews[5].headline }
            summary={ reviews[5].summary }
            stars={ reviews[5].stars }
            posted={ reviews[5].posted }
          />


        </div>
      </div>
    </div>
  );
}

export default App;
