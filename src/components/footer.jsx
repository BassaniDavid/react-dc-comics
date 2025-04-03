import BluLine from "./blue-line";
import LinkUtili from "./linkUtili";
import Button from "./button";
import FollowUs from "./follow-us";

export default function Footer() {
    return (
        <footer>
            <BluLine />
            <LinkUtili />
            <div className="bottom">
                <Button />
                <FollowUs />

            </div>

        </footer>
    );
}