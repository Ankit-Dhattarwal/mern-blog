import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import logo from "../assets/Coder_Logo.png";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white text-black"
            >
              <img
                className="sm:w-40 w-30 sm:h-30 h-20 rounded-full"
                src={logo}
                alt="Logo.text"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coder's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Ankit-Dhattarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                {
                  <Footer.Link href="https://www.linkedin.com/in/er-ankit-dhattarwal/">
                    LinkedIn
                  </Footer.Link>
                }
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; condtion</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="ankit dhattarwal"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/ankit.dhatterwal.756"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/er-ankit-dhattarwal/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://www.instagram.com/ankit._.dhattarwal/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/DhattarwalAk47"
              icon={BsTwitterX}
            />
            <Footer.Icon
              href="https://github.com/Ankit-Dhattarwal"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
