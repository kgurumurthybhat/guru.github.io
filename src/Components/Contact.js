import React, { Component } from 'react';

class Contact extends Component {
   render() {
      if(this.props.data){
         var profilepic= "images/"+this.props.data.image;
       }


      return (
         <section id="contact">

         <div align="center">
            <h2><a href="https://hightechguru.net/guru" target="_blank">Contact Guru</a></h2>
            <img className="profile-pic"  src={profilepic} alt="Guru's Profile Pic"  width="175px"/>
         </div>

         </section>
      );
   }
}

export default Contact;
