import React from 'react';
import ReactTextRotator from 'react-text-rotator';

const content1 = [
  {
    text: "Guru is one of those rare team members who - besides providing great dedication to all his assignments - also serves as an inspiring mentor for the whole team. Guru has vast and broad technical experience, yes. However I believe his great interpersonal skills and a superb capacity for empathy result in his ability to motivate the team to care about its projects and the project’s success. He took it upon himself to be the go-to person for interacting with the programmer offsite team, and provided tireless effort, positive attitude and respect for others to achieve great results with that team, which included very successful software deliveries, as well as cost-saving and innovative process improvements. A great team member and leader, most definetely - From : Alberto Antunano - Technical Program Manger American Express Technologies - USA.",
    className: 'classA',
    animation: 'fade',
  },
  {
    text: "I had the opportunity and privilege to work with Guru several times on many projects and he is a hard worker, he have a great relationship with the colleagues and it's focused on results. He has strong technical skills and he is a solid contributor to the team and the company. - From: Eduardo Freitas - Project Architect at American Express Technologies - Brazil.",
    className: 'classB',
    animation: 'fade',
  },
  {
    text: "I worked with Guru for a complete year in on different projects. He was really a great partner and somebody to learn from as I was giving my first steps as project leader. As you can see at my profile, I don't like to do recommendations as this is something really important to me, and that I don't do for all the people I know. Guru if one of those guys you want in your team. Is respectful (he always wanted to know about my culture and how do we live in Argentina), great partner, excellent teacher and detailed oriented. You can always count with him even in those difficult situations. He has a 'can do' approach that is refreshing under stressful situations. - From: Lucas Wells - Delivery Manager at IBM Argentina.",
    className: 'classC',
    animation: 'fade',
  },
  {
    text: "Guru welcomed me to the American Express/TCS IT group. He introduced me to TCS methodologies and lead me in SDLC. He is responsible and detail oriented and can keep track of multiple projects at the same time without losing focus. He is a very accessible and warm person and it was a pleasure working with him. Maria Soledad Ruiz - CRM Solution Architect at Advanced Software - Argentina.",
    className: 'classD',
    animation: 'fade',
  },
  {
    text: "I have worked with Guru for the past 2 years, and I must say he is a great person to work with. Guru is proactive, result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done. He definitely helps projects move smoothly and makes sure that whatever project he is working on meets the highest standards. I am sure he has been and will be a great asset for any team. - From: Barbara Blackaller - TPM at Tata Consultancy Services - Uruguay.",
    className: 'classE',
    animation: 'fade',
  }
];
const content2 = [
  {
    text: "I had the pleasure to work with Guru during many years in American Express and in several projects . He is a very reliable technologies professional, always committed to the internal customer and never missing any deadline. He had to face many challenges given the short timeline that the Argentina tax authorities gave to implement several changes in the law that impacted the systems . His results were always outstanding. - From: Roberto Galantai - Senior Tax Manager at American Express - Argentina.",
    className: 'classA',
    animation: 'fade',
  },
  {
    text: "I had the previlege to work with Guru during 3 years on many projects in American Express. He has a great relationship with all the colleagues and a strong knowledge in projects of different characteristics. He showed to be a great IT professional, always committed with all the aspects involved in the projects and the company itself. Cynthia Buffone - Product Owner at American Express. - Argentina.",
    className: 'classB',
    animation: 'fade',
  },
  {
    text: "I have had the pleasure to work with Guru for the past 4 years and he is a reliable software development lead willing to put all the effort required to meet his commitments and deliver a quality solution. He is detail oriented and a pleasure to deal with. - From: Rene Delagado - Technical Relationship Manager at American Express Technologies - USA.",
    className: 'classC',
    animation: 'fade',
  },
  {
    text: "Guru is a very solid IT professional who strives to add value to the business. Result oriented, hard worker and someone that you can trust on. He proactively builds trust relationships with customers keeping customer satisfaction as a key goal. He showed those attributes on different projects that works with me in Amex Technologies LACC Team. And the most important, he is a great person. - From: Juan Eduardo Roche - TPM at American Express Technologies. - Argentina.",
    className: 'classD',
    animation: 'fade',
  },
  {
    text: "I had the privilege of working with Guru as his leader at American Express. He is a Technical Lead in my organization who delivered outstanding results that were recognized across our team members. Guru brought passion, creativity and tought leadership to the team. He led multiples applications across the LAC and is our liaison between our develop center in India and our LAC center. His experience in different country working with Financial and Merchants platforms gives him a very diverse set of skills and experiences. - From: Nelson Almeida - TPM at American Express Technologies USA.",
    className: 'classD',
    animation: 'fade',
  },
  {
    text: "I had the opportunity to work with Guru Krishnamurthy for several years in South Florida. He built and maintained a solid relationship with Tata Consultancy Services colleagues and also with American Express employees, both in Technologies and Business areas. He always partnered in a cooperative way with IT colleagues to overcome difficult situations and find the right solutions for our Clients. He has strong technical skills and he is a truly solid contributor to the team!. Thanks! - From: Emilio Pintos - Engineering Director - American Express Technologies - USA.",
    className: 'classE',
    animation: 'fade',
  }
];

const TestimonialData = () => (
  <div align="center">
    <h2>Testimonials</h2>

    <ReactTextRotator
      content={content1}
      time={15000}
      startDelay={100}
    />
    <hr />

    <ReactTextRotator
      content={content2}
      time={15000}
      startDelay={100}
    />
  </div>
);

export default TestimonialData;
