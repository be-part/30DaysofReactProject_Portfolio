import { useState, useEffect } from "react";
import Overlay from "./Overlay";

const Form = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    favColour: "",
    username: "",
    imageUrl: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    const urlTest =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    const letterTest = /[a-z]/gi;
    const numberTest = /[0-9]/g
    const whiteSpaceTest = /[\s]/gi;
    const hexadecimalTest = /\B#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\b/g

    if (!urlTest.test(inputValues.imageUrl))  {
      errors.imageUrl = "That is not a valid image url.";
    }
    if(!letterTest.test(inputValues.username) || !numberTest.test(inputValues.username) ||whiteSpaceTest.test(inputValues.username)) {
      errors.username = "You need at least one letter and one number and no white spaces."
    } 
    if(!hexadecimalTest.test(inputValues.favColour)) {
      errors.favColour = "Colour should be in the form of a hexadecimal code. Eg. #61DBFB";
    }
    return errors;
  };
  
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const handleBlur = () => {
    setErrors(validateValues(inputFields));
  };


  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      
    }
  }, [errors]);

  return (
    <div className="wrapper">
         <div className="header-btn-container">
        <h2>Form Validation</h2>

        <button className="overlay-open-btn" onClick={toggleOverlay}>
          More Info❔
        </button>
      </div>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h4 className="overlay-title">About: Form Validation</h4>
        <p className="overlay-info">
          This mini app was created as part of Day 12 of the challenge. The
          purpose of this challenge was to use controlled components to make a form, and use client-side form validation.
          </p>
          <p className="overlay-info">
          I thought carefully about user experience when creating this form; thinking about things like where the error messages should appear, how to make the error messages user-friendly and how to stop the submit button moving around when an error message popped up.
          </p>
          <p className="overlay-info">
          I think I would like to edit this mini app further so the error message only appears for the box you are typing in currently.
        </p>
      </Overlay>
      

      {Object.keys(errors).length === 0 && submitting ? (
    <div className="profile-card-wrapper">
      <p className="explanation">Successfully submitted ✓</p>
      <div className="profile-card" style={{borderColor: inputFields.favColour}}>
        <p><span className="bold" style={{color: inputFields.favColour}}>Name:</span> {inputFields.firstName} {inputFields.lastName}</p>
        <p><span className="bold" style={{color: inputFields.favColour}}>Username:</span> {inputFields.username}</p>
        <img className="profile-card-image" src={inputFields.imageUrl}></img>
      </div>
      </div>
    ) : <p className="explanation">Submit your details to get a personalised profile card:</p>}

      <form className="form" onSubmit={handleSubmit} >
        <div className="contact-form">
          <div>
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input type="text" id="firstName"  name="firstName" placeholder="First name" value={inputFields.firstName}
            onChange={handleChange} onBlur={handleBlur} style={{ border: errors.firstName ? "1px solid orange" : null }} required/>
            
          </div>

          <div>
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input type="text" id="lastName"  name="lastName" placeholder="Last name" value={inputFields.lastName}
            onChange={handleChange} onBlur={handleBlur} style={{ border: errors.lastName ? "1px solid orange" : null }} required/>
            
          </div>
          <br/>

          <div>
          <label htmlFor="favColour" className="form-label">
            Your favourite colour as a hexadecimal code:
          </label>
          <input type="text" id="favColour"  name="favColour"  placeholder="#61DBFB"  value={inputFields.favColour}
            onChange={handleChange}  onBlur={handleBlur} style={{ border: errors.favColour ? "1px solid orange" : null }}/>
          </div>
          {errors.favColour ? (
            <p className="error">
              Hint: Colour should be in the form of a hexadecimal code. Eg. #61DBFB
            </p>
          ) : <br/>}

          <div>
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input type="text" id="username"  name="username" placeholder="ExampleUser3" value={inputFields.username}
            onChange={handleChange}  onBlur={handleBlur} style={{ border: errors.username ? "1px solid orange" : null }}
            />
          </div>
          {errors.username ? (
            <p className="error">
              Hint: You need at least one letter and one number and no white spaces.
            </p>
          ) : <br/>}

          <div>
          <label htmlFor="imageUrl" className="form-label">
            Image Url:
          </label>
          <input type="text" id="imageUrl"  name="imageUrl" placeholder="https://..." value={inputFields.imageUrl}
            onChange={handleChange}  onBlur={handleBlur}style={{ border: errors.imageUrl ? "1px solid orange" : null }}
            />
          </div>
          {errors.imageUrl ? (
            <p className="error">
              Hint: Ensure you are using a valid image url.
            </p>
          ) : <br/>}
        

        <button type="submit" className="btn">Submit!</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
