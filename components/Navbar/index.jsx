import Link from 'next/link';
import React, { useState } from 'react';
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

  return (
    <>
      <Nav>
        <Link href='/'>
          <LogoWrapper>
            <Logo />
            <span>StingraySecurity</span>
          </LogoWrapper>
        </Link>
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
