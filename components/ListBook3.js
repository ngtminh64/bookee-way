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
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-virtualized-view";

const ListBook2 = ({ cardObj }) => {
  const navigation = useNavigation();
  const [lists, setList] = useState([
    {
      id: "1",
      story: "https://cf.shopee.vn/file/bfc963c6c5997120a0901f731610bafe",
      title: " Hình học 12 ",
      author: "Đoàn Quỳnh",
    },
    {
      id: "2",
      story: "https://cf.shopee.vn/file/65ec34dd140ddfffac82696b460353a5",
      author: "Hình học 11",
      title: "Tài liệu chuyên toán",
    },
    {
      id: "3",
      story:
        "https://wiseenglish.edu.vn/wp-content/uploads/2022/01/CAMBRIDGE-IELTS-17.jpg",
      author: "Many",
      title: "Cambridge ielts 17",
    },
    {
      id: "4",
      story: "https://wiseenglish.edu.vn/wp-content/uploads/2021/04/cam-16.jpg",
      author: "Many",

      title: "Cambridge ielts 16",
    },
    {
      id: "5",
      story:
        "https://edutrip.edu.vn/wp-content/uploads/2021/01/Bia-Cam-15-Moi-2021.jpg",
      author: "Many",
      title: "Cambridge ielts 15",
    },
    {
      id: "6",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408866184.jpg",
      author: "JK Rowling",

      title: "Harry Potter ",

      description: "",
    },
    {
      id: "7",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855904.jpeg",
      author: "JK Rowling",

      title: "Harry Potter",

      description: "",
    },
    {
      id: "8",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855676.jpg",
      author: "JK Rowling",

      title: "Harry Potter",

      description: "",
    },
    {
      id: "9",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855928_thanh_ly.jpeg",
      author: "JK Rowling",

      title: "Harry Potter",

      description: "",
    },
    {
      id: "10",
      story:
        "https://ironhackvietnam.edu.vn/wp-content/uploads/2021/03/sach-hoc-lap-trinh.jpg",
      author: "JK Rowling",

      title: "Tớ học lập trình",

      description: "",
    },
  ]);
  return (
    <View
      style={{
        justifyContent: "center",
      }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 14, flexDirection: "row" }}>
                <View>
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
                <View style={{ margin: 14 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: 20,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
  },
  images: {
    width: 180,
    height: 180,
    borderRadius: 6,
  },
});

export default ListBook2;
