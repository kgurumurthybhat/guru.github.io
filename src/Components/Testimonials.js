import React, { Component } from 'react';


class Testimonials extends Component {
   render() {

      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <hr />
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }

      return (
         <section id="testimonials">
            <div className="ten columns flex-container"><br />
               <h1 align="center">Testimonials <br /><a href="https://www.linkedin.com/in/guru04" target="_blank" rel="noopener noreferrer">[<i className="fa fa-linkedin"></i>]</a></h1>
               <h4>{testimonials}</h4>
            </div>


         </section>
      );
   }
}

export default Testimonials;
