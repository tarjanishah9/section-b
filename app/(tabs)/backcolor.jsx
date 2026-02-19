import {SafeAreaView} from 'react-native-safe-area-context'
import { Button, StyleSheet, Text ,TextInput,View} from 'react-native';
import { useState } from 'react';

export default function Calculator(){
    const [r,setR]=useState('');
    const [g,setG]=useState('');
    const [b,setB]=useState('');
    const [back,setBack]=useState("rgb(0,0,0)");
   
    const change=()=>{
        setBack(`rgb(${r},${g},${b})`)};
    

    return(
        <SafeAreaView style={{backgroundColor:back}}>
            <View style={styles.container}>
                <Text>Enter Red Color :</Text>
                <TextInput style={styles.text} value={r} onChangeText={setR}></TextInput>
                <Text>Enter Green Color :</Text>
                <TextInput style={styles.text} value={g} onChangeText={setG}></TextInput>
                <Text>Enter Blue Color :</Text>
                <TextInput style={styles.text} value={b} onChangeText={setB}></TextInput>
                <View >
                    <View style={styles.mainButtons}>
                        <Button title='Change' onPress={change}></Button>
                    </View>
                </View>
                           

            
            </View>


        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    textSize:{fontSize:20,color:'white'},
    main:{
        flex:1,
        
    },
    text:{borderRadius:9,
        borderColor:'black',
        borderWidth:1,
        padding:10,
     
    },
    mainButtons:{
        margin:10,
        flexDirection:'row',
       
        justifyContent:'space-around',

        
       
    },
    container:{
        flex:1,
        padding:10,
       
        
        borderColor:'black',
        borderWidth:2,
        }
})