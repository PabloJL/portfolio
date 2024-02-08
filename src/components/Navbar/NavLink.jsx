import React from "react";
import Link from "next/link";

function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white py-2 pl-3 pr-4"
    >
      {title}
    </Link>
  );
}

export default NavLink;
