import React from 'react'
import './plan.css'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Plan = () => {
    const navigate = useNavigate()
    const [withdrawMethods,setWithdrawalMethods] = useState([
      {
        id:1,
        min:'200',
        max:'5,000',
        image:'/btc.png',
        method:'BTC',
        type:'starter plan',
        percent:'20',
        duration:'2 day(s)'
      },
      {
        id:2,
        min:'6,000',
        max:'10,000',
        image:'/bnb.png',
        method:'USDT',
        type:'amatuer plan',
        percent:'40',
        duration:'4 day(s)'
      },
      {
        id:3,
        min:'11,000',
        max:'20,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'professional plan',
        percent:'60',
        duration:'6 day(s)'
      },
      {
        id:4,
        min:'21,000',
        max:'90,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'golden plan',
        percent:'80',
        duration:'8 day(s)'
      },
      {
        id:5,
        min:'100,000',
        max:'5,000,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'VIP plan',
        percent:'100',
        duration:'10 day(s)'
      },
      {
        id:6,
        min:'6,000,000',
        max:'10,000,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'premium plan',
        percent:'100',
        duration:'10 day(s)'
      },
      ])
  return (
          <div className='plan-section'>
              <div className="why-choose-us-text-container">
                  <div className="header" data-aos="fade-up">
                      <span className="header-line"></span>
                      <h2>our plans</h2>
                  </div>
                  <h1 data-aos="fade-up">choose an investment plan</h1>
                  <p data-aos="fade-up">choose an investment plan of your choice, but remember , the bigger the investment the bigger the return</p>
              </div>
              <div className="plan-card-container">
              {
            withdrawMethods.map((withdrawmethod) => (
              <div class="pack-container" key={withdrawmethod.id} data-aos="fade-up">
            <div class="pack-header">
              <h3>{withdrawmethod.type}</h3>
              <div class="price-container">
                {withdrawmethod.percent}
                <span>%</span>
              </div>
            </div>
            <div>
              <ul class="lists">
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    Instant withdrawal
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    {withdrawmethod.duration} duration
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                     referral commission - 10%
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    minimum deposit - ${withdrawmethod.min}
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    maximum deposit - ${withdrawmethod.max}
                  </p>
                </li>
              </ul>
            </div>
                <div class="buttons-container" onClick={navigate('/login')}>
                  <Link to='/login'>
                    <button type="button">
                    Invest Now
                    </button>
                  </Link>
            </div>
          </div>
          ))}
          </div>
        </div>
      )
    }

export default Plan