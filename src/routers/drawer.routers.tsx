import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'; //como já fizemos anteriomente.

//vamos importar também nosso TabRouters
import TabRouters from './Tab.routers';
/* somente no final já com o slide 25 */
import StackRouters from './stack.routers';
import Config from '../screens/Config';

// vamos criar uma const e chama-la de Drawer do tipo createDrawerNavigator
const Drawer = createDrawerNavigator();

//agora vamos criar um export padrão
export default function DrawerRouters(){
    return(
        // então aqui dentro iremos chamar a nossa Drawer
        <Drawer.Navigator screenOptions={{title: 'Menu'}}> 
            <Drawer.Screen 
            // dai dentro deste cara que esta a dica vamos atribuir uma outra rota dentro do nosso 
            //componente ao inves de chamar outra tela,
            name='home'
            component={TabRouters}
            options={{
                // conseguimos colocar uma cor e tamanho junto do icone
                drawerIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                // na sequencia vamos colocar aqui tbm o label
                // podemos utilizar a opção 
                drawerLabel: 'Inicio'
            }
                
            }
            />
            {/* somente no final já com o slide 25 */}
            <Drawer.Screen 
            name='profile'
            component={StackRouters}
            options={{
                drawerIcon: ({color, size}) => <Feather name='user' color={color} size={size}/>,
                drawerLabel: 'Meu Perfil'
            }
                
            }
            />
            <Drawer.Screen 
            name='settings'
            component={Config}
            options={{
                drawerIcon: ({color, size}) => <Feather name='settings' color={color} size={size}/>,
                drawerLabel: 'Configurações'
            }
                
            }
            />
        </Drawer.Navigator>
    )
}

//obs.: no slide 21 antes de rodar o app precisamos ajustar nosso arquivo de rota 