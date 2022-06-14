import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
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
import { useRouter } from 'next/router';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let ref = useRef(null);
  const router = useRouter();

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });

  console.log(router.replace);
  return (
    <>
      <Nav>
        <Link href='/'>
          <LogoWrapper
            whileHover={{
              filter: 'saturate(2)',
              scale: 1.05,
            }}
          >
            <Logo />
          </LogoWrapper>
        </Link>
        <NavMenu open={open} ref={ref} onClick={() => setOpen(false)}>
          <Button onClick={() => setOpen(false)} className='close'>
            <Close />
          </Button>
          <MenuList>
            <NavLink>
              <Link href='/'>Home</Link>
            </NavLink>
            <NavLink>
              <Link href='#about-section' scroll={false}>
                About Us
              </Link>
            </NavLink>
            <NavLink>
              <Link href='#services-section' scroll={false}>
                Services
              </Link>
            </NavLink>
            <NavLink>
              <Link href='#contact-section' scroll={false}>
                Contact
              </Link>
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
