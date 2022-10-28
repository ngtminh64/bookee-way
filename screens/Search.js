import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { ScrollView } from "react-native-virtualized-view";


// const data = {
//   categoryId: 'TIỂU THUYẾT',
//   categoryBook: [
//     {
//       id: "6",
//       story:
//         "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408866184.jpg",
//       author: "JK Rowling",
//       category: 'Truyện, tiểu thuyết',
//       left: '04',
//       description: '“Harry Potter và hòn đá phù thủy” là cuốn đầu trong loạt tiểu thuyết “Harry Potter” và là tiểu thuyết đầu tay của J. K Rowling. Cuốn sách mang đến cho mọi người những câu chuyện về cậu bé phù thủy Harry Potter và những thứ xảy ra xung quanh cuộc sống của cậu. Dành cho trẻ em, song lại gợi ra những bài học dành cho cả người lớn. Hành trình với những cuộc phiêu lưu vào thế giới giả tưởng để tạo ra một câu chuyện hấp dẫn cho mọi người.',
//       title: "Harry Potter And The Philosophers Stone",

    
//     },
//     {
//       id: "7",
//       story:
//         "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855904.jpeg",
//       author: "JK Rowling",
//       category: 'Truyện, tiểu thuyết',
//       left: '01',
//       description: '“Harry Potter” là một huyền thoại chắc hẳn ai cũng biết, nó để lại dấu ấn khó quên trong lòng khán giả. Tiếp nối thành công của tập một “Harry Potter và hòn đá phù thủy”, tác giả J. K Rowling cho ra mắt “Harry Potter và Phòng chứa Bí mật” là tập thứ hai trong series truyện nổi tiếng “Harry Potter".',
//       title: "Harry Potter and the Chamber of Secrets",

    
//     },
//     {
//       id: "8",
//       story:
//         "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855676.jpg",
//       author: "JK Rowling",
//       category: 'Truyện, tiểu thuyết',
//       left: '22',
//       description: 'Harry Potter và tên tù nhân ngục Azkaban là một cuốn tiểu thuyết thuộc thể loại giả tưởng được viết bởi J.K. Rowling, đây cũng là tập thứ 3 trong bộ truyện Harry Potter. Quyển sách theo chân Harry Potter, cậu phù thủy nhỏ, trong năm học thứ ba của mình tại Hogwarts. Cùng với hai người bạn thân là Ronald Weasley và Hermione Granger, Harry phát hiện ra Sirius Black, là tù nhân trốn chạy từ ngục Azkaban, người được tin rằng là một trong những tay sai của chúa tể Voldemort.',
//       title: "Harry Potter and the Prisoner of Azkaban",

    
//     },
//     {
//       id: "9",
//       story:
//         "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855928_thanh_ly.jpeg",
//       author: "JK Rowling",
//       category: 'Truyện, tiểu thuyết',
//       left: '31',
//       description: 'Harry Potter và chiếc cốc lửa là một quyển sách thuộc thể loại giả tưởng được viết bởi J.K. Rowling, đây cũng là tập thứ tư trong bộ truyện Harry Potter. Câu chuyện kể về cậu bé Harry Potter, cậu phù thủy nhỏ, trong năm học thứ tư của mình tại Hogwarts cùng với những bí ẩn xung quanh việc thêm tên Harry vào giải đấu Tam Pháp Thuật, buộc cậu phải nỗ lực hết mình để chiến đấu.',
//       title: "Harry Potter and the Goblet of Fire",
//     },
//     {
//       id: "10",
//       story:
//         "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855935.jpeg",
//       author: "JK Rowling",
//       category: 'Truyện, tiểu thuyết',
//       left: '01',
//       description: 'Tập truyện Harry Potter và Hội Phượng Hoàng được xem là dài nhất trong series Harry Potter, dài đến hơn 1300 trang. Bên cạnh đó, nội dung trong bộ truyện này vẫn được khai thác khá giống với các phần truyện trước, khi kể về một năm học của Harry tại ngôi trường phép thuật Hogwarts. Một chi tiết thú vị nữa, đó là người đọc sẽ được chứng kiến khả năng đấu tay đôi giữa Dumbledore và Voldemort, những trận chiến khốc liệt, đi kèm với đó là những cái chết đau thương đã thật sự làm nên sự thú vị cho phần truyện này.',
//       title: "Harry Potter and the Order of the Phoenix",
//     },
//   ]
// }

const Search = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#8A56E6'}}>
    <StatusBar barStyle={'light-content'}
        />
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{
        paddingBottom: vw(5),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#8A56E6',
        position: 'absolute',
        // marginTop: vw(4),
        width: '100%',
        height: vw(26),
        zIndex: 1, }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', marginLeft: '7%'}}>Danh mục</Text>
        <Searchbar
            placeholder="Tìm kiếm"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ height: vw(12), width: '86%', alignSelf: 'center', marginVertical: vw(3) }}
        />
      </View>

      {/* Content goes here */}
      <ScrollView>
        <View style={{marginTop: vw(28), flexDirection: 'row', width: '86%', alignSelf: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'orange',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#EB5900',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>ngoại ngữ</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://wiseenglish.edu.vn/wp-content/uploads/2022/01/CAMBRIDGE-IELTS-17.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#FC4972',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>tham khảo</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://book.sachgiai.com/uploads/book/nhung-bai-van-mau-12-tap-1/nhung-bai-van-mau-12-tap-1-0.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#12B546',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>kĩ năng sống</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://images.thuvienpdf.com/12JOC1W83w.webp'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#E4AD87',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>ngoại ngữ</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://toplist.vn/images/800px/hack-nao-1500-tu-tieng-anh-266984.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'orange',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>luật pháp</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://www.nxbctqg.org.vn/img_data/images/408963891739_dau-thau.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#EB5900',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#FC4972',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#12B546',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          <View style={{
            width: vw(40),
            height: vw(50),
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            borderRadius: 6,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#E4AD87',
            marginTop: vw(8)}}>
            <Text style={{
              textTransform: 'uppercase',
              color: 'white',
              fontSize: '18',
              fontWeight: 'bold'
            }}>Tiểu thuyết</Text>
            <Image
            style={style.CategoryImages}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567777635l/50847731._SX0_SY0_.jpg'}}/>
          </View>
          
        </View>
      </ScrollView>


   
          
    </View>

        {/* </View>
        <View style={{ marginTop: 27, left: 25 }}>
          <Text style={{ color: "#ffffff", fontWeight: "600" }}>Category</Text>
        </View>

        <View style={{ marginTop: 26, flexDirection: "row" }}>
          <View style={{ left: 25 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Showing")}
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>

          <View style={{ left: 30 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Showing")}
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>

          <View style={{ left: 35 }}>
            <TouchableOpacity
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Showing")}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>
        </View> */}

    </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  CategoryCard: {
    width: vw(40),
    height: vw(50),
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  CategoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CategoryImages: {
    width: '65%',
    height: '65%',
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    
  }
})
export default Search;

// const styles = StyleSheet.create({
//   card: {
//     width: vw(40),
//     height: vw(40),
//     backgroundColor: "white",
//     borderColor: "#cccccc",
//     borderWidth: 1,
//     borderRadius: 6,

//   },
//   images: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 6,
//   },
// });