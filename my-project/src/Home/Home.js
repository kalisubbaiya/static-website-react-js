import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <section id='home'>
        <div className='home'>
            <h1>WeMound</h1>
            <p>We're working hard to improve our website and we'll ready to launch afte</p>
            <div className='soon'>
                <div className='col'>
                    <div>
                        <h3>306</h3>
                        <h4>Days</h4>
                    </div>
                </div>
                <div className='col'>
                    <div>
                        <h3>18</h3>
                        <h4>Hours</h4>
                    </div>         
                </div>
                <div className='col'>
                    <div>
                        <h3>30</h3>
                        <h4>Mins</h4>
                    </div>
                </div>
            </div>
            <h5>Subscribe now to get the latest updates!</h5>
            <form>
                <input type="text"></input>
                <button>Subscribe</button>                
            </form>
            <div className='socialLinks'>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-linkedin"></i>
            </div>
        </div>
    </section>
  )
}

export default Home