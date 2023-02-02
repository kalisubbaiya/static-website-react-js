import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <section id='contact'>
        <div className='contact'>
            <h3>Contact Us</h3>
            <div className='form2'>
                <div className='contact-me'>
                    <div className='ico'>
                        <i class="bi bi-geo-alt"></i>
                    </div>
                    <div className='click'>
                        <h2>Location:</h2>
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                    </div>
                </div>
                <div className='contact-me'>
                    <div className='ico'>
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className='click'>
                        <h2>Email:</h2>
                        <p>info@example.com</p>
                        <p>contact@example.com</p>
                    </div>
                </div>
                <div className='contact-me'>
                    <div className='ico'>
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className='click'>
                        <h2>Call:</h2>
                        <p>+1 5589 55488 51</p>
                        <p>+1 5589 22475 14</p>
                    </div>
                </div>
                <div className='formInp'>
                    <div className='inpFlex'>
                        <div className='inp1'>
                            <input type="text" placeholder='Your Name' required></input>
                        </div>
                        <div className='inp1'>
                            <input type="mail" placeholder='Your Email' required></input>
                        </div>
                    </div>
                    <div className='inp2'>
                        <input type="text" placeholder='Subject' required/>
                    </div>
                    <div className='inp2'>
                        <textarea name='message' placeholder='Message' rows="5" required></textarea>
                    </div>
                    <div className='inp2'>
                        <button type='submit'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact