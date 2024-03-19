import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

interface NavItem {
  text: string;
  isDisabled?: boolean;
  url?: string;
  id?: string | number;
}

interface NavProps {
  items: NavItem[];
}

const NavLayout = ({items}: NavProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="nav flex-column nav-pills pt-2">
        {items.map((item, index) => {
          const isActive = pathname === (item.url || "#");

          return (
            <li className="nav-item" key={index}>
              {item.isDisabled ? (
                <span className="nav-link disabled">{item.text}</span>
              ) : (
                <Link
                  href={item.url || "#"}
                  className={`nav-link w-100 text-left ${
                    isActive ? "active" : ""
                  }`}
                >
                  {item.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavLayout;
