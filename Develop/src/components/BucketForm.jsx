import { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  const [eagerness, setEagerness] = useState('');

  const eagernessLevel = ['Must do', 'Want to do', 'Take it or leave it'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      setEagerness('low');
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleEagernessChange = (level) => {
    setEagerness(level);
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level, index) => (
              <p key={index} onClick={() => handleEagernessChange(level)}>
                {level}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level, index) => (
              <p key={index} onClick={() => handleEagernessChange(level)}>
                {level}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
