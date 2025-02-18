import { Component } from 'react'
import './Keep.css'
import { GoLinkExternal } from "react-icons/go";

class Keep extends Component {
    render(){
        return (
            <div className='bg-green-image'>
                <div className='outer-box'>
                    <div className='inner-box'>
                        <div className='content-column'>
                            <div className='sb-content-column-inner'>
                                <div>
                                    <div className='text-center'>
                                        <h2 className='sb-heading-h2'>Keep the Rewards Coming</h2>
                                        <p className='text-center-p3'>The Rewards don't stop 
                                            at your morning coffee. Join Starbucks® Rewards 
                                            and unlock perks from our partners, all while 
                                            earning more Stars.
                                            </p>
                                    </div>
                                    <ul className='program-container'>
                                        <li className='content-container'>
                                            <div className='image-container-center'>
                                                <img className='imageContainer' src='images\delta-skymiles.png' alt='Delta Skymiles' />
                                            </div>
                                            <p className='p-under-image'>
                                                <a 
                                                aria-label='Link your Delta SkyMiles®, opens in new window' 
                                                className='external-links' 
                                                href='https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042' 
                                                target='_blank'
                                                rel='noopener noreferrer'><span className='text-link'>Link your Delta SkyMiles®</span>
                                                <svg className='icon-link'><GoLinkExternal/></svg>
                                                </a>
                                                and Starbucks® Rewards accounts to earn 
                                                miles on Starbucks Card reloads of $25 
                                                or more, plus Double Stars on travel days.
                                                <a 
                                                aria-labelledby='disclaimerTitleId' 
                                                className='text-noUnderLine' 
                                                href='https://www.starbucks.com/rewards#deltaSkymilesTermsDescriptionId'>
                                                    <sup>1</sup>
                                                </a>
                                            </p>                                            
                                        </li>
                                        <li className='content-container'>
                                            <div className='image-container-center'>
                                                <img className='imageContainer' src='\images\bank-of-america.png' alt='Delta Skymiles' />
                                            </div>
                                            <p className='p-under-image'>
                                                <a 
                                                aria-label='Link your Delta SkyMiles®, opens in new window' 
                                                className='external-links' 
                                                href='https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042' 
                                                target='_blank'
                                                rel='noopener noreferrer'><span className='text-link'>Link your Delta SkyMiles®</span>
                                                <svg className='icon-link'><GoLinkExternal/></svg>
                                                </a>
                                                and Starbucks® Rewards accounts to earn 
                                                miles on Starbucks Card reloads of $25 
                                                or more, plus Double Stars on travel days.
                                                <a 
                                                aria-labelledby='disclaimerTitleId' 
                                                className='text-noUnderLine' 
                                                href='https://www.starbucks.com/rewards#deltaSkymilesTermsDescriptionId'>
                                                    <sup>1</sup>
                                                </a>
                                            </p>                                           
                                        </li>
                                        <li className='content-container'>
                                            <div className='image-container-center'>
                                                <img className='imageContainer' src='\images\marriott-logo.png' alt='Delta Skymiles' />
                                            </div>
                                            <p className='p-under-image'>
                                                <a 
                                                aria-label='Link your Delta SkyMiles®, opens in new window' 
                                                className='external-links' 
                                                href='https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042' 
                                                target='_blank'
                                                rel='noopener noreferrer'><span className='text-link'>Link your Delta SkyMiles®</span>
                                                <svg className='icon-link'><GoLinkExternal/></svg>
                                                </a>
                                                and Starbucks® Rewards accounts to earn 
                                                miles on Starbucks Card reloads of $25 
                                                or more, plus Double Stars on travel days.
                                                <a 
                                                aria-labelledby='disclaimerTitleId' 
                                                className='text-noUnderLine' 
                                                href='https://www.starbucks.com/rewards#deltaSkymilesTermsDescriptionId'>
                                                    <sup>1</sup>
                                                </a>
                                            </p>                                            
                                        </li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Keep