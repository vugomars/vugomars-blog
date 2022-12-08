import { SocialIcon } from "react-social-icons";

function EmailMe() {
  return (
    <div className="fixed bottom-8 right-4 z-10 bg-gray-300 dark:bg-gray-900 rounded-full hover:scale-110 border-r-2 border-cyan-400 hover:border-none transition-all duration-400">
      <SocialIcon
        network="email"
        className="cursor-pointer"
        fgColor="gray"
        bgColor="transparent"
      />
    </div>
  );
}

export default EmailMe;
