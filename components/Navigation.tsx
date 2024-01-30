'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";

type TNavLink = {
  label: string;
  href: string;
};

type TProps = {
  navLinks: TNavLink[];
}

const Navigation = ({navLinks}:TProps) =>{
  const pathname = usePathname();

  return (
    <>
    {navLinks.map(link=>{
      const isActive = pathname === link.href;

      return (
        <Link
          key={link.label}
          href={link.href}
          className={isActive? "active":""}
        >
          {link.label}
        </Link>
      )
    })}
    </>
  )
}
//TODO: creacte css rule to active link;
export {Navigation};
