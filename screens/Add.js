import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units'; 
import { ScrollView } from "react-native-virtualized-view";

const Add = () => {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [text3, setText3] = React.useState("");
  const [text4, setText4] = React.useState("");
  const [text5, setText5] = React.useState("");
  const [text6, setText6] = React.useState("");

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
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginLeft: '7%'}}>Thêm sách</Text>
      </View>

      <View style={{marginBottom: vw(20)}}>
      <ScrollView>
        <View style={{
          height: '100%',
          alignSelf: 'center',
          marginTop: vw(24),
          height: vw(86),
          width: vw(86),
          borderWidth: 4,
          borderRadius: 15,
          borderStyle: 'dashed',
          borderColor: '#8A56E6',
          justifyContent: 'center'
        }}>
          <Ionicons name="add" size={62} color='#8A56E6' style={{alignSelf: 'center',}}/>
        </View>

        <View
          style={{
            alignSelf: 'center',
            width: '86%',
            marginTop: vw(8),
          }}>
          <TextInput
            style={{ width: '100%', height: 0, backgroundColor: "white", marginBottom: vw(4), borderRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, textDecoration: 'none' }}
            label="TÊN SÁCH:"
            underlineColor='transparent'
            value={text}
            onChangeText={(text) => setText(text)}
          />
        
          <TextInput
            style={{ width: '100%', height: 0, backgroundColor: "white", marginBottom: vw(4), borderRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, textDecoration: 'none' }}
            label="Thể loại:"
            underlineColor='transparent'
            value={text}
            onChangeText={(text2) => setText2(text2)}
          />

          <TextInput
            style={{ width: '100%', height: 0, backgroundColor: "white", marginBottom: vw(4), borderRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, textDecoration: 'none' }}
            label="Tác giả:"
            underlineColor='transparent'
            value={text}
            onChangeText={(text3) => setText3(text3)}
            />

          <TextInput
            style={{ width: '100%', height: 0, backgroundColor: "white", marginBottom: vw(4), borderRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, textDecoration: 'none' }}
            label="Gửi từ/ Địa chỉ trao đổi: "
            underlineColor='transparent'
            value={text}
            onChangeText={(text4) => setText4(text4)}
          />
          
          <TextInput
            style={{ width: '100%', paddingBottom: vw(30), backgroundColor: "white", marginBottom: vw(4), borderRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, textDecoration: 'none' }}
            label="Gửi từ/ Địa chỉ trao đổi: "
            underlineColor='transparent'
            value={text}
            onChangeText={(text5) => setText5(text5)}
          />

          <TextInput
            style={{ width: '100%', paddingBottom: vw(30), backgroundColor: "white", marginBottom: vw(4), borderRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, textDecoration: 'none' }}
            label="Nhắn nhủ với người mượn: "
            underlineColor='transparent'
            value={text}
            onChangeText={(text6) => setText6(text6)}
          />

        </View>
      </ScrollView>
      </View>
      
    </View>
    </SafeAreaView>
    
  );
};

export default Add;
