import React, { Component } from 'react';
import PictureFlow from './PictureFlow';
class AdditionalDetails extends Component {
   render() {

      return (
         <section id="additional" style={{ backgroundColor: '#6a7563' }}>
            < div align="center">
               <br/>
               <u><h4 style={{ color: "yellow", padding: "30px" }}>Additional information!</h4></u>
               <h4 style={{ color: "lightblue" }}>Passionate Tennis Player- Won several trophies at 4.0 level. <br/>Like to Play Volley-Ball, Table-Tennis and regularly run/jog for refreshment. <br/>Have run several 5ks, 10ks, and half marathons. </h4>
               <PictureFlow />
            </div>



         </section>
      );
   }
}

export default AdditionalDetails;
