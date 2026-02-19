import { View,Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import img from "@/assets/images/imagemain.png";
import { Redirect } from "expo-router";

export default  function App(){
  return (
    <Redirect href="/backcolor"></Redirect>
    
  );
}