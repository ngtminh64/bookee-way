import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units'; 

const SelectedBookScreen = ({ route }) => {
  const selectedBookData = route.params.selectedBookObj;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#8A56E6'}}>
    <StatusBar  barStyle={'light-content'}/>
    <View style={{backgroundColor: '#EFF4FF', height: '100%'}}>
      <View style={{
        paddingBottom: vw(5),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#8A56E6',
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-end',
        height: vw(16),
        zIndex: 1, }}>
        <View style={{flexDirection: 'row', flexWrap: 'nowrap', width: '86%'}}>
          <Ionicons style={{marginLeft: '7%'}} color={"#6E35D1"} name="arrow-back-outline" size={30} onPress={() => navigation.navigate("Home")}/>
          <Text ellipsizeMode='tail' numberOfLines={1} style={{fontSize: 24, fontSize: 20,fontWeight: 'bold', color: 'white', marginLeft: vw(2), width: '90%', overflow: 'hidden', textOverflow: 'ellipsis' }}>{selectedBookData.title}</Text>
        </View>
      
      </View>
      <ScrollView>
        <View style={{marginTop: '20%'}}> 
          
          <View
            style={{
              alignSelf: 'center'
            }}
          >
            <Image style={styles.images} source={{ uri: selectedBookData.story }} />
          </View>
          <View style={{width: '86%', alignSelf: 'center'}}>
            <View style={{marginTop: vw(8)}}>
                <Text style={{color:"black", fontSize: 24,fontWeight:"700"}}>
                  {selectedBookData.title}
                </Text> 
            </View>
            <View style={{marginTop:vw(4)}}>
                <Text style={{color:"black", fontSize: 18,fontWeight:"700"}}>
                    Tác giả: <Text style={{fontWeight: 'normal'}}>{selectedBookData.author}</Text>
                </Text>
                
            </View>
            <View style={{marginTop:vw(4)}}>
                <Text style={{color:"black", fontSize: 18, fontWeight:"700"}}>
                    Tóm tắt: <Text style={{fontWeight: 'normal'}}>{selectedBookData.description}</Text>
                </Text>
                
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

    images: {
      width: 380,
      height: 380,
      borderRadius: 6,
    },
  });

export default SelectedBookScreen;
