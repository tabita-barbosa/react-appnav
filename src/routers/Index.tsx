// vamos importar lá do core a nossa NavigationContainer
import {NavigationContainer} from '@react-navigation/native';
//import TabRouters from './Tab.routers';

import DrawerRouters from './drawer.routers';


//vamos exportar, criaremos aqui um export padrão e chamaremos de Routers
export default function Routers(){
    return (
        //e vamos retornar aqui nossa NavigationContainer
        // e dentro da navigation container vamos criar nossa extratégia de navegação 
        // e com o TabRouters vamos fazer uma alteração junto ao arquivo inicial do nosso app
            // -> App.tsx
        <NavigationContainer>
             {/*<TabRouters/>*/}
             <DrawerRouters/>
        </NavigationContainer>
    )
}


//obs.: no slide 21 antes de rodar o app precisamos ajustar nosso arquivo de rota 