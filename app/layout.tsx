import { Footer, Header, MobileNavbar } from "@components/common";
import Providers from "@context/Providers";
import { PropsWithChildren } from "react";
import "@styles/globals.css";
import EmailMe from "@components/common/EmailMe";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="transition-all duration-700 bg-gray-100 dark:bg-gray-800 ">
        <Providers>
          <Header />
          <div className="fit max-w-[1440px] mx-auto px-2 lg:px-0">
            {children}
          </div>
          <MobileNavbar />
          <EmailMe />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
