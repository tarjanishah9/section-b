import {SafeAreaView} from 'react-native-safe-area-context'
import { Button, StyleSheet, Text ,TextInput,View} from 'react-native';
import { useState } from 'react';

export default function Calculator(){
    const [n1,setN1]=useState('');
    const [n2,setN2]=useState('');
    const [result,setResult]=useState(0);

    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <Text>Enter First No :</Text>
                <TextInput style={styles.text} value={n1} onChangeText={setN1}></TextInput>
                <Text>Enter Second No :</Text>
                <TextInput style={styles.text} value={n2} onChangeText={setN2}></TextInput>
                <View >
                    <View style={styles.mainButtons}>
                        <Button title='Addition' onPress=
                            {()=>{setResult(Number(n1)+Number(n2))}}>

                        </Button>
                        <Button title='Subtraction'onPress=
                            {()=>{setResult(Number(n1)-Number(n2))}}>
                        </Button>
                    </View>
                    
                    <View style={styles.mainButtons}>
                        <Button title='Multiplication'onPress=
                            {()=>{setResult(Number(n1)*Number(n2))}}>

                        </Button>
                        <Button title='Division' onPress=
                            {()=>
                            Number(n2)===0?
                            setResult("Not possible"):
                            setResult(Number(n1)/Number(n2))}>
                        </Button>
                    </View>
                </View>
                <Text style={styles.textSize}>Answer : {result}</Text>


            
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
        backgroundColor:'rgba(10,10,155,0.6)',
        
        borderColor:'black',
        borderWidth:2,
        }
})