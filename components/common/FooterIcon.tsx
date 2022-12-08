import { SocialIcon } from "react-social-icons";
interface IFooterIconProps {}

const FooterIcon = (props: IFooterIconProps) => {
  return (
    <div>
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
    </div>
  );
};

export default FooterIcon;
