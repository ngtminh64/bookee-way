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
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const Separator = () => (
  <View style={styles.separator} />
);

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
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
        Chào mừng bạn đến với:
        </Text>
        <Text style={{ color: "#8B558E", fontWeight: "bold", fontSize: 26 }}>
        Bookee Way</Text>
        <Text style={{ marginTop: vw(4),color: "#9D9D9D", fontWeight: "700", fontSize: 20 }}>
        Đăng nhập để tiếp tục
        </Text>
      </View>


      <View style={{ marginTop: vw(20), alignItems: "center" }}>
        <TextInput
          label={"Tên tài khoản"}
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
          label={"Mật khẩu"}
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
          Đăng nhập{" "}
        </Button>
      </View>

      <View style={{width: '86%', alignItems: 'center', alignSelf: 'center', marginTop: vw(12),}}>
        <Text style={{color: '#AAAAAA', fontSize: 16, }}>
          hoặc tiếp tục với
        </Text>
        {/* login with other */}
        <View> 
          <View style={{flexDirection:'row', marginTop: vw(2), marginBottom: vw(4)}}>
            <Image
            style = {{width: vw(8), height: vw(8), marginRight: vw(6)}}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'}}
            />
            <Image
            style = {{width: vw(8), height: vw(8)}}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png'}}
            />
          </View>
        </View>
        <Text style={{color: '#AAAAAA', fontSize: 16, fontWeight: 'bold'}}>
          Bạn quên mật khẩu?
        </Text>
        <View style={{position: 'relative', marginVertical: vw(4)}}>
          <Separator/>
          <Text style={{color: '#AAAAAA', fontSize: 16, alignSelf: 'center', position: 'absolute', paddingHorizontal: vw(4), backgroundColor: 'white'}}>hoặc</Text>
        </View>
        <View>
          <Text style={{color: '#AAAAAA', fontSize: 16, fontWeight: 'bold'}}>Bạn không có tài khoản?</Text>
          <Button 
            onPress={() => navigation.navigate("Sign up")}>
            Đăng ký</Button>
        </View>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: vw(2),
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: vw(86),
  },
})
export default SignIn;