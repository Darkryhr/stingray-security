import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import {
  GradientBorder,
  Nav,
  NavLink,
  NavMenu,
  MenuList,
  LogoWrapper,
} from './Navbar.css';

import { Close, Menu, Logo } from '../icons';
import { Button } from '../shared';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });
  console.log(open);
  return (
    <>
      <Nav>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavMenu open={open}>
          <Button onClick={() => setOpen(false)} className='close'>
            <Close />
          </Button>
          <MenuList>
            <NavLink>
              <Link href='/'>Home</Link>
            </NavLink>
            <NavLink>
              <Link href='/'>About Us</Link>
            </NavLink>
            <NavLink>
              <Link href='/'>Contact</Link>
            </NavLink>
          </MenuList>
        </NavMenu>
        <Button onClick={() => setOpen(true)}>
          <Menu />
        </Button>
      </Nav>
      <GradientBorder />
    </>
  );
};

export default Navbar;
