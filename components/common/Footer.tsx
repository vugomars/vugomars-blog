import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer>
      <div className=" max-w-[1440px] mx-auto">
        <div className="grid grid-cols-3">
          <div>Logo</div>
          <div className="flex justify-center items-center">
            <SocialIcon
              url="https://www.youtube.com/@blockofvu"
              fgColor="gray"
              bgColor="transparent"
            />

            <SocialIcon
              url="https://t.me/dangquangvu"
              fgColor="gray"
              bgColor="transparent"
            />

            <SocialIcon
              url="https://twitter.com/vugomars"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.facebook.com/dangquangvu94/"
              fgColor="gray"
              bgColor="transparent"
            />
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
