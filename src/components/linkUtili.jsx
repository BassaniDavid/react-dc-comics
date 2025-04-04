import DcLogobg from '../assets/dc-logo-bg.png'

export default function linkUtili(props) {
    // creo costante con i link importati
    const listlinktitol = props.footerLinkTitol.map(titol => <a href=" ">{titol}</a>)
    console.log(listlinktitol)

    // creo costanti con gli array dell array
    const listlink0 = props.footerLink[0].map(link => <li><a href=" ">{link}</a></li>)
    const listlink1 = props.footerLink[1].map(link => <li><a href=" ">{link}</a></li>)
    const listlink2 = props.footerLink[2].map(link => <li><a href=" ">{link}</a></li>)
    const listlink3 = props.footerLink[3].map(link => <li><a href=" ">{link}</a></li>)

    return (
        <div className="linkutili">
            <div className="flex">
                <div>
                    <ul>
                        <h3>{listlinktitol[0]}</h3>

                        {listlink0}
                    </ul>
                    <ul>
                        <h3>{listlinktitol[1]}</h3>

                        {listlink1}
                    </ul>
                </div>

                <ul>
                    <h3>{listlinktitol[2]}</h3>

                    {listlink2}
                </ul>
                <ul>
                    <h3>{listlinktitol[3]}</h3>

                    {listlink3}
                </ul>
            </div>
            <img src={DcLogobg} alt="" />
        </div>
    );
}