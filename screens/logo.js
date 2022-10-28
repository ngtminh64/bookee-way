import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, ImageBackground, } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

function Logo({ navigation }) {
    setTimeout(() => {
        navigation.navigate("Splash")
    }, 2000);
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
    <StatusBar/>
    <View style={{height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'space-evenly'}}>
      <View style={{
        height: vw(50),
        width: vw(50),
        alignSelf: 'center',    
      }}>
        <Image style={{height: '100%', width: '100%',}} source={require("../assets/icon.png")} />
      </View>
    </View>
    </SafeAreaView>
    
  );
}

export default Logo;
