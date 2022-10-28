import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { ScrollView } from "react-native-virtualized-view";
import ListCard from "../components/ListCard";

const Separator = () => (
  <View style={styles.separator} />
);

const Account = () => {
  const [accountCategory, setAccountCategory] = useState(true);
  
  if (accountCategory) {
    
  } else {
    
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#8A56E6'}}>
    <StatusBar
        barStyle={'light-content'}
        />
        
    <ScrollView  style={{backgroundColor: '#EFF4FF', height: '100%'}}>
    <View>
      <View style={{
        paddingBottom: vw(5),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#8A56E6',
        position: 'absolute',
        width: '100%',
        // height: vw(26),
        zIndex: 1,
        alignItems: 'center',
        }}>

        <Image
          style={styles.accountPic}
          source={require('../assets/tuanminh.png')}/>

        <View style={{ marginTop: vw(4) }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Nguyen Tuan Minh</Text>
        </View>

        <View style={{width: '78%',}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: vw(4)}}>
            <Ionicons name="ios-call-outline" size={24} color="white" />
            <Text style={{color: 'white', marginLeft: vw(2), fontSize: 16}}>098212348</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: vw(2)}}>
            <Ionicons name="ios-location-outline" size={24} color="white" />  
            <Text style={{color: 'white', marginLeft: vw(2), fontSize: 16}}>Số 9, tòa nhà Sunshine, phố Vũ Phạm Hàm, Cầu GIấy, Hà Nội</Text>
          </View> 
        </View>
      </View>
    
    {/* Content */}
      <View style={{marginTop: vw(72), width: '88%', alignSelf: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{alignItems: 'center', width: '50%'}}>
            <Button
            style={{width: '100%'}}
            onPress={()=>{setAccountCategory(true); console.log('hehe')}}><Text style={{fontWeight: 'bold'}}>Sách của bạn</Text></Button>
            <Separator/>
          </View>
          <View style={{alignItems: 'center', width: '50%'}}>
            <Button
            style={{width: '100%'}}
            onPress={()=>{setAccountCategory(false); console.log('hehe')}}>Sách đang mượn</Button> 
            <Separator/>
          </View>
        </View>
        <View>
          <ListCard/>
        </View>
      </View>

    </View>
    </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  accountPic: {
    width: vw(30),
    height: vw(30),
    borderRadius: 10000,
    marginTop: vw(1.5)
  },
  container: {
    flex: 1,
    backgroundColor: "#A49CF2",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flex: 2,
    backgroundColor: "#323232",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  separator: {
    width: vw(35),
    borderBottomColor: '#737373',
    borderBottomWidth: 1
  },
});

export default Account;
