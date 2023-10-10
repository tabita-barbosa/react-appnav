import { createStackNavigator } from '@react-navigation/stack';

//vamos importar também nosso Profile
import Profile from '../screens/Profile';

// vamos criar uma const e chama-la de Stack do tipo createStackNavigator
const Stack = createStackNavigator();

//agora vamos criar um export padrão
export default function StackRouters(){
    return(
        // então aqui dentro iremos chamar a nossa Stack
        <Stack.Navigator screenOptions={{headerShown: false}}> 
            <Stack.Screen 
            // dai dentro deste cara vamos chamar outra tela, a nossa Profile
            name='home'
            component={Profile} 
            />
        </Stack.Navigator>
    )
}

