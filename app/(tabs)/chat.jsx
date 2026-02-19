import {  useState } from 'react'
import {Text,Button, FlatList, StyleSheet, TextInput, View,ImageBackground} from 'react-native'

export default function App(){
    const [myMsg,setMyMsg]=useState("")
    const [urMsg,setUrMsg]=useState("")
   
    const [data,setData]=useState([{"id":1,"message":"Test"}])
    const sendMessage=(align)=>{
       
        
        if(align ==='left'){
           const  newData= {'id':data.length+1,'message':urMsg,
            'align':align }
           setData([...data,newData]);
           setUrMsg("")git 
        }
        else{
            const newData= {'id':data.length+1,'message':myMsg,'align':align }
             setData([...data,newData]);
             setMyMsg("")
        }
         //spread operator
    
    }
        return(
        <View style={{padding:20}}>
            <View style={{flex:1}}>
                <ImageBackground source={{'uri':'https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg'}}>
                <FlatList data={data}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                   <View style={{backgroundColor:'rgba(125,11,55,0.6)',flex:1,padding:10}}>
                                
                        <Text style={{color:'white',
                        textAlign:item.align==='left'?'left':'right'


                        }}>{item.message}</Text>
                        <View style={{height:1,backgroundColor:'white'}}></View>
                        </View> 
                 
                )}
                >

                </FlatList>
                </ImageBackground>
                <View style={{flex:1,flexDirection:'row'}}>
                    <TextInput 
                        style={style.input}
                        value={myMsg}
                        onChangeText={setMyMsg}
                    placeholder='Enter My Message'></TextInput>
                    <Button title='Send' style={style.btn}
                        onPress={()=>sendMessage('right')}
                    ></Button>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    <TextInput placeholder='Enter Your Message'
                     value={urMsg}
                     onChangeText={setUrMsg}
                     style={style.input}></TextInput>
                    <Button title='Send' style={style.btn} 
                    onPress={()=>sendMessage('left')}></Button>
                </View>
                
            </View>

        </View>
    )
}
const style=StyleSheet.create({
    btn:{backgroundColor:'cyan',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        margin:10,
        flex:1,
        borderRadius:2
    },
    input:{
        flex:1,
        borderColor:'black',
        borderWidth:1,
        padding:10,
        margin:10,
        borderRadius:8
    }
})