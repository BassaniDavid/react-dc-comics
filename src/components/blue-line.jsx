import buyDigital from '../assets/buy-comics-digital-comics.png'
import buyMerchandise from '../assets/buy-comics-merchandise.png'
import buySubscriptions from '../assets/buy-comics-subscriptions.png'
import buyLocator from '../assets/buy-comics-shop-locator.png'
import buyVisa from '../assets/buy-dc-power-visa.svg'




export default function BluLine() {
    return (
        <div className='blueline'>
            <div className='bluelink'>
                <img src={buyDigital} alt="" />
                <a href=" ">digital comics</a>
            </div>
            <div className='bluelink'>
                <img src={buyMerchandise} alt="" />
                <a href=" ">dc merchandise</a>
            </div>
            <div className='bluelink'>
                <img src={buySubscriptions} alt="" />
                <a href=" ">subscriptions</a>
            </div>
            <div className='bluelink'>
                <img src={buyLocator} alt="" />
                <a href=" ">comic shop locator</a>
            </div>
            <div className='bluelink'>
                <img src={buyVisa} alt="" />
                <a href=" ">dc power visa</a>
            </div>
        </div>
    );
}