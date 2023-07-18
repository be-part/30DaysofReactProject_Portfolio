import React from 'react';
import Button from './Button';


const Subscribe = () => {
  return (
    <div className='form-wrapper'>
      <p className='sign-up-title'>SUBSCRIBE</p>
      <p className='text'>Sign-up with your email address to receive news and updates.</p>

      <form>
        <div className='subscribe-form'>
          <input type='text' id='firstname' placeholder='First name' />
          <input type='text' id='lastname' placeholder='Last name' />
          <input type='email' id='email' placeholder='Email' />
        </div>

        
          <Button />
        
      </form>
    </div>
  );
};

export default Subscribe;
