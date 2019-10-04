import React, { Component } from 'react';
import PictureFlow from './PictureFlow';
class AdditionalDetails extends Component {
   render() {
      return (
         <section id="additional">
            < div align="center">
               <br />
               <h3 style={{ color: "white", padding: "30px" }}>Additional Details</h3>
               <h4 style={{ color: "white", padding: "30px" }}>Passionate Tennis Player- Won several tropies at 4.0 level, <br />Like to Play Volley-Ball. <br />I run / jog to refresh everyday, have run several 5ks, 10ks and half marathons</h4>
               <PictureFlow/>
            </div>


         </section>
      );
   }
}

export default AdditionalDetails;
