import React, { useState } from 'react'
import './styling/contact.css'
import linkedin from '../assets/linkedin3.gif'
import github from '../assets/github.gif'

import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_umya76v';
    const templateId = 'template_5chefx8';
    const publicKey = 'j0fvX_rtB1ajB76Pa';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Afika Shwashwa',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setProject('');
        setMessage('');
      }).catch((error) => {
        console.error('Error! Could not sent email: ', error);
      });
  };



  // -----------Adding reCAPTCHA------------

    const [verified, setVerified]=useState(false)
    function onChange(value) {
      console.log("Captcha value:", value);
      setVerified(true)
    }

  return (

    
    <div className='contact' id='contact'>
      <div id="line"><p className="line"></p></div>
      <div className='contact-title'>
        <h1 className="text-wrapper">Contact <span className="text-wrapper-2">Me</span></h1>
      </div>

      <div className="contact-content">

        <div className="contact-det">

          <div className="contact-container">
            <div className="det-div">
              <p><      
              
              
              
              
                svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 98 99" fill="none">
                <g clip-path="url(#clip0_421_46)">
                  <path d="M81.6667 68.6426C81.6667 68.1699 81.6241 67.8262 81.5391 67.6113C81.454 67.3965 81.0712 
                67.042 80.3906 66.5479C79.7101 66.0537 78.8487 65.5166 77.8066 64.9365C76.7645 64.3564 75.7543 63.7871 
                74.776 63.2285C73.7977 62.6699 72.8301 62.1328 71.873 61.6172C70.916 61.1016 70.3099 60.7793 70.0547 
                60.6504C69.842 60.5215 69.4379 60.2422 68.8425 59.8125C68.247 59.3828 67.7153 59.0605 67.2474 
                58.8457C66.7795 58.6309 66.3329 58.5234 65.9076 58.5234C65.2695 58.5234 64.4933 58.9639 63.5788 
                59.8447C62.6643 60.7256 61.8242 61.6924 61.0586 62.7451C60.293 63.7979 59.4742 64.7646 58.6022 65.6455C57.7303 
                66.5264 57.0178 66.9668 56.4648 66.9668C56.1671 66.9668 55.8162 66.8916 55.4121 66.7412C55.008 66.5908 54.6784 
                66.4512 54.4232 66.3223C54.168 66.1934 53.8064 65.9893 53.3385 65.71C52.8707 65.4307 52.5729 65.248 52.4453 
                65.1621C48.2344 62.7988 44.6189 60.0811 41.599 57.0088C38.579 53.9365 35.878 50.2734 33.4961 46.0195C33.411 
                45.8906 33.2303 45.5898 32.9538 45.1172C32.6773 44.6445 32.4753 44.2793 32.3477 44.0215C32.2201 43.7637 32.0818 
                43.4307 31.9329 43.0225C31.7841 42.6143 31.7096 42.2598 31.7096 41.959C31.7096 41.4004 32.1456 40.6807 33.0176 
                39.7998C33.8895 38.9189 34.8466 38.0918 35.8887 37.3184C36.9308 36.5449 37.8878 35.6963 38.7598 34.7725C39.6317 
                33.8486 40.0677 33.0645 40.0677 32.4199C40.0677 31.9902 39.9614 31.5391 39.7487 31.0664C39.536 30.5937 39.217 
                30.0566 38.7917 29.4551C38.3663 28.8535 38.0898 28.4453 37.9622 28.2305C37.8346 27.9727 37.5156 27.3604 37.0052 
                26.3936C36.4948 25.4268 35.9631 24.4492 35.4102 23.4609C34.8572 22.4727 34.2936 21.4521 33.7194 20.3994C33.1452 
                19.3467 32.6135 18.4766 32.1244 17.7891C31.6352 17.1016 31.2843 16.7148 31.0716 16.6289C30.8589 16.543 30.5187 
                16.5 30.0508 16.5C28.0091 16.5 25.8611 16.9727 23.6068 17.918C21.6502 18.8203 19.9488 20.8506 18.5026 
                24.0088C17.0564 27.167 16.3333 29.9707 16.3333 32.4199C16.3333 33.1074 16.3865 33.8379 16.4928 34.6113C16.5992 
                35.3848 16.7055 36.04 16.8118 36.5771C16.9182 37.1143 17.1096 37.8232 17.3861 38.7041C17.6625 39.585 17.8752 
                40.2188 18.0241 40.6055C18.173 40.9922 18.4388 41.7012 18.8216 42.7324C19.2044 43.7637 19.4384 44.4082 19.5234 
                44.666C22.0755 51.7129 26.6799 58.5986 33.3366 65.3232C39.9933 72.0479 46.8095 76.6992 53.7852 79.2773C54.0404 
                79.3633 54.6784 79.5996 55.6992 79.9863C56.7201 80.373 57.4219 80.6416 57.8047 80.792C58.1875 80.9424 58.8149 
                81.1572 59.6869 81.4365C60.5588 81.7158 61.2606 81.9092 61.7923 82.0166C62.324 82.124 62.9727 82.2314 63.7383 
                82.3389C64.5039 82.4463 65.227 82.5 65.9076 82.5C68.332 82.5 71.1074 81.7695 74.2337 80.3086C77.36 78.8477 79.3698
                 77.1289 80.263 75.1523C81.1988 72.875 81.6667 70.7051 81.6667 68.6426ZM98 18.5625V80.4375C98 85.5508 96.2029 
                 89.9229 92.6087 93.5537C89.0145 97.1846 84.6866 99 79.625 99H18.375C13.3134 99 8.98546 97.1846 5.39128 
                 93.5537C1.79709 89.9229 0 85.5508 0 80.4375V18.5625C0 13.4492 1.79709 9.07715 5.39128 5.44629C8.98546 1.81543 
                 13.3134 0 18.375 0H79.625C84.6866 0 89.0145 1.81543 92.6087 5.44629C96.2029 9.07715 98 13.4492 98 18.5625Z"
                    fill="#D79E48" />
                </g>
                <defs>
                  <clipPath id="clip0_421_46">
                    <rect width="98" height="99" fill="white" />
                  </clipPath>
                </defs>
              </svg>
                <span>+27662398354</span></p>

              <p ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 31 31" fill="none">
                <path d="M15.3333 0.546631L9.67825 4.20366H4.83325V7.30283L1.78825 9.3018C0.918252 9.84415 0.333252 10.8204 
              0.333252 11.9516V27.4475C0.333252 28.2694 0.649322 29.0577 1.21193 29.6389C1.77454 30.2201 2.5376 30.5466 3.33325 
              30.5466H27.3333C28.9983 30.5466 30.3333 29.1675 30.3333 27.4475V11.9516C30.3333 10.8204 29.7483 9.84415 28.8783 9.3018L25.8333 
              7.30283V4.20366H20.9883M7.83325 7.30283H22.8333V14.8648L15.3333 19.6995L7.83325 14.8648M9.33325 8.85242V11.1768H21.3333V8.85242M4.83325 
              10.9908V12.9278L3.33325 11.9516M25.8333 10.9908L27.3333 11.9516L25.8333 12.9278M9.33325 12.7264V15.0508H21.3333V12.7264H9.33325Z" fill="#D79E48" />
              </svg>
                <span>Afikashwashwa@gmail.com</span></p>
              <p >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 151 138" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M121.544 97.0578C123.36 96.3091 125.446 96.1356 127.406 96.5701C129.367
               97.0046 131.066 98.017 132.182 99.4153L132.663 100.112L149.246 127.446C149.838 128.42 150.138 129.498 150.122 130.587C150.105 
               131.677 149.773 132.748 149.152 133.71C148.531 134.673 147.64 135.499 146.553 136.12C145.466 136.74 144.214 137.138 142.903 
               137.279L141.833 137.333H9.16665C7.84388 137.334 6.54021 137.073 5.36448 136.574C4.18876 136.074 3.17512 135.35 2.40819 
               134.462C1.64127 133.574 1.14332 132.547 0.955937 131.468C0.76855 130.389 0.897161 129.289 1.33103 128.259L1.74561 127.439L18.3289
                100.105C19.2584 98.5221 20.8929 97.2951 22.8923 96.6798C24.8917 96.0645 27.102 96.1083 29.0632 96.802C31.0245 97.4957 32.5856 
                98.7859 33.4218 100.404C34.258 102.022 34.3048 103.844 33.5524 105.49L33.1627 106.221L22.5826 123.667H128.417L117.837 106.221C116.855 
                104.601 116.694 102.726 117.389 101.007C118.084 99.2891 119.578 97.8685 121.544 97.0578ZM75.5 0.666748C90.8936 0.666748 105.657 
                5.70632 116.542 14.6768C127.427 23.6473 133.542 35.8139 133.542 48.5001C133.542 64.7771 122.854 77.9996 111.793 87.3817C105.682 
                92.496 98.9658 97.0927 91.7434 101.103L88.6506 102.784L85.8977 104.212C85.4666 104.424 85.052 104.622 84.6623 104.827L82.5313 
                105.839C78.1533 107.889 72.8467 107.889 68.4687 105.839L66.3377 104.82L63.7673 103.529C63.2929 103.283 62.8202 103.035 62.3494 
                102.784L59.2566 101.103C52.0341 97.0928 45.3175 92.496 39.2074 87.3817C28.1463 77.9996 17.4583 64.7771 17.4583 48.5001C17.4583 
                35.8139 23.5734 23.6473 34.4583 14.6768C45.3433 5.70632 60.1064 0.666748 75.5 0.666748ZM75.5 34.8334C71.1018 34.8334 66.8838 
                36.2733 63.7738 38.8363C60.6638 41.3993 58.9167 44.8755 58.9167 48.5001C58.9167 52.1247 60.6638 55.6009 63.7738 58.1639C66.8838 
                60.7269 71.1018 62.1667 75.5 62.1667C79.8982 62.1667 84.1162 60.7269 87.2262 58.1639C90.3362 55.6009 92.0833 52.1247 92.0833 
                48.5001C92.0833 44.8755 90.3362 41.3993 87.2262 38.8363C84.1162 36.2733 79.8982 34.8334 75.5 34.8334Z" fill="#D79E48" />
                </svg>
                <span>Cape Town, South Africa</span></p>
            </div>

            <div className="icons">
              <a href='https://github.com/Afika-1'><img className="github" alt="Github link" src={github} /></a>
              <a href='https://www.linkedin.com/in/afika-shwashwa-a05a3220a'><img className="lIn-logo" alt="Linkedin link" src={linkedin} /></a>
            </div>

          </div>
        </div>

        <form id='myForm' onSubmit={handleSubmit}>
          <input className="form-input" type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required name='name' placeholder='Full Name' />
          <input className="form-input" type='email' id='myEmail' value={email} onChange={(e) => setEmail(e.target.value)} required name='email' placeholder='Email Address' />
          <input className="form-input" type='text' id='project' value={project} onChange={(e) => setProject(e.target.value)} required name='project' placeholder='Project' />
          <textarea className="form-message" type='text' id='message' value={message} onChange={(e) => setMessage(e.target.value)} required name='message' placeholder='Type your message here' />
          <div>

          <ReCAPTCHA sitekey="6LcLfBgoAAAAAEJy5-jU1w4WQlNLreri-TzfQtl5" onChange={onChange}/>

            <button className="send-button" type="submit" disabled={!verified} >Send</button>
          </div>
        </form>

      </div>
      <div className="icons-bottom">

        <a href='https://github.com/Afika-1'><img className="github" alt="Github link" src={github} /></a>
        <a href='https://www.linkedin.com/in/afika-shwashwa-a05a3220a'><img className="lIn-logo" alt="Linkedin link" src={linkedin} /></a>


      </div>

    </div>

  )






}
