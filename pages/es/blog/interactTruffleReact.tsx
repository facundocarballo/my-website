import React from "react"
import { VStack, HStack, Spacer, Box, useColorModeValue, Divider, Heading, Image, Link } from "@chakra-ui/react"
import { Parrafo, Titulo } from "../blog/chakraUI"
import { NavBar } from "./../../../src/components/navbar"
import { theNavBarES } from "./../../../src/functions/navbar"
import Head from 'next/head'
import { Footer } from "./../../../src/components/footer"

export default function TruffleReact() {
    const bg = useColorModeValue('bgLight', 'bgDark');
    const title: string = "Interactúa con tus Smart Contracts usando React";
    return (
        <VStack minH='800px' bg={bg} w='full'>
            <Head>
                <title>Interactúa con tus Smart Contracts usando React</title>
                <meta name="description" content="Para interactuar con nuestros Smart Contracts, usamos Truffle Suite que nos brinda muchísimas herramientas muy útiles para poder conectar nuestro Contrato Inteligente con nuestro frontend. También necesitaremos de un paquete extra de Truffle Suite llamado, @truffle/contract que nos proveerá de una función que nos servirá para tener una instancia en JavaScript de nuestro Contrato Inteligente."/>
                <meta name='image' content='https://i.ibb.co/KLrbkzb/Captura-de-Pantalla-2022-01-20-a-la-s-14-55-47.png'/>
            </Head>
            <NavBar props={theNavBarES} />
            <Box h='5px'/>
            <Divider />
            <Box h='50px'/>
            <HStack w='full'>
                <Spacer/>
                <Heading size='4xl'>{title}</Heading>
                <Spacer/>
            </HStack>
            <InteractTruffleReactContent />
            <Box h='30px' />
            <Footer />
        </VStack>
    ); 
}

const InteractTruffleReactContent = () => {
    const code: string = `string public name = "Facundo";`;
    const loadWeb3S: string = "La primera función que irá dentro de la función load, será loadWeb3 donde utilizaremos un código que nos ofrece metamask para poder conectar web3 con esta billetera. Obviamente que si no tienen metamask instalado, deben instalarlo es muy fácil simplemente se dirigen a su página web oficial y lo descargan.";
    const refresh: string = "Ahora como no queremos que esta función se ejecute constantemente, vamos a crear una variable de estado utilizando useState para decidir cuando queremos que se ejecute la función load. Apenas se ejecute el hook nos preguntaremos si debemos ejecutar la función load. De no ser así, retornamos. Ahora si efectivamente tenemos que ejecutar la función load, automáticamente seteamos la variable en false para que la próxima vez no lo lea; y luego recién ejecutamos la función load.Ahora ya estamos en condiciones de probar nuestra función loadAccount. Como ven, imprime un objeto de tipo promesa. Eso pasó porque me olvidé el await antes de ejecutar la función de web3. Ahora si recargamos de nuevo veremos la dirección correcta.";
    const loadContract: string = "Finalmente eliminamos el console.log y retornamos la cuenta. Por lo que dentro de la función load tendremos que recibirla. Aca cometí un error que luego resolveremos, simplemente no debería haber puesto los dos corchetes para recibir el valor de la función, porque no estoy retornado un objeto sino una simple variable. Continuamos creando una función que obtenga una instancia del contrato. Acá vamos a necesitar de nuestra instancia de truffle contracts que instalamos previamente. Empezamos creando una variable que almacene lo que retorne la función contract (que es la instancia de truffle contract), a esta función le tenemos que pasar el archivo JSON que se generó de nuestro Smart Contract. Continuamos indicando el proveedor de web3 que estamos usando, luego en una nueva variable almacenamos el contenido que retornara la función deployed.";


    return (
        <VStack w='full' h='full'>
            <Box h='10px' />
            <Titulo>Use Effect</Titulo>
            <Parrafo>
            Primero que nada para interactuar con los Contratos inteligentes dentro de React tendremos que usar unos de sus hooks, useEffect que permite ejecutar cierta porción de código cada vez que se tiene que renderizar la página web. Dentro de este hook vamos a ejecutar el código que hagamos para recibir la información de los Smart Contracts.
            </Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/fD491qQ/use-Effect.png'
            alt='useEffect'
            borderRadius={8}
            />
            <Titulo>Funcs</Titulo>
            <Parrafo>
            El código que irá dentro de este hook lo crearemos a parte en otro archivo para mantener todo más limpio. En este caso cree una carpeta (src) que contendrá un único archivo por el momento al que llamaré funcs.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Truffle Contract</Titulo>
            <Parrafo>
            Para poder interactuar con los Contratos Inteligentes necesitaremos instalar un paquete extra de truffle, llamado truffle contracts. Una vez instalado ya podremos empezar a armar el archivo. Empezamos importando el archivo JSON que se generó cuando hicimos la migración utilizando los comandos de truffle. Este archivo JSON contiene todos los datos de nuestro Smart Contract nada más que están en un formato JSON. Seguimos importando Web3, si no tienen web3 instalado lo pueden instalar ejecutando el siguiente comando (npm install web3). Y por último creamos una instancia del paquete truffle contracts que acabamos de instalar.
            </Parrafo>
            <Box h='10px' /> 
            <Titulo>Load</Titulo>
            <Parrafo>
            Ahora creamos una función a la que llamaré load, que será la única función que se ejecutara dentro del useEffect. Dentro de esta función se ejecutan diferentes funciones que iremos creando ahora.
            </Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/cycT4K1/load.png'
            alt='load'
            borderRadius={8}
            />
            <Titulo>Load Web3</Titulo>
            <Parrafo>{loadWeb3S}</Parrafo>
            <Box h='10px' />
            <Link href="https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8" bg='blue.500' p='8px' borderRadius={8}>Metamask Code</Link>
            <Titulo>Config Metamask</Titulo>
            <Parrafo>
            Ahora pasamos a configurar metamask, primero necesitaremos ver las redes de prueba, para eso nos dirigimos a configuración, avanzado, y luego habilitamos la opción para mostrar las redes de prueba. Luego debemos agregar nuestra propia red blockchain que ganache nos provee. Para eso, dentro de configuración vamos al apartado de redes. Y presionamos en agregar una red, y llenan los datos de la red con los que ven en pantalla. Los mismos los pueden ir verificando que sean los mismos que nos indica la aplicación de ganache, pero normalmente son siempre los mismos.
            </Parrafo>
            <Box h='10px' />
            <Titulo>Load Account</Titulo>
            <Parrafo>
            Ahora con Metamask vinculado con Ganache, pasamos a crear la siguiente función que sirva para obtener la cuenta con la que el usuario está utilizando nuestra Dapp. Primero vamos a comprobar que todo va bien hasta el momento, por lo que vamos a imprimir en pantalla la cuenta que nos devuelve la función. Para obtener ese dato en la consola, todavía tenemos que llamar a la función load desde el hook. Por lo que importamos la función load y la llamamos dentro del hook.
            </Parrafo>
            <Box h='10px' />
            <Image
            src='https://i.ibb.co/kBLvnYD/load-Account.png'
            alt='loadAccount'
            borderRadius={8}
            />
            <Titulo>Refresh (UseEffect)</Titulo>
            <Parrafo>{refresh}</Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/CKS7jYP/Refresh2.png'
            alt='refresh'
            borderRadius={8}
            />
            <Image
            src='https://i.ibb.co/59nkpRK/Refresh.png'
            alt='refresh'
            borderRadius={8}
            />
            <Titulo>Add Ganache Accounts to Metamask</Titulo>
            <Parrafo>
            Ahora yo quiero trabajar con las cuentas que me proporciona Ganache, que vienen con 100 ETH falsos cada una. Para eso deberé agregarlas a Metamask. Simplemente nos dirigimos a Ganache, presionamos en la llave de la derecha y copiamos la clave privada. Luego en metamask, importamos una cuenta y pegamos nuestra clave privada ahí. Tocamos en importar y se importará sin problemas. Voy a hacer lo mismo para otra cuenta de ganache, para tener más de una cuenta con la que trabajar y poder hacer pruebas. Ahora si recargamos la página vemos como efectivamente estamos leyendo la dirección correcta, ya que coincide con la que ganache nos dice. 
            </Parrafo>
            <Box h='10px'/>
            <Titulo>Load Contract</Titulo>
            <Parrafo>{loadContract}</Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/C10j6wL/load-Contract-removebg-preview.png'
            alt='loadContract'
            borderRadius={8}
            />
            <Titulo>Load Tasks</Titulo>
            <Parrafo>
            Dentro de la función que carga el contrato quiero recibir también las tareas de este usuario, como es un trabajo bastante largo voy a crear una función aparte que se encargue de esto. loadTasks, esta función recibe dos parámetros, el contrato y la dirección de la billetera que está utilizando el usuario en cuestión. Primero obtenemos la cantidad de tareas que creó el usuario utilizando la función taskCount que creamos nosotros en el Smart Contract. Creamos un vector vacío. Y luego con un bucle for empezamos a recorrer cada una de las tareas. Dentro del bucle, obtenemos la tarea con su id, gracias a la función de tipo mapping que también creamos nosotros en el Contrato Inteligente. Luego colocamos la tarea dentro del vector. Después de recorrer las tareas simplemente devolvemos el vector que contiene todas las tareas.
            </Parrafo>
            <Box h='10px' />
            <Image 
            src='https://i.ibb.co/3MhktL6/load-Tasks-removebg-preview.png'
            alt='loadTasks'
            borderRadius={8}
            />
            <Titulo>Receive all in the useEffect</Titulo>
            <Parrafo>
            Ahora ya dentro del UseEffect, a la función load le agregamos el método then donde recibiremos el objeto que devuelve la función load y ahí dentro del then podemos ya interactuar con los datos provenientes del Smart Contract.
            </Parrafo>
            <Box h="10px"/>
            <Image 
            src='https://i.ibb.co/BGh8mRd/all-Use-Effect.png'
            alt='allUseEffect'
            borderRadius={8}
            />
            <Titulo>Fix some issues</Titulo>
            <Parrafo>
            Probamos nuestro código, y vemos que tengo un error. Capaz se han dado cuenta mientras iba escribiendo pero yo estuve bastante tiempo para entender qué era lo que estaba pasando. Había llamado contract a la instancia de nuestro Smart Contract, y también llamé contract a la instancia de truffle contract. Por lo que tuve que modificar el nombre de la variable que almacena la instancia del contrato inteligente. Pero no tuve mejor idea que llamarlo exactamente igual que la instancia que devolvía la función de truffle contract por lo que también se quejaba la aplicación. Por lo que tuve que cambiar otra vez el nombre de una variable. Después de esto, compile y tampoco funcionaba la aplicación, el problema era que estaba recibiendo la dirección de la cuenta como si fuera una algo dentro de un objeto, pero en realidad la función devuelve simplemente la dirección de la cuenta. Una vez modifique esto, ya la aplicación funcionaba correctamente y podía leer los datos que provienen de nuestro Smart Contract.
            </Parrafo>
        </VStack>
    );
};