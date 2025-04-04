

const navLink = [
    'characters',
    'comics',
    'movies',
    'tv',
    'games',
    'collectibles',
    'videos',
    'fans',
    'news',
    'shop'
]




export default function HeaderNav() {

    const listlink = navLink.map(link => <li><a href=" ">{link}</a></li>)

    return (
        <nav>
            <ul>
                {listlink}
            </ul>
        </nav>
    );
}

