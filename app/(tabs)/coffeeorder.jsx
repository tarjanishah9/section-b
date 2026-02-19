import {SafeAreaView} from 'react-native-safe-area-context'
import { Button, StyleSheet, Text ,TextInput,View,Alert, Platform} from 'react-native';
import { useState } from 'react';


export default  function App(){
    const [data,setText]=useState('hello');
    function btnClick(){
        if(Platform.OS=="web")
        {
            window.alert("Are you sure "+data +" ?");
                
        }else{
            Alert.alert("My Title","Are you sure "+data +" ?",[
            {text:'Yes',onPress:()=>alert('Yes clicked..')},
            {text:'No',onPress:()=>alert('No clicked..')}

            ]);
        }
    console.log("My Button is clicked..");
}
    return(
        <SafeAreaView>
            <TextInput 
            onChangeText={setText}
            style={styles.text} placeholder='Enter Your Name'></TextInput>
            <Text>{data}</Text>
            <Button title='Login' color='green'
                onPress={btnClick}
            ></Button>
              {/* <OrderCoffee size="medium" strong="extra" sugar="no"></OrderCoffee>
              <OrderCoffee size="large" strong="normal" sugar="less"></OrderCoffee>
              <OrderCoffee size="small" strong="medium" sugar="normal"></OrderCoffee> */}
         </SafeAreaView>
    );
}

function OrderCoffee(props){
    return (
    <View style={styles.container}>
        <Text>Coffee Size:  {props.size}</Text>
        <Text>Coffee Strongness : {props.strong}</Text>
        <Text>Coffee Sugar : {props.sugar}</Text>
    </View>
);
}
const styles=StyleSheet.create({
    text:{borderRadius:20,
        borderColor:'black',
        borderWidth:3,
        padding:10,
     
    },
    container:{backgroundColor:'rgb(10,155,10)',
        borderRadius:25,
        borderColor:'black',
        borderWidth:3,
        padding:10,
        margin:10,
        

    }
})
