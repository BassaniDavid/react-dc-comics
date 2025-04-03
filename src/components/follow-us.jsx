import Facebook from '../assets/footer-facebook.png'
import Periscope from '../assets/footer-periscope.png'
import Pinterest from '../assets/footer-pinterest.png'
import Twitter from '../assets/footer-twitter.png'
import Youtube from '../assets/footer-youtube.png'

export default function FollowUs() {
    return (
        <div>
            <h4>follow us</h4>
            <img src={Facebook} alt="" />
            <img src={Periscope} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Twitter} alt="" />
            <img src={Youtube} alt="" />
        </div>
    )
}