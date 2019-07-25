   import React from 'react';
   import ReactTextRotator from 'react-text-rotator';
    
   const content = [
     {
       text: 'Customer Obsession.',
       className: 'classA',
       animation: 'fade',
     },
     {
       text: 'Ownership.',
       className: 'classB',
       animation: 'fade',
     },
     {
       text: 'Invent and Simplify.',
       className: 'classC',
       animation: 'fade',
     },
     {
       text: 'Are Right, A Lot.',
       className: 'classD',
       animation: 'fade',
     },
     {
       text: 'Learn and Be Curious',
       className: 'classE',
       animation: 'fade',
     },
     {
      text: 'Hire and Develop the Best.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Insist on the Highest Standards.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Think Big.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Bias for Action.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Frugality.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Earn Trust.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Dive Deep.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Have Backbone; Disagree and Commit.',
      className: 'classE',
      animation: 'fade',
    },{
      text: 'Deliver Results.',
      className: 'classE',
      animation: 'fade',
    },
   ];
    
   const LeadershipPrinciples = () => (
     <div align="center">
       <h4>Leadership Principles... </h4>
       <h3><ReactTextRotator
         content={content}
         time={5000}
         startDelay={2000}
       /></h3><br/>
     </div>
   );

export default LeadershipPrinciples;
