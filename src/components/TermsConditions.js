import { Component } from "react";
import './TermsConditions.css'
import { GoLinkExternal } from "react-icons/go";

class TermsConditions extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="content-column">
                    <div className="sb-content-column-inner">
                        <div className="py-text">
                            <div className="text-xs">
                                <p className="pb2">At participating stores. Restrictions apply.</p>
                                    <p className="p1">
                                        <sup>1</sup>
                                        Excludes taxes and gratuities.
                                        At participating stores. Some
                                        restrictions apply. Flights
                                        purchased close to departure
                                        may not earn double Stars. Stars
                                        and miles may not be earned on
                                        purchases of alcohol, Starbucks
                                        Cards and Starbucks Card reloads.
                                        For details, visit
                                        <a
                                        aria-label='deltastarbucks.com/terms, opens in new window'
                                        className='external-links'
                                        href='https://www.deltastarbucks.com/content/starbucks/en/terms-and-conditions.html'
                                        target='_blank'
                                        rel='noopener noreferrer'><span className='text-link'>deltastarbucks.com/terms</span>
                                        <svg className='icon-link'><GoLinkExternal /></svg>
                                        </a>.
                                    </p>
                                    <p className="p1">
                                        <sup>2</sup>
                                        At participating stores only. 
                                        Some restrictions apply. Linked 
                                        Card members will earn 2% Cash Back 
                                        on the full purchase price of every 
                                        Qualifying Purchase. Extra Star offer 
                                        excludes taxes and tips. Stars may not 
                                        be earned on purchases of alcohol or 
                                        on reloads of Starbucks Cards that are 
                                        not registered. For details, visit 
                                        <a
                                        aria-label='deltastarbucks.com/terms, opens in new window'
                                        className='external-links'
                                        href='https://promotions.bankofamerica.com/starbucks#disclosure-1223753557'
                                        target='_blank'
                                        rel='noopener noreferrer'><span className='text-link'>Terms and Conditions</span>
                                        <svg className='icon-link'><GoLinkExternal /></svg>
                                        </a>. Bank of America, N.A. Member FDIC.
                                    </p>
                                    <p className="p1">
                                        <sup>3</sup>
                                        Individuals must link loyalty program 
                                        accounts to participate in offer. 
                                        Members with linked accounts will earn: 
                                        (a) double Starbucks Rewards Stars on 
                                        Qualifying Starbucks Transactions during 
                                        Eligible Stays at Participating Marriott 
                                        Bonvoy Hotels, excluding stays at Homes & 
                                        Villas by Marriott Bonvoy and The Ritz-Carlton 
                                        Yacht Collection, and (b) earn 100 Marriott Bonvoy 
                                        Points upon completion of 3 Qualifying Starbucks 
                                        Transactions during Marriott Bonvoy Week. Qualifying 
                                        Starbucks Transactions must be made at U.S. participating 
                                        Starbucks stores and exclude purchases of alcoholic beverages, 
                                        Starbucks Card eGifts and physical Starbucks gift. To earn 
                                        Double Stars, the applicable stay must qualify as an 
                                        Eligible Stay at a Participating Marriott Bonvoy® 
                                        Hotel under offer terms and conditions. Other restrictions 
                                        and exclusions apply. For full offer terms and conditions, visit  
                                        <a
                                        aria-label='Starbucks.com/MarriottBonvoy, opens in new window'
                                        className='external-links'
                                        href='https://www.starbucks.com/rewards/partnerships/marriottbonvoy#disclaimerTitleId'
                                        target='_blank'
                                        rel='noopener noreferrer'><span className='text-link'>Starbucks.com/MarriottBonvoy</span>
                                        <svg className='icon-link'><GoLinkExternal /></svg>
                                        </a>
                                        . Marriott Bonvoy® and its affiliated brands 
                                        and hotels are the registered trademarks 
                                        and/or service marks of Marriott International, 
                                        Inc. and its affiliates. Used under license 
                                        from Marriott International, Inc.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TermsConditions