import React, { Component } from 'react';
class AdditionalDetails extends Component {
   render() {
      return (
         <section id="additional">
            < div align="center">
               <br />
               <h4 style={{ color: "white", padding: "30px" }}>Additional Details</h4>
               <p>Passionate Tennis Player- Won several tropies at 4.0 level, <br />Like to Play Volley Ball and running. <br />I run / jog to refresh everyday, have run several 5ks, 10ks and half marathons</p>
               <span><img src="images/tennis_player.jpg" style={{ height: "300px", padding: "30px" }} alt="tennis" />
                  <img src="images/volleyball.jpg" style={{ height: "300px", padding: "30px" }} alt="vb" />
                  <img src="images/runner.jpg" style={{ height: "300px", padding: "30px" }} alt="running" /></span><br />
               <img src="images/tropies.jpg" style={{ height: "80%", width: "80%", padding: "30px" }} alt="running" /><br /><p>Some pictures related to sports!</p>
            </div>


         </section>
      );
   }
}

export default AdditionalDetails;
