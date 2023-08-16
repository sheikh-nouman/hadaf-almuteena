import Link from "next/link";

const NavItem = ({ text, href, active }: { text: string; href: string; active: boolean }) => {
  return (
    <Link href={href} className={`nav__item ${active ? "active" : ""} a__class font-mono`}>
      {text}
    </Link>
  );
};

export default NavItem;
