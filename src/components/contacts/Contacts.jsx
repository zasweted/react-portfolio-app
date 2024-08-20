import React from 'react';
import './contacts.css';
import { BsEnvelopeAt } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { HiOutlineDeviceMobile } from "react-icons/hi";




const Contacts = () => {
  return (
    <section id="contacts">
      <h5>
        Get In Touch
      </h5>
      <h2>
        Contact Me
      </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelopeAt className="contact__option-icon" />
            <h4>
              Email
            </h4>
            <h5>
              example@gmail.com
            </h5>
            <a href="mailto:example@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <HiOutlineDeviceMobile className="contact__option-icon" />
            <h4>
              Phone
            </h4>
            <h5>
              +370 6077 0000
            </h5>
            <a href="tel:+370607000000">Drop me a call</a>
          </article>
          <article className="contact__option">
            <RxDiscordLogo className="contact__option-icon" />
            <h4>
              Discord
            </h4>
            <h5>
              Zaswet#6735
            </h5>
            <a href="https://discord.com/channels/134624851846627329" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form action="">
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required ></textarea>
          <button className='btn btn-primary' type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts