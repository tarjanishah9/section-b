import { View,Text,TextInput,FlatList, Button,StyleSheet, TouchableOpacity} from "react-native";
import { useState } from "react";

export default function App(){
    const [text,setText]=useState("")
    const [selectedId,setSelectedId]=useState(0);
    const [isUpdate,setIsUpdate]=useState(false);
    const [btnText,setBtnText]=useState("Add Item")
    const [flat,setFlat]=useState([{"id":1,"message":"Hello"}])
    const buttonClick=()=>{
       if(!isUpdate)
       {
        const newData= {'id':flat.length+1,'message':text }
        setFlat([...flat,newData]); //spread operator
        setText("")}
        else{
            const newData=flat.map(item=>item.id===selectedId?
                {...item,message:text}:item)
            setFlat(newData)
            setSelectedId(null)
            setText("")  
            setBtnText("Add Item")    
        }
    }
     const deleteData=(id)=>{

        const data=flat.filter(item=>item.id!=id)
        setFlat(data)

     }
     const showDataToUpdate=(item)=>{
        setText(item.message)
        setSelectedId(item.id)
        setIsUpdate(true)
        setBtnText("Update Item")


     }
 
    return(
        <View style={style.container}>
            <TextInput placeholder="Enter Message"
            style={style.textbox} value={text} onChangeText={setText}></TextInput>
            <Button title={btnText} style={style.button}
                onPress={buttonClick}
            ></Button>
            {/* <Button title="Update" style={style.button}
                onPress={updateClick}
            ></Button> */}
            <FlatList data={flat}
            style={{marginTop:10}}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <TouchableOpacity 
                    onPress={()=>showDataToUpdate(item)}
                    
                    onLongPress={()=>deleteData(item.id)}>
                        <View style={{backgroundColor:'green',flex:1,padding:10}}>
                                
                                <Text style={{color:'white'}}>{item.message}</Text>
                                <View style={{height:1,backgroundColor:'white'}}></View>
                        </View> 
                   </TouchableOpacity>
                )}
            ></FlatList>

        </View>
    )

}
const style=StyleSheet.create({
    container:{padding:20},
    textbox:{borderColor:'blue',borderWidth:1,borderRadius:10,margin:10,height:40,padding:10},
    button:{backgroundColor:'blue',color:'white',borderRadius:10}
})