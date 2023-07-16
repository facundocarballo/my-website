import {
  C_IMG,
  DANGEROUS_CIPHER_IMG,
  INTELITTER_2_IMG,
  INTELITTER_3_IMG,
  INTELITTER_4_IMG,
  INTELITTER_IMG,
  JAVA_IMG,
  MY_WEBSITE_THUMBNAILS_IMG,
  PYTHON_IMG,
  REACT_IMG,
  SAVER_COMMUNITY_CREATE_NFT_IMG,
  SAVER_COMMUNITY_IMG,
  SAVER_COMMUNITY_REQUIREMENTS_IMG,
  SAVER_COMMUNITY_REWARDS_IMG,
  SAVER_COMMUNITY_SINERGY_SALE_IMG,
  SAVER_COMMUNITY_TIMER_IMG,
  SOLIDITY_IMG,
  TYPESCRIPT_IMG,
} from "./images";

export interface IExperienceCard {
  title: string;
  description: string[];
  languages: string[];
  images: string[];
  repo?: string;
  href?: string;
  youtube?: string;
}

export interface IExperienceProps {
  props: IExperienceCard;
}

export function getExperience(): IExperienceCard[] {
  const my_web_site: IExperienceCard = {
    title: "Facundo Carballo",
    description: [
      "At the end of 2021, I decided to create my own web site to show my skills as Software Engineer.",
      "I used React, TypeScript and Firebase as Database to develop my website.",
      "In this website I post all of my projects that I upload to YouTube. If you wanna see all of these projects, you can go tho the projects section and you will have to create an account on my website :)",
      "You can signin with your google account too.",
      "The code of this website is open source, you can see it on my GitHub Repo.",
    ],
    languages: [REACT_IMG, TYPESCRIPT_IMG],
    images: [MY_WEBSITE_THUMBNAILS_IMG],
    repo: "https://github.com/facundocarballo/my-website",
    youtube: "https://youtu.be/Ij7LYDloqFs",
  };

  const saver_community: IExperienceCard = {
    title: "Saver Community",
    description: [
      "At the begin of 2022, I was hired to develop my first big project, thanks of all the videos that I was publishing on YouTube.",
      "Initially, the project consisted in a simple descentralized app that allows the users to save his cryptocurrencies (ERC20). As the project progressed, the main idea of the app evolve to a more complex descentralized app, which involves 4 tokens ERC20s and a collection of NFTs (ERC721).",
      "I was the only responsable of all the development of this app, from the design of the smart contracts to the design of the UI of the web.",
      "So I consider my self that this is my biggest achievement so far.",
    ],
    languages: [REACT_IMG, SOLIDITY_IMG],
    images: [
      SAVER_COMMUNITY_IMG,
      SAVER_COMMUNITY_REQUIREMENTS_IMG,
      SAVER_COMMUNITY_TIMER_IMG,
      SAVER_COMMUNITY_CREATE_NFT_IMG,
      SAVER_COMMUNITY_REWARDS_IMG,
      SAVER_COMMUNITY_SINERGY_SALE_IMG,
    ],
    href: "https://saver.community/dapp/",
    repo: "https://github.com/facundocarballo/saver-community",
    youtube: 'https://youtu.be/UhziCew61JM'
  };

  const arduino: IExperienceCard = {
    title: "Arduino & Android",
    description: [
      "At the University, we were assigned a project about Embedded Systems using an Arduino and an Android App.",
      "The main thing about this project was stablish a conection via Bluetooth from the Arduino to the Android App and vice versa. So the app can send commnads to the Arduino, and the Arduino can send commands to the app.",
      "Our project was focused in the creation of a particular cat litter box.",
      "We use distance and humidity sensors to detect the presence of the cat in the litter box and also to determinated when the cat urinates there.",
    ],
    languages: [C_IMG, JAVA_IMG],
    images: [
      INTELITTER_IMG,
      INTELITTER_2_IMG,
      INTELITTER_3_IMG,
      INTELITTER_4_IMG,
    ],
    repo: "https://github.com/facundocarballo/SOA-M3",
    youtube: "https://www.youtube.com/shorts/AKoxJCGlXms",
  };

  const cipher: IExperienceCard = {
    title: "Dangerous Cipher",
    description: [
      "At the University, we have worked with synchronization and communication mechanisms of process to creates programs with concurrency.",
      "We had the freedom to choose our own project, as long as we applied some synchronization and communication mechanisms.",
      "We decided to create an Encryptor/Decryptor app using only a key.",
      "Using the AES algorithm, we develop a CLI app that allows you to encrypt and decrypt files using a key.",
    ],
    languages: [PYTHON_IMG],
    images: [DANGEROUS_CIPHER_IMG],
    repo: "https://github.com/facundocarballo/ProgramacionConcurrente/tree/main/TP1/Integrador",
    youtube: "https://youtu.be/6wCola7HnQ4",
  };

  const props: IExperienceCard[] = [
    my_web_site,
    saver_community,
    arduino,
    cipher,
  ];

  return props;
}
