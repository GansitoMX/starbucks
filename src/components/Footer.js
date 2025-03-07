import { Component } from "react";
import './Footer.css'
import { ImSpotify } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

class Footer extends Component {
    render() {
        return (
            <footer className="bg-white-footer">
                <nav className="footer-max">                    
                        <hr aria-hidden='true' className="separador"></hr>
                        <ul class="social-icons-flex">
                            <li className="sm-mr1">
                                <a aria-label="spotify" className="icon-button" href="https://open.spotify.com/user/starbucks" >
                                    <svg className="icon-sm"><ImSpotify /></svg>
                                </a>
                            </li>
                            <li className="sm-mr1">
                                <a aria-label="facebook" className="icon-button" href="https://facebook.com/starbucks" >
                                    <svg className="icon-sm"><FaFacebook /></svg>
                                </a>
                            </li>
                            <li className="sm-mr1">
                                <a aria-label="pinterest" className="icon-button" href="https://open.spotify.com/user/starbucks" >
                                    <svg className="icon-sm"><FaPinterest /></svg>
                                </a>
                            </li>
                            <li className="sm-mr1">
                                <a aria-label="instagram" className="icon-button" href="https://open.spotify.com/user/starbucks" >
                                    <svg className="icon-sm"><FaInstagram /></svg>
                                </a>
                            </li>
                            <li className="sm-mr1">
                                <a aria-label="youtube" className="icon-button" href="https://open.spotify.com/user/starbucks" >
                                    <svg className="icon-sm"><FaSquareYoutube /></svg>
                                </a>
                            </li>
                            <li className="sm-mr1">
                                <a aria-label="x" className="icon-button" href="https://open.spotify.com/user/starbucks" >
                                    <svg className="icon-sm"><RiTwitterXLine /></svg>
                                </a>
                            </li>
                        </ul>
                        <ul className="inline-block-links">
                            <li>
                                <a className="secondary-link" href="https://www.starbucks.com/terms/privacy-notice/">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="secondary-link" href="https://www.starbucks.com/terms/privacy-notice/">Consumer Health Privacy Notice</a>
                            </li>
                            <li>
                                <a className="secondary-link" href="https://www.starbucks.com/terms/privacy-notice/">Terms of Use</a>
                            </li>
                            <li>
                                <a className="secondary-link" href="https://www.starbucks.com/terms/privacy-notice/">Do Not Share My Personal Information</a>
                            </li>
                            <li>
                                <a className="secondary-link" href="https://www.starbucks.com/terms/privacy-notice/">CA Supply Chain Act</a>
                            </li>
                            <li>
                                <a className="secondary-link" href="https://www.starbucks.com/terms/privacy-notice/">Accessibility</a>
                            </li>
                            <li>
                                <a className="secondary-link" href="https://www.starbucks.com/terms/privacy-notice/">Cookie Preferences</a>
                            </li>
                        </ul>
                        <p className="color-soft-black" href="https://www.starbucks.com/terms/privacy-notice/">This page is for practice only, not make references to the original web page Starbucks Rewards</p>
                </nav>
            </footer>
        )


    }
}

export default Footer