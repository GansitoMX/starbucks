import { useState } from 'react';
import './LearnMoreSection.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoX } from "react-icons/go";

const LearnMoreSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCard, setActiveCard] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            title: "Fun freebies",
            description: "Earn free food, drinks, and more. Plus, enjoy a birthday treat on us!",
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg",
            carousel: [
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/1A.jpg", title: "Exclusive Rewards", text: "Enjoy special offers and limited-time promotions." },
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/1B.jpg", title: "Birthday Treat", text: "Celebrate your special day with a free drink or snack!" },
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/1C.jpg", title: "Personalized Offers", text: "Get deals tailored to your favorite items." }
            ]
        },
        {
            title: "Order & pay ahead",
            description: "Order ahead and pick up your favorite items without waiting.",
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg",
            carousel: [
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/2A.jpg", title: "Skip the Line", text: "Order ahead and avoid long waits at checkout." },
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/2B.jpg", title: "Easy Payment", text: "Securely pay with your app and collect Stars!" }
            ]
        },
        {
            title: "Get to free faster",
            description: "Earn Stars quicker with Bonus Star challenges and Double Star Days.",
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg",
            carousel: [
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/3A.jpg", title: "Double Star Days", text: "Earn twice the Stars on select days." },
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/3B.jpg", title: "Bonus Challenges", text: "Complete challenges for extra Stars!" },
                { img: "https://www.starbucks.com/weblx/images/rewards/benefits/3C.jpg", title: "Exclusive Promotions", text: "Unlock rewards faster with limited-time offers." }
            ]
        }
    ];

    const openModal = (index) => {
        setActiveCard(index);
        setCurrentSlide(0);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % cards[activeCard].carousel.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + cards[activeCard].carousel.length) % cards[activeCard].carousel.length);
    };

    return (
        <div className="learn-more-global">
            <div className="content-columnInner">
                <div className="text-centered">
                    <h2 className="heading-text-semibold">Endless Extras</h2>
                    <p className="text-centered-p">
                        Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
                    </p>
                </div>
                <div className="multiThumbnailsRow">
                    {cards.map((card, index) => (
                        <div key={index} className="flex-column">
                            <div className="image-cursor-pointer" onClick={() => openModal(index)}>
                                <img className="card-image" src={card.img} alt="presentation" role="presentation" />
                            </div>
                            <div className="card-content-text">
                                <h3 className="heading-text-semibold">{card.title}</h3>
                                <p className="text-centered-p">{card.description}</p>
                                <button className="text-link" onClick={() => openModal(index)}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}><GoX /></button>
                        <img className="modal-image" src={cards[activeCard].carousel[currentSlide].img} alt="carousel" />
                        <h3 className="modal-title">{cards[activeCard].carousel[currentSlide].title}</h3>
                        <p className="modal-description">{cards[activeCard].carousel[currentSlide].text}</p>
                        <div className="modal-controls">
                            <button className="arrow" onClick={prevSlide}><SlArrowLeft /></button>
                            <div className="dots">
                                {cards[activeCard].carousel.map((_, index) => (
                                    <span key={index} className={`dot ${index === currentSlide ? "active" : ""}`} />
                                ))}
                            </div>
                            <button className="arrow" onClick={nextSlide}><SlArrowRight /></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LearnMoreSection;

