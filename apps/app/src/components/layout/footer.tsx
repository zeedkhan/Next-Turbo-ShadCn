import Link from "next/link";
import { FaTiktok, FaLine, FaFacebook } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import { Separator } from "@turbocharger/ui";
import { cn } from "@turbocharger/utils";

const Footer = () => {
  return (
    <footer className="mt-16 h-fit  bg-[#f1f6fa] dark:bg-[#1b1c23]">
      <Separator className="dark:bg-white" />

      <div className="flex h-full w-full md:flex-col">
        <div className="mt-16 flex flex-col justify-between space-x-4 px-16 md:flex-row md:px-40">
          <div>
            <Link href={"/"}>
              <div className="relative  flex items-center space-x-4">
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Automobile.png"
                  alt="Automobile"
                  className="h-48 w-48 pb-8"
                />
                <p
                  className={cn(
                    "font-display pt-2 text-center text-2xl font-bold  text-transparent [text-wrap:balance]",
                    "bg-gradient-to-br from-black to-blue-500 bg-clip-text",
                    "dark:bg-gradient-to-br dark:from-white dark:to-blue-500 dark:bg-clip-text "
                  )}
                >
                  Kim Khan Auto Car
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-2 pb-2">
            <h4 className="pb-2 text-2xl font-bold">Social Media</h4>

            <a href="#" className="flex items-center">
              <div className="pr-4">
                <FaTiktok size={30} />
              </div>
              <span className="w-48">Kim Khaasd n Patan</span>
            </a>

            <a href="#" className="flex items-center">
              <div className="pr-4">
                <FaLine size={30} className="text-green-600" />
              </div>
              <span className="w-48">Kim Khanasd Patan</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100068227105501"
              className="flex items-center"
            >
              <div className="pr-4">
                <FaFacebook size={30} className="text-blue-700" />
              </div>

              <span className="w-48">Kim Khan Patan</span>
            </a>

            <a href="tel:+66946349500" className="flex items-center">
              <div className="pr-4">
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Telephone%20Receiver.png"
                  alt="โทรติดต่อเรา"
                  width="30"
                  height="30"
                  className="cursor-pointer"
                />
              </div>
              <span className="w-48">+66 946349500</span>
            </a>
          </div>

          <div className="flex flex-col space-y-2 pb-2">
            <div className="flex flex-row items-center space-x-4">
              <HiOutlineMapPin size={30} className="text-pink-600" />
              <h4 className="text-xl font-bold">ติดต่อเรา</h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63742.21304779164!2d101.6434534540982!3d3.124225693896346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3afdd17c8a9056!2sPetronas%20Twin%20Towers!5e0!3m2!1sen!2smy!4v1713683803780!5m2!1sen!2smy"
              className="h-48 w-80"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="px-16 md:px-40">
        <Separator className="bg-gray-300 dark:bg-white" />
      </div>

      <div className="flex h-full items-center justify-center py-4">
        <p
          className={cn(
            "font-display text-center font-bold text-transparent [text-wrap:balance]",
            "bg-gradient-to-br from-black to-blue-500 bg-clip-text",
            "dark:bg-gradient-to-br dark:from-white dark:to-blue-500 dark:bg-clip-text "
          )}
        >
          © Copyright powered by Kim Khan Auto Car
        </p>
      </div>
    </footer>
  );
};

export default Footer;
