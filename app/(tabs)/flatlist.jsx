import {Text,View,Image,FlatList, useWindowDimensions} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App(){
    const {width}=useWindowDimensions()
    const cols=5
    const size=width/cols
    const student=[
        {'id':1,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':2,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':3,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':4,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':5,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},

        {'id':6,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':7,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':8,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':9,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':10,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},
        {'id':11,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':12,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':13,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':14,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':15,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},
        {'id':16,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':17,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':18,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':19,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':20,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},

    ]
    return(
        <SafeAreaView>
        <View >
            <FlatList
            showsHorizontalScrollIndicator={true}
            data={student}
           
            horizontal
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image source={{'uri':item.url}} 
                    style={{height:100,width:100,borderWidth:1,borderColor:'rgba(255,255,255,0.6)'}}></Image>
                    <Text>{item.fname}</Text>
                    <Text>{item.lname}</Text>
                </View>

            )}  
            >
            
            </FlatList>
        </View>
        </SafeAreaView>
    )
}