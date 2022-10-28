import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
// import { StatusBar } from 'expo-status-bar';
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import ListCard from "../components/ListCard";
import ListCard2 from "../components/ListCard2";
import { SafeAreaView } from "react-native-safe-area-context";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { lists } from "../data/list";

const Home = () => {
  const [showMore, setShowMore] = useState(false)
  const ShowList = () => {
    if (showMore) {
      return (
        <ListCard/>
      )
    } else {
      return (
        <ListCard2/>
      )
    }
  }
  const ShowListText = () => {
    if (!showMore) {
      return (
        <Text style={{color: 'white', fontWeight: 'bold'}}>Xem thêm</Text>
      )
    } else {
      return (
        <Text style={{color: 'white', fontWeight: 'bold'}}>Thu gọn</Text>
      )
    }
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#8A56E6'}}>
    <StatusBar
        barStyle={'light-content'}
        />
    
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* account */}
      <View style={{
        paddingBottom: vw(5),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#8A56E6',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          alignSelf: 'center',
          position: 'relative',
          marginTop: vw(1),
        }}>
          <Image
              style={style.accountPic}
              source={require('../assets/tuanminh.png')}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Chào Tuan Minh</Text>
            <Text style={{fontSize: 14, color: 'white', marginTop: vw(1.5)}}>Đống Đa, Hà Nội, Việt Nam</Text>
          
          {/* Way to bookmark */}
          </View>
          <Ionicons style={{position: 'absolute', right: '5%',}} name="bookmarks" size={vw(8)} color="white" />
          <View />
          
        </View>
      </View>
      
      <ScrollView>
      {/* main */}
      <View style={{ alignItems: 'center', backgroundColor: '#EFF4FF'}}>
        {/* For you */}
        <View style={style.forYou}>
          <Text style={{
            marginTop: vw(30),
            fontSize: 20,
            fontWeight: 'bold',
            letterSpacing: 0.25,
          }}>Dành cho bạn</Text>
          <View>
            {/* listcard */}
            <View style={style.forYouObject}>
              <View style={{height: '70%', width: '70%', marginBottom: vw(4)}}>
                <Image style={{height: '100%', width: '100%',}}
                source={{uri: lists[7].story}}/>
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginHorizontal: vw(4),}}>{lists[7].title}</Text>
              <Text style={{fontSize: 16}}>{lists[7].category}</Text>
              <Text style={{fontSize: 16}}>{lists[7].author}</Text>
            </View>
          </View>
        </View>

        {/* Most borrow  */}
        <View>
          <Text style={style.headText}>Sách được mượn nhiều nhất</Text>
          {ShowList()}
          <View style={{height: vw(14), width: vw(74), backgroundColor: '#6E35D1', alignSelf: 'center', borderRadius: 15, justifyContent: 'center', marginTop: vw(4)}}>
            <Button 
            onPress={()=>{setShowMore(!showMore), console.log(showMore);}}>{ShowListText()}</Button>
          </View>
         
        </View>

        {/* Category */}
        <View>
           
        </View>
        <View style={{height: vw(50)}}></View>
      </View>
      </ScrollView>
    </View>
    
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  accountPic: {
    width: vw(20),
    height: vw(20),
    borderRadius: 10000,
    marginRight: vw(2.5),
    marginLeft: '5%'
  },
  forYou: {
    backgroundColor: '#DAEDFF',
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginTop: vw(10),
    marginLeft: vw(2)
  },
  forYouObject: {
    height: vw(100),
    width: vw(80),
    marginBottom: vw(6),
    marginTop: vw(2),
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
})

export default Home;
