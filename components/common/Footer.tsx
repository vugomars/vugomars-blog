import { SocialIcon } from "react-social-icons";
import FooterIcon from "./FooterIcon";
import SwitchLogo from "./SwitchLogo";

function Footer() {
  return (
    <footer>
      <div className="max-w-[1440px] mx-auto">
        <div className="hidden lg:grid grid-cols-3">
          <div>
            <SwitchLogo />
          </div>
          <FooterIcon />
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
