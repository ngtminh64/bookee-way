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
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
    <StatusBar/>
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={{ top: vw(1), left: vw(8) }}>
        <Ionicons
          name="arrow-back-outline"
          size={28}
          color={"#8B558E"}
          onPress={() => navigation.navigate("Splash")}
        />
        <Text style={{ marginTop: vw(4),color: "#8B558E", fontWeight: "bold", fontSize: 26 }}>
        Chào mừng bạn đăng ký
        </Text>
        <Text style={{ color: "#8B558E", fontWeight: "bold", fontSize: 26 }}>
        Bookee Way</Text>
        <Text style={{ marginTop: vw(4),color: "#9D9D9D", fontWeight: "700", fontSize: 20 }}>
        Vui lòng nhập thông tin
        </Text>
      </View>

      <View style={{ marginTop: vw(20), alignItems: "center" }}>
        <TextInput
          label={"Email"}
          value={pass}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
          style={{
            backgroundColor: "#fff",
            width: vw(86),
            height: vw(15),
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#EAEAEA',
          }}
        ></TextInput>
      </View>

      <View style={{ marginTop: vw(4), alignItems: "center" }}>
        <TextInput
          label={"Password"}
          value={pass}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
          style={{
            backgroundColor: "#fff",
            width: vw(86),
            height: vw(15),
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#EAEAEA',
          }}
        ></TextInput>
      </View>

      <View style={{ marginTop: vw(4), alignItems: "center" }}>
        <TextInput
          label={"Enter password again"}
          value={pass}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
          style={{
            backgroundColor: "#fff",
            width: vw(86),
            height: vw(15),
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#EAEAEA',
          }}
        ></TextInput>
      </View>

      <View style={{ marginTop: vw(6), alignItems: "center" }}>
        <Button
          style={{
            borderRadius: 6,
            width: vw(86),
            height: vw(15),
            backgroundColor: "#A49CF2",
            justifyContent: "center",
          }}
          mode="contained"
          onPress={() => navigation.navigate("Tabs")}
        >
          {" "}
          Đăng ký{" "}
        </Button>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

export default SignUp;
