import React from "react";
import { Link } from "react-scroll";
function FooterMain() {
  const footerLinks = [
    { link: "About", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey ">Aadesh Shukla</p>
        <ul className="flex gap-4 text-lightGrey">
          {footerLinks.map((footerLink, index) => (
            <li key={index}>
              <Link
                to={footerLink.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {footerLink.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Aadesh Shukla | All Rights Reserved
      </p>
    </div>
  );
}

export default FooterMain;
