import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
     <div  className="contact">
      <h1>Contact me</h1>
      <form action="">
        <label className="name">Name: <input type="name" id="name" /></label>
        <label className="email">Email: <input type="email"  id="email" /></label>
        <label className="message">Message: <textarea name="" id="" cols="30" rows="10"></textarea></label>
   <input type="submit" className="button form-button" value="SEND"/>
      </form>
    </div>
    </section>
  );
});

export default Contact;