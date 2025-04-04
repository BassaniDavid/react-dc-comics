import Logo from "./logo";


export default function Header(props) {
    // creo costante con i link importati
    const listlink = props.link.map(link => <li><a href=" ">{link}</a></li>)

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    {listlink}
                </ul>
            </nav>
        </header>
    );
}