import {SafeAreaView} from 'react-native-safe-area-context'
import { Text } from 'react-native';

export default  function App(){
    return(
        <SafeAreaView>
                <MyText name="aa"></MyText>

        </SafeAreaView>
    );
}
function MyText({name}){
    return (
    <Text>Hello From React Native Home Screen {name="Test"}</Text>
);
}
