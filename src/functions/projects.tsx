import { CardInfoProps, TheCardInfoProps } from '../../src/components/cardInfo';

export function getProjects() : TheCardInfoProps {
  const myWallet: CardInfoProps = {
    title: 'MyWallet',
    titulo: 'MyWallet',
    descripcion: 'Billetera personal, útil para registrar los movimientos que hagamos con nuestras monedas. Soporta cualquier moneda nacional, como también cualquier criptomoneda.',
    description: 'Personal Wallet, useful to manage all the movements of our currencies. Support all national currencies and also all cryptocurrencies.',
    keyword: 'React',
    frameworkPhotoURL: null,
    photoURL: 'https://i.ibb.co/LzFGJnj/myWallet.png',
    date: 'Friday, 6 January 2022',
    fecha: 'Viernes, 6 Enero 2022',
    href: 'myWallet',
    blog: false,
  };
  const TodoList: CardInfoProps = {
    title: 'Todo List',
    titulo: 'Todo List',
    descripcion: 'Creamos una ToDo List paso a paso. Esta es una aplicación descentralizada que funciona dentro de la blockchain de Ethereum.',
    description: 'We create a ToDo List app step by step. This is a Descentralice Application that runs inside of the Ethereum Blockchain.',
    keyword: 'Solidity',
    frameworkPhotoURL: null,
    date: 'Saturday, 22 January 2022',
    fecha: 'Sábado, 22 de Enero 2022',
    photoURL: 'https://i.ibb.co/VvXSWWm/Captura-de-Pantalla-2022-01-22-a-la-s-21-17-57.png',
    href: 'todoList',
    blog: false
  };
  const FacuTokenICO: CardInfoProps = {
    title: 'Facu Token ICO',
    titulo: 'Facu Token ICO',
    descripcion: 'ICO, Initial Coin Offering. Venta de mi Token ERC20 llamdo FacuToken. El precio del token valdrá siempre 50 USD, para eso tuve que utilizar un Smart Contract de ChainLink.',
    description: 'ICO, Initial Coin Offering. Sale of my ERC20 Token called FacuToken. The price of the token will allways be 50 USD, to do that I have to use a Smart Contract of ChainLink.',
    keyword: 'Solidity',
    frameworkPhotoURL: null,
    photoURL: 'https://i.ibb.co/5X39CWK/minEN.png',
    date: 'Monday, 31 January 2022',
    fecha: 'Lunes, 31 de Enero 2022',
    href: 'facuTokenICO',
    blog: false
  };
  const props : TheCardInfoProps = {
    props: [
      FacuTokenICO,
      TodoList,
      myWallet
    ]
  };
  return props;
}