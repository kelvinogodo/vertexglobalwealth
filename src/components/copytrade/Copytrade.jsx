import React from 'react'
import './copytrade.css'
const Copytrade = () => {
  return (
      <div className='about-section' id='about'>
        <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2 >we provide expert analysis for</h2>
            </div>
            <h1 data-aos="fade-up" className='copytrade-header'>copy trading</h1>
            <p data-aos="fade-up">
                At VertexGlobalWealth, we provide accurate forex analysis to help investors maximize profits through copy trading. Our expert insights, generated using technical and fundamental analysis, identify high-probability trades. We share real-time trade signals, market updates, and risk assessments directly through our Telegram channel, allowing investors to copy top-performing trades effortlessly.
            </p>
        </div>
        <div className="about-img-container">
            <img src="/mt2.jpg" data-aos="fade-up" className='forex-img '/>
        </div>
        </div>
    </div>
  )
}

export default Copytrade