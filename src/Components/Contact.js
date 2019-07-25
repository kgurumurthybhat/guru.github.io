import React, { Component } from 'react';

class Contact extends Component {
   render() {
      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;

      }
      return (
         <section id="contact">
            < div align="center">
            <h4>Contact Details</h4>

            <a href="https://hightechguru.net/guru#contact" target="_blank" rel="noopener noreferrer"><img className="profile-pic" src={profilepic} alt="Guru's Profile Pic" width="175px" /></a>
            </div>

            <div align="center">
               <p className="address">
                  <span>{name}</span><br />
                  <span>
                     {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span><br/>
                  <span><a href="https://hightechguru.net/guru#contact" target="_blank" rel="noopener noreferrer">Email Guru<br /><img src="/images/mailbox.gif"alt="Contact Me!" width="175px"/></a></span>
               </p>
               <p>You may <a href={resumeDownload}>download <i className="fa fa-download"></i></a> my resume for additional information.</p>
               

            </div>

         </section>
      );
   }
}

export default Contact;
