import React, { useState } from 'react';
import axios from 'axios';
import "./BookForm.css"

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [acPreference, setAcPreference] = useState('');
  const [fixedAmount, setFixedAmount] = useState('');

  const accommodationTypeAmounts = {
    'Accommodation 1': '999',
    'Accommodation 2': '1999',
    'Accommodation 3': '2999',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/SubmitForm', {
        name,
        email,
        username,
        accommodationType,
        roomNumber,
        acPreference,
        fixedAmount,
      });
      console.log('Form submitted:', response.data);
      // Handle success or redirect to another page
      alert('Form submitted', response.data);
  
      // Reset form fields
      setName('');
      setEmail('');
      setUsername('');
      setAccommodationType('');
      setRoomNumber('');
      setAcPreference('');
      setFixedAmount('');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };
  

  const handleAccommodationTypeChange = (e) => {
    const selectedAccommodationType = e.target.value;
    setAccommodationType(selectedAccommodationType);
    setFixedAmount(accommodationTypeAmounts[selectedAccommodationType]);
  };

  return (
    <div className="formcontainer">
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Accommodation Type:
        <select value={accommodationType} onChange={handleAccommodationTypeChange}>
          <option value="">Select Accommodation Type</option>
          <option value="Accommodation 1">Single Bed</option>
          <option value="Accommodation 2">Double Bed</option>
          <option value="Accommodation 3">Triple bed</option>
        </select>
      </label>
      <br />
      <label>
        Room Number:
        <select value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)}>
          <option value="">Select Room Number</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <br />
      <label>
        AC Preference:
        <select value={acPreference} onChange={(e) => setAcPreference(e.target.value)}>
          <option value="">Select AC Preference</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br />
      <label>
        Fixed Amount:
        <input type="text" value={fixedAmount} readOnly />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;
