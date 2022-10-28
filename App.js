import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./screens/logo";
import Splash from "./screens/Splash";
import SignIn from "./screens/Signin";
import SignUp from "./screens/Signup";
import Home from "./screens/Home";
import RootStack from "./routes/Stack";
import ListBook from "./components/ListBook";

export default function App() {
  return <RootStack />;
}
