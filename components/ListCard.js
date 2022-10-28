import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { lists } from "../data/list";

const ListCard = ({ cardObj }) => {
  const navigation = useNavigation();
  
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
      }}
    >
    
        <FlatList
          numColumns={2}
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            
            return (
              <View style={{ margin: vw(2) }}>
                <View style={styles.card}>
                  <TouchableHighlight
                    onPress={() => {
                      navigation.navigate("SelectedBook", {
                        selectedBookObj: item,
                      });
                    }}
                  >
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                </View>

                <View
                  style={{
                    width: vw(40),
                    // alignItems: "left",
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={{
                      marginTop: 16,
                      color: "black",
                      fontSize: 16,
                      fontWeight: "bold",
                      lineHeight: 18,
                      
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{
                    fontSize: 16,
                    color: '#A4A4A4',
                    marginTop: 4,
                  }}>
                    {item.category}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      marginTop: 4,
                      color: '#747474'
                  }}>Tác giả: {item.author}</Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      marginTop: 4,
                      color: '#747474',
                      
                  }}>Số lượng còn: {item.left}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: vw(40),
    height: vw(40),
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,

  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
});

export default ListCard;
