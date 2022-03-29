import { TheNavItem, TheNavBar } from '../components/navbar';

/*
  Cuando pongamos un proyecto en la pagina acordarse de que tenemos que descomentar los proyectos del navBar.
  En lo posible de entrada agregar un proyecto de cada framework (Flutter, React, Swift).
*/

const theNavItems:TheNavItem[] = [
    {
    label: 'Home',
    href: '/',
    },
    {
    label: 'Projects',
    href: '/projects',
    },
    {
    label: 'Blog',
    href: '/blog',
    },
    {
    label: 'Contact Me',
    href: '/#contactMe',
    },
    {
      label: 'ES',
      href: '/es',
    }
  ];

  const theNavItemsES:TheNavItem[] = [
    {
    label: 'Inicio',
    href: '/es',
    },
    {
    label: 'Proyectos',
    href: '/es/proyectos',
    },
    {
    label: 'Blog',
    href: '/es/blog',
    },
    {
    label: 'Contáctame',
    href: '/es/#contactMe',
    },
    {
      label: 'EN',
      href: '/',
    },
  ];

  export const theNavBar:TheNavBar = {
    photoURL: 'https://i.ibb.co/3kmQ59f/memoji-guino.webp',
    title: '',
    navItems: theNavItems,
  }; // Usamos esta para la pagina en ingles.

  export const theNavBarES:TheNavBar = {
    photoURL: 'https://i.ibb.co/3kmQ59f/memoji-guino.webp',
    title: '',
    navItems: theNavItemsES,
  }; // Usamos esta para la pagina en español.