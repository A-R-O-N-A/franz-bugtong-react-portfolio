import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();


  // Detect dark mode from the document body class
  const isDarkMode = document.body.classList.contains('dark-mode');

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
          // className='contact-form'
          >

            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputProps={{
                  style: {
                    color: isDarkMode ? 'white' : 'black',
                    backgroundColor: isDarkMode ? '#222' : 'white'
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: isDarkMode ? 'white' : 'black'
                  }
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputProps={{
                  style: {
                    color: isDarkMode ? 'white' : 'black',
                    backgroundColor: isDarkMode ? '#222' : 'white'
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: isDarkMode ? 'white' : 'black'
                  }
                }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputProps={{
                style: {
                  color: isDarkMode ? 'white' : 'black',
                  backgroundColor: isDarkMode ? '#222' : 'white'
                }
              }}
              InputLabelProps={{
                style: {
                  color: isDarkMode ? 'white' : 'black'
                }
              }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon style={{ color: 'white' }} />}
              style={{ color: 'white', backgroundColor: '#5000ca' }} // adjust bg as needed
            >
              Send
            </Button>
          </Box>


        </div>
      </div>
    </div>
  );
}

export default Contact;