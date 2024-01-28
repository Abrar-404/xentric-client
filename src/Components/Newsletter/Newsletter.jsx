import { useState, useRef } from 'react';
import '../../Components/Styles/newsform.css';
import '../../Components/Styles/socials.css';
import { FaLongArrowAltDown } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vr7e1xj',
        'template_zpyioxg',
        form.current,
        'QtXOYgGb2gzk-cpQc'
      )
      .then(
        result => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Message Sent Successfully',
            showConfirmButton: false,
            background: '#2B3445',
            timer: 1500,
          });
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    // Reset the input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact">
      <div>
        <h1 className="text-white text-center md:text-4xl text-3xl lg:text-6xl mt-96 font-bold mb-32">
          Contact Us
        </h1>
      </div>
      <div className="flex items-center md:flex-col lg:flex-row flex-col justify-center gap-20">
        <div>
          <h1 className="text-2xl text-white font-medium text-center mb-5">
            Hover
          </h1>
          <div className="carded">
            <div className="background"></div>
            <div className="logoed">Socials</div>

            <a href="https://www.instagram.com/portgaz.d.sahil/">
              <div className="boxes boxes1">
                <span className="iconic">
                  <svg
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                  </svg>
                </span>
              </div>
            </a>

            <a href="https://twitter.com/SahilAbrar101">
              <div className="boxes boxes2">
                {' '}
                <span className="iconic">
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </span>
              </div>
            </a>

            <a href="https://discord.com/channels/@me/1146852673426038854">
              <div className="boxes boxes3">
                <span className="iconic">
                  <svg
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                  </svg>
                </span>
              </div>
            </a>

            <div className="boxes boxes4"></div>
          </div>
        </div>
        <div>
          <div className="formush-container">
            <form className="formush" ref={form} onSubmit={sendEmail}>
              <div className="formush-group">
                <label
                  htmlFor="name"
                  className="text-white font-kalam font-bold"
                >
                  Name
                </label>
                <input
                  required=""
                  name="from_name"
                  className="text-white font-kalam font-bold"
                  id="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="formush-group">
                <label htmlFor="email">Email</label>
                <input
                  required=""
                  name="user_email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="formush-group">
                <label htmlFor="textarea">Message</label>
                <textarea
                  required=""
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="user_message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              <input
                type="submit"
                className="formush-submit-btn"
                name=""
                id=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
