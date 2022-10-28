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
import ListBook2 from "../components/ListBook2";
const Read = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
    <StatusBar/>
    <View
      style={{
        flex: 1,
        backgroundColor: "#323232",
      }}
    >
      <ListBook2 />
    </View>
    </SafeAreaView>
    
  );
};

export default Read;
