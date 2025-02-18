import { Component } from "react";
import './Questions.css'
import { GoLinkExternal } from "react-icons/go";

class Questions extends Component {
    render() {
        return (
            <div className="q-section">
                <div className="sb-content-column">
                    <div className="content-column-inner">
                        <div className="offset">
                            <h2 className="sb-heading">Questions?</h2>
                            <p className="pb3">We want to help
                                in any way we can. You can ask
                                your barista anytime or we’ve
                                answered the most commonly
                                asked terms <a
                                    aria-label='right over here, opens in new window'
                                    className='external-links'
                                    href='https://customerservice.starbucks.com/sbux'
                                    target='_blank'
                                    rel='noopener noreferrer'><span className='text-link'> right over here</span>
                                    <svg className='icon-link'> <GoLinkExternal /> </svg>
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Questions