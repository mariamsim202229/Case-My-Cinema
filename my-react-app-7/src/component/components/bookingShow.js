import { useState } from 'react';

function BookingForm({show}) {

  // console.log('BookingForm props', show, confirmationMessage);
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleButtonClick = () => {
    setBookingOpen(true);
    setConfirmationMessage('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBookShow = () => {
    console.log('Booking button clicked');
    const message = (`Boking bekräftad for mejladress: ${email}`);
    setConfirmationMessage(message);
    setBookingOpen(false);
    setEmail('');
  };

  return (
    <div>
      {!isBookingOpen ? (
        <button onClick={handleButtonClick}>Boka</button>
      ) : (
        <div>
          <input className='littleInput'
            type="email"
            placeholder="skriv din mejladress"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleBookShow}>Confirm Booking</button>
        </div>
      )}
      {confirmationMessage && (
        <div className='confirm'>
          <p>{confirmationMessage}</p>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
