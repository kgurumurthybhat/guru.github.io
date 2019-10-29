import React, { Component } from 'react';


class Testimonials extends Component {
   render() {

      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <hr />
               <blockquote>

                  <p>{testimonials.text}</p>
                  <div>
                     <h6 style={{ color: "lightgreen" }}>From: </h6><br/>
                     <img src={`/images/linkedin/${testimonials.image}.jpeg`} alt={testimonials.image} width="100px" padding="20px" />
                     <h6 style={{ color: "lightgreen" }}>{testimonials.user}</h6>
                  </div>
               </blockquote>
            </li>
         })
      }

      return (
         <section id="testimonials">
            <div className="ten columns flex-container"><br /><br />
               <h1 align="center">Testimonials <br /><a href="https://www.linkedin.com/in/guru04" target="_blank" rel="noopener noreferrer">[<i className="fa fa-linkedin"></i>]</a></h1>
               {testimonials}
               <hr />
            </div>


         </section>
      );
   }
}

export default Testimonials;
