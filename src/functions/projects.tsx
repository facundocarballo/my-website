import { CardInfoProps, TheCardInfoProps } from "../../src/components/cardInfo";

export function getProjects(): TheCardInfoProps {
  const myWallet: CardInfoProps = {
    title: "MyWallet",
    titulo: "MyWallet",
    descripcion:
      "Billetera personal, útil para registrar los movimientos que hagamos con nuestras monedas. Soporta cualquier moneda nacional, como también cualquier criptomoneda.",
    description:
      "Personal Wallet, useful to manage all the movements of our currencies. Support all national currencies and also all cryptocurrencies.",
    keyword: "React",
    frameworkPhotoURL: null,
    photoURL: "https://i.ibb.co/LzFGJnj/myWallet.png",
    date: "Friday, 6 January 2022",
    fecha: "Viernes, 6 Enero 2022",
    href: "myWallet",
    externalLink: false,
    blog: false,
  };
  const TodoList: CardInfoProps = {
    title: "Todo List",
    titulo: "Todo List",
    descripcion:
      "Creamos una ToDo List paso a paso. Esta es una aplicación descentralizada que funciona dentro de la blockchain de Ethereum.",
    description:
      "We create a ToDo List app step by step. This is a Descentralice Application that runs inside of the Ethereum Blockchain.",
    keyword: "Solidity",
    frameworkPhotoURL: null,
    date: "Saturday, 22 January 2022",
    fecha: "Sábado, 22 de Enero 2022",
    photoURL:
      "https://i.ibb.co/VvXSWWm/Captura-de-Pantalla-2022-01-22-a-la-s-21-17-57.png",
    href: "todoList",
    externalLink: false,
    blog: false,
  };
  const FacuTokenICO: CardInfoProps = {
    title: "Facu Token ICO",
    titulo: "Facu Token ICO",
    descripcion:
      "ICO, Initial Coin Offering. Venta de mi Token ERC20 llamdo FacuToken. El precio del token valdrá siempre 50 USD, para eso tuve que utilizar un Smart Contract de ChainLink.",
    description:
      "ICO, Initial Coin Offering. Sale of my ERC20 Token called FacuToken. The price of the token will allways be 50 USD, to do that I have to use a Smart Contract of ChainLink.",
    keyword: "Solidity",
    frameworkPhotoURL: null,
    photoURL: "https://i.ibb.co/5X39CWK/minEN.png",
    date: "Monday, 31 January 2022",
    fecha: "Lunes, 31 de Enero 2022",
    href: "facuTokenICO",
    externalLink: false,
    blog: false,
  };
  const nftProject: CardInfoProps = {
    title: "NFT Project",
    titulo: "Proyecto NFT",
    descripcion:
      "En esta dapp podras crear tu propio NFT, adquirir NFTs de otros usuarios y vender tus NFTs",
    description:
      "In this dapp you can create your own NFT, buy NFTs from other users and also to sell your own NFTs",
    keyword: "Solidity",
    frameworkPhotoURL: null,
    date: "Saturday, 17 July 2022",
    fecha: "Sábado, 17 de Julio 2022",
    photoURL: "https://i.ibb.co/f2DJVR3/miniatura-EN.png",
    href: "https://nft-project-1e5f2.web.app",
    externalLink: true,
    blog: false,
  };
  const erc20_payments: CardInfoProps = {
    title: "ERC20 Payments",
    titulo: "Pagos con ERC20",
    descripcion:
      "Esta es una dapp sencilla que muestra distinto contenido al usuario dependiendo de su condicion. Hay usuarios premiums y usuarios gratis.",
    description:
      "This simple dapp shows different content to the user by his condition. There are premium and free users inside of this dapp.",
    keyword: "Solidity",
    frameworkPhotoURL: null,
    date: "Thursday, 29 December 2022",
    fecha: "Jueves, 29 de Diciembre 2022",
    photoURL: "https://i.ibb.co/XtwRPzm/MIN-1.png",
    href: "https://erc20-payments.web.app/",
    externalLink: true,
    blog: false,
  };
  const events: CardInfoProps = {
    title: "Events",
    titulo: "Eventos",
    descripcion:
      "Esta dapp es un simple contador, que se le puede incrementar y disminuir el valor. Donde cada vez que se incremente y que se decremente se emitira un evento. Esta dapp tambien muestra todos esos eventos que fueron ocurriendo, y tambien muestra los eventos filtrados.",
    description:
      "This dapp is a simple counter, you can increment or decrement the value of this counter. Every time that someone increment and decrement the value, the contract will emit an event on the Blockchain. This dapp shows all the events that were happening, and also filter events by your wallet.",
    keyword: "Solidity",
    frameworkPhotoURL: null,
    date: "Thursday, 5 January 2023",
    fecha: "Jueves, 5 de Enero 2023",
    photoURL: "https://i.ibb.co/94SkxmW/miniatura-EN.png",
    href: "https://events-web3.web.app/",
    externalLink: true,
    blog: false,
  };
  const dynamicRouts: CardInfoProps = {
    title: "Dynamic Routes",
    titulo: "Rutas Dinamicas",
    descripcion: "Es una aplicacion simple donde se muestra como trabajar con rutas dinamicas utilizando NextJS y Firebase Hosting.",
    description: "Is a simple app where it shows how to work with dynamic routes using NextJS & Firebase Hosting.",
    keyword: "React",
    frameworkPhotoURL: null,
    date: "Saturday, 26 March 2023",
    fecha: "Sabado, 26 de Marzo 2023",
    photoURL: "https://i.ibb.co/VWkztT5/miniatura.png",
    href: "https://dynamic-routes-nextjs.web.app/",
    externalLink: true,
    blog: false,
  };

  const props: TheCardInfoProps = {
    props: [
      FacuTokenICO,
      TodoList,
      myWallet,
      nftProject,
      erc20_payments,
      events,
      dynamicRouts
    ],
  };

  return props;
}
