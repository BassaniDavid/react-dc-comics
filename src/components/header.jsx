import dcLogo from '/dc-logo.png'


export default function Header() {
    return (
        <header>
            <img src={dcLogo} alt="dc-logo" />
            <nav>
                <ul>
                    <li><a href="http://">characters</a></li>
                    <li><a href="http://">comics</a></li>
                    <li><a href="http://">movies</a></li>
                    <li><a href="http://">tv</a></li>
                    <li><a href="http://">games</a></li>
                    <li><a href="http://">collectibles</a></li>
                    <li><a href="http://">videos</a></li>
                    <li><a href="http://">fans</a></li>
                    <li><a href="http://">news</a></li>
                    <li><a href="http://">shop</a></li>
                </ul>
            </nav>
        </header>
    );
}