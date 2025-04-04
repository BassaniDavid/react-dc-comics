import Facebook from '../assets/footer-facebook.png'
import Periscope from '../assets/footer-periscope.png'
import Pinterest from '../assets/footer-pinterest.png'
import Twitter from '../assets/footer-twitter.png'
import Youtube from '../assets/footer-youtube.png'

export default function FollowUs() {
    return (
        <div className='followus'>
            <h4>follow us</h4>
            <a href=""><img src={Facebook} alt="" /></a>
            <a href=""><img src={Periscope} alt="" /></a>
            <a href=""><img src={Pinterest} alt="" /></a>
            <a href=""><img src={Twitter} alt="" /></a>
            <a href=""><img src={Youtube} alt="" /></a>
        </div>
    )
}