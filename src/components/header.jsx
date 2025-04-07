import Logo from "./logo";
import imgJumbo from '../assets/jumbotron.jpg'


export default function Header(props) {
    // creo costante con i link importati
    const listlink = props.link.map((link, index) => <li key={index}><a href=" ">{link}</a></li>)

    return (
        <>
            <header>
                <Logo />
                <nav>
                    <ul>
                        {listlink}
                    </ul>
                </nav>
            </header>
            <img className='jumbotron' src={imgJumbo} alt="" />
        </>

    );
}