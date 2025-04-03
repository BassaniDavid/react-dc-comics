import dcLogo from '/dc-logo.png'


export default function Header() {
    return (
        <header>
            <img src={dcLogo} alt="dc-logo" />
            <nav>
                <ul>
                    <li>characters</li>
                    <li>comics</li>
                    <li>movies</li>
                    <li>tv</li>
                    <li>games</li>
                    <li>collectibles</li>
                    <li>videos</li>
                    <li>fans</li>
                    <li>news</li>
                    <li>shop</li>
                </ul>
            </nav>
        </header>
    );
}