import { Component } from "react";
import './CashOrCard.css'

class CashOrCard extends Component {
    render() {
        return (
            <div className="cash-or-card1">
                <div className="bg-greenlight" id='ways-to-play'>
                    <div className="sb-content-column">
                        <div className="sb-content-columnInner">
                            <div className="text-centered-h2">
                                <h2 className="sb-heading">
                                    Cash or card, you earn Stars
                                </h2>
                                <p>
                                    No matter how you pay, you can earn
                                    Stars with your morning coffee.
                                    Those Stars add up to (really
                                    delicious) Rewards.
                                </p>
                            </div>
                            <div className="grid">
                                <div className="gridItem1">
                                    <p className="text-semibold">1
                                        <span aria-hidden="true"
                                            className="black-star">★</span>
                                        <span className="hiddenVisually">Star</span>
                                        <span>Per dollar</span>
                                    </p>
                                    <p>Pay as you go</p>
                                </div>
                                <div className="grid-image">
                                    <div className="flex-md">
                                        <div className="image-cellphone">
                                            <img className="sb-image"
                                                alt="cellphone"
                                                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png">
                                            </img>
                                        </div>
                                        <div className="card-content-textleft">
                                            <h3 className="sb-heading">
                                                Scan and pay separately
                                            </h3>
                                            <p className="pt3">Use cash or
                                                credit/debit card at the
                                                register.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-image">
                                    <div className="flex-md">
                                        <div className="image-cellphone">
                                            <img className="sb-image"
                                                alt="cellphone"
                                                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png">
                                            </img>
                                        </div>
                                        <div className="card-content-textleft">
                                            <h3 className="sb-heading">
                                                Scan and pay separately
                                            </h3>
                                            <p className="pt3">Check-out 
                                                faster by saving a credit/debit 
                                                card or PayPal to your account. 
                                                You’ll be able to order ahead or 
                                                scan and pay at the register in 
                                                one step.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CashOrCard