import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import ListBook from "../components/ListBook";
const ShowSearch = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
    <StatusBar/>
    <View
      style={{
        flex: 1,
        backgroundColor: "#323232",
      }}
    >
      <ListBook />
    </View>
    </SafeAreaView>
    
  );
};

export default ShowSearch;
