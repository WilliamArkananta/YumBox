import React from "react";

interface NavItemProps {
  children: string;
}

function NavItem({ children }: NavItemProps) {
  return (
    <div className="navItem flex items-center gap-7">
      <h3 className="text-base text-content-invert">{children}</h3>
    </div>
  );
}

export default NavItem;
