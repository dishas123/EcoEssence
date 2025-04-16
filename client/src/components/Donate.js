import React, { useState } from 'react';

const Donate = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    if (!selectedItem) {
      setMessage('Please select an item to donate.');
      return;
    }
    setMessage(`Thank you for donating ${selectedItem}!`);
    setSelectedItem('');
    setComments('');
  };

  return (
    <div
      className="Donate"
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: '#00ff00',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        className="dhead"
        style={{
          color: '#004d4d',
          fontSize: '2rem',
          marginBottom: '20px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        Donate Items
      </h1>
      <form onSubmit={handleDonate}>
        <label
          htmlFor="donation"
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#004d4d',
            display: 'block',
            marginBottom: '10px',
          }}
        >
          Select an item to donate:
        </label>
        <select
          id="donation"
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #004d4d',
            marginBottom: '20px',
          }}
        >
          <option value="">--Select an Item--</option>
          <option value="Old Jeans">Old Jeans</option>
          <option value="E-Waste">E-Waste</option>
          <option value="Old Bottles">Old Bottles</option>
          <option value="Books">Books</option>
        </select>
        <label
          htmlFor="comments"
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#004d4d',
            display: 'block',
            marginBottom: '10px',
          }}
        >
          Add any comments (optional):
        </label>
        <textarea
          id="comments"
          placeholder="Add comments about your donation..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          style={{
            width: '100%',
            height: '80px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #004d4d',
            marginBottom: '20px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#008080',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#004d4d')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#008080')}
        >
          Donate
        </button>
      </form>
      <img
        src="https://i.pinimg.com/originals/09/8e/cd/098ecda756c1b7703db109a64cd7fc6d.jpg"
        alt="Donate"
        style={{
          width: '300px',
          borderRadius: '10px',
          marginTop: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
      <p
        className="dmsg"
        style={{
          marginTop: '20px',
          fontSize: '1rem',
          color: '#004d4d',
          fontStyle: 'italic',
        }}
      >
        We use donated items for creative upcycling
      </p>
      {message && (
        <p
          className="message"
          style={{
            marginTop: '20px',
            fontSize: '1rem',
            color: '#008080',
            fontWeight: 'bold',
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Donate;
