import React from 'react'
import Landpage from '../components/Landpage/Landpage'
import Why from '../components/why/Why'
import Service from '../components/service/Service'
import Plan from '../components/plans/Plan'
import About from '../components/about/About'
import Feature from '../components/feature/Feature'
import Roadmap from '../components/roadmap/Roadmap'
import Faq from '../components/Faq/Faq'
import Review from '../components/review/Review'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Faqcard from './Faqcard'
import Copytrade from '../components/copytrade/Copytrade'
const Home = () => {
  return (
    <main className='home-img'>
        <Landpage />
        <Feature />
        <Faqcard />
        <About />
        <Why />
        <div className="crypto-chart-container realtimechart">
        <h1>Crypto Market</h1>
        <p>
          Buy & Sell Crypto in minutes. <br />
          Join our fast-growing crypto exchange for positive results!
        </p>
          <iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=15&pref_coin_id=1505&graph=yes" style={{width:"100%",height:"536px",scrolling:"none",marginWidth:"0",marginHeight:"0", frameBorder:"0", border:"0",lineHeight: '14px', backgroundColor:'white'}}></iframe>
      </div>
        <Copytrade />
        <Plan />
        <Service />
        <Roadmap />
        <div className="crypto-chart-container">
        <div className="price-chartt-section home-chart">
            <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" style={{width:"100%",height:"536px",scrolling:"none",marginWidth:"0",marginHeight:"0", frameBorder:"0", border:"0",lineHeight: '14px'}}></iframe>
        </div>
      </div>
        
        <Review />
        <Faq />
        <Contact />
        <Footer />
    </main>
  )
}

export default Home