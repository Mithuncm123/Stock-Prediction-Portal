import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    <Header />
    <div className='container'>
    <div className='p-5 text-center bg-light-dark rounded'>
<h1 className='text-light'>Stock Predication Portal</h1>
<p className='text-light lead'>Welcome to Stock Predication Portal, your smart companion for stock market insights.
Analyze real-time data and get predictive trends for informed decisions.
Our AI-driven models help you forecast stock movements with accuracy.
Track your favorite stocks and receive timely alerts and recommendations.
Invest smarter, minimize risks, and maximize your market potential with us.</p>
<Button class="btn btn-outline-info" text="Login"/>
</div>
</div>
<Footer />
    </>
  )
}

export default Main