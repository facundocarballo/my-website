// Aca se agregan los metadatos de cada blog que vayamos creando.

import { CardInfoProps, TheCardInfoProps } from '../../src/components/cardInfo';


export const empytCardInfo:CardInfoProps = {
  title: '',
  description: '',
  keyword: '',
  href: '',
  blog: true,
  externalLink: false,
};

export function getBlogs(): TheCardInfoProps {
 // Ejemplo de como agregar un blog nuevo
    const chakraUI: CardInfoProps = {
    title: 'ChakraUI - Web Design',
    titulo: 'ChakraUI - Diseño Web',
    description: "Chakra UI it's bring us a new way to create beautiful designs without the hard part of CSS. Works like SwiftUI, it's a declarative programming for the web.",
    descripcion: 'ChakraUI nos trae una nueva forma de crear hermosos diseños sin la parte fea y dificil de CSS. Funciona como SwiftUI, trabajando de una manera declarativa (mejor conocido como programacion declarativa)',
    keyword: 'React',
    date: 'Wednesday, 29 December 2021',
    fecha: 'Miercoles, 29 de Diciembre 2021',
    photoURL: 'https://i.ibb.co/x6Mhvv3/Captura-de-Pantalla-2021-12-28-a-la-s-22-54-50.png',
    href: "chakraUI",
    externalLink: false,
    blog: true
  };
  const truffleReact: CardInfoProps = {
    title: 'Truffle with React/Next',
    titulo: 'Truffle con React/Next',
    descripcion: 'Truffle Suite nos provee de herramientas muy valiosas para desarrollar aplicaciones descentralizadas. Desde compilar nuestros Smart Contracts, agregarlos a la blockchain de ethereum hasta conectar las funcionalidades de los Smart Contracts con un frontend.',
    description: 'Truffle Suite brings us a lot of cool tools to work with Smart Contracts and the Ethereum Blockchain. Since compiling your Smart Contracts, deploying it on the Blockchain until connect the Smart Contracts to a frontend.',
    keyword: 'React',
    date: 'Monday, 17 January 2022',
    fecha: 'Lunes, 17 de Enero 2022',
    photoURL: 'https://i.ibb.co/dGmFTHH/MINIATURA-EN.png',
    href: 'truffleReact',
    externalLink: false,
    blog: true
  };
  const interactTruffleWithReact: CardInfoProps = {
    title: 'How to interact Smart Contracts with a Web App using React',
    titulo: 'Interactúa con tus Smart Contracts usando React',
    descripcion: 'Para interactuar con nuestros Smart Contracts, usamos Truffle Suite que nos brinda muchísimas herramientas muy útiles para poder conectar nuestro Contrato Inteligente con nuestro frontend. También necesitaremos de un paquete extra de Truffle Suite llamado, @truffle/contract que nos proveerá de una función que nos servirá para tener una instancia en JavaScript de nuestro Contrato Inteligente.',
    description: 'To interact with our Smart Contract using React, we use Truffle Suite that brings us a lot of cool tools that help us to interact with our Smart Contract. Also we will need an extra package of Truffle called, @truffle/contract that brings us a function that we will use to get a JavaScript instance of our Smart Contract.',
    keyword: 'React',
    date: 'Thursday, 20 January 2022',
    fecha: 'Jueves, 20 de Enero 2022',
    photoURL: 'https://i.ibb.co/KLrbkzb/Captura-de-Pantalla-2022-01-20-a-la-s-14-55-47.png',
    href: 'interactTruffleReact',
    externalLink: false,
    blog: true
  };
  const mappingFunctions: CardInfoProps = {
    title: 'What are Mapping functions',
    titulo: 'Que son las funciones Mapping?',
    descripcion: 'Las funciones de tipo mapping son funciones que recibirán siempre un parámetro que funcionará como clave para poder identificar el valor asociado a esta clave.',
    description: 'The mapping functions are simple functions that always will receive some value that will work like the key of an unique value.',
    keyword: 'Solidity',
    date: 'Friday, 21 January 2022',
    fecha: 'Viernes, 21 de Enero 2022',
    photoURL: 'https://i.ibb.co/YNqLq7k/Captura-de-Pantalla-2022-01-22-a-la-s-20-45-32.png',
    href: 'mappingFunctions',
    externalLink: false,
    blog: true
  };
  const truffleTestnet: CardInfoProps = {
    title: 'Connect Truffle with a Testnet',
    titulo: 'Conecta Truffle con una Testnet',
    descripcion: 'En este articulo vas a ver como conectar Truffle con una testnet',
    description: 'In this article you will see how to connect Truffle with a testnet',
    keyword: 'Solidity',
    date: 'Tuesday, 1 February 2022',
    fecha: 'Martes, 1 de Febrero 2022',
    photoURL: 'https://i.ibb.co/VVPFTBG/Captura-de-Pantalla-2022-02-14-a-la-s-11-56-03.png',
    href: 'truffleTestnet',
    externalLink: false,
    blog: true
  };
  const ethUSD: CardInfoProps = {
    title: 'Get the current price of the ETH',
    titulo: 'Obten el precio actual del ETH',
    descripcion: 'En este articulo veremos como obtener el precio actual del ETH. Utilizando Smart Contracts de ChainLink.',
    description: 'In this article you will see how to get the current price of the ETH. Using Smart Contracts of ChainLink.',
    keyword: 'Solidity',
    date: 'Wednesday, 2 February 2022',
    fecha: 'Miercoles, 2 de Febrero 2022',
    photoURL: 'https://i.ibb.co/WvmPw2h/Captura-de-Pantalla-2022-02-14-a-la-s-12-37-18.png',
    href: 'ethUSD',
    externalLink: false,
    blog: true
  };
  const gitHubProfile: CardInfoProps = {
    title: 'Create a Professional Github Readme Profile',
    titulo: 'Crea un perfil Profesional de Github',
    descripcion: 'En este articulo veremos como crear un perfil profesional de GitHub',
    description: 'In this article you will see how to create a professional GitHub profile',
    keyword: 'React',
    date: 'Friday, 4 February 2022',
    fecha: 'Viernes, 4 de Febrero 2022',
    photoURL: 'https://i.ibb.co/p1h1f4q/Captura-de-Pantalla-2022-02-14-a-la-s-13-01-17.png',
    href: 'githubProfile',
    externalLink: false,
    blog: true
  };
  const props : TheCardInfoProps = {
    props: [
      
      gitHubProfile,
      ethUSD,
      truffleTestnet,
      mappingFunctions,
      interactTruffleWithReact,
      truffleReact,
      chakraUI,
      
    ]
  };
  return props;
  //return null; // Esta linea una vez existan blogs, se elimina.
}
