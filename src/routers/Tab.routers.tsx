//vamos iniciar importando no componente "createBottomTabNavigator"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

//vamos importar nossas telas 
import Config from '../screens/Config';
import Feed from '../screens/Feed';
import New from '../screens/New';

//vamos criar tbm aqui uma variavel constante do tipo createBottomTabNavigator
const Tab = createBottomTabNavigator();

// agora vamos exportar, vamos exportar por padrão mesmo, vamos chama-la de TabRouters
export default function TabRouters(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
            name='feed'
            component={Feed}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                tabBarLabel: 'Inicio'
            }}
            />
            <Tab.Screen
            name='new'
            component={New}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size}/>,
                tabBarLabel: 'Novo'
            }}
            />
            <Tab.Screen
            name='settings'
            component={Config}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='settings' color={color} size={size}/>,
                tabBarLabel: 'Configurações'
            }}
            />
        </Tab.Navigator>
    );
};
