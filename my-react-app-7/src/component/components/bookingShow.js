import React, { useState } from 'react';

function BookingForm() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    setBookingOpen(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBookShow = () => {
    alert(`Booking confirmed for email: ${email}`);
    setBookingOpen(false);
    setEmail('');
  };

  return (
    <div>
      {!isBookingOpen ? (
        <button onClick={handleButtonClick}>Book Show</button>
      ) : (
        <div>
          <input className='littleInput'
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleBookShow}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
