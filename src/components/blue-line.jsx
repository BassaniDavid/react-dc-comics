import buyDigital from '../assets/buy-comics-digital-comics.png'
import buyMerchandise from '../assets/buy-comics-merchandise.png'
import buySubscriptions from '../assets/buy-comics-subscriptions.png'
import buyLocator from '../assets/buy-comics-shop-locator.png'
import buyVisa from '../assets/buy-dc-power-visa.svg'




export default function BluLine() {
    return (
        <div>
            <div>
                <img src={buyDigital} alt="" />
                <p>digital comics</p>
            </div>
            <div>
                <img src={buyMerchandise} alt="" />
                <p>dc merchandise</p>
            </div>
            <div>
                <img src={buySubscriptions} alt="" />
                <p>subscriptions</p>
            </div>
            <div>
                <img src={buyLocator} alt="" />
                <p>comic shop locator</p>
            </div>
            <div>
                <img src={buyVisa} alt="" />
                <p>dc power visa</p>
            </div>
        </div>
    );
}