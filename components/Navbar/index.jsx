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
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let ref = useRef(null);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });

  const variants = isTabletOrMobile
    ? {
        hidden: {
          opacity: 0,
          x: '100%',
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }
    : {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      };

  return (
    <>
      <Nav>
        <Link href='/'>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <AnimatePresence>
          {isTabletOrMobile ? (
            open && (
              <NavMenu
                // open={open}
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
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
            )
          ) : (
            <NavMenu
              // open={open}
              variants={variants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
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
          )}
        </AnimatePresence>

        <Button onClick={() => setOpen(true)}>
          <Menu />
        </Button>
      </Nav>
      <GradientBorder />
    </>
  );
};

export default Navbar;
