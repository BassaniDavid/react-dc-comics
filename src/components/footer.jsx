import BluLine from "./blue-line";
import LinkUtili from "./linkUtili";
import Button from "./button";
import FollowUs from "./follow-us";



export default function Footer({ footerLinkTitol, footerLink }) {
    return (
        <footer>
            <BluLine />
            <LinkUtili footerLinkTitol={footerLinkTitol} footerLink={footerLink} />
            <div className="bottom">
                <Button />
                <FollowUs />

            </div>

        </footer>
    );
}