import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons name="chevron-back" size={32} color="#E94057" />
          </View>
          <View style={styles.headerRight}>
            <Entypo name="menu" size={32} color="#E94057" />
          </View>
        </View>
        <View style={styles.swipeBox}>
          <View style={styles.image}></View>
          <View style={styles.info}>
            <Text style={styles.name}>Denisa Toma, 23</Text>
            <Text style={styles.work}>Professional Model</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Entypo name="cross" size={48} color="#E94057" />
          </View>
          <View style={styles.button}>
            <FontAwesome name="heart" size={48} color="#BC7BE4" />
          </View>
          <View style={styles.button}>
            <FontAwesome name="star" size={48} color="#8A2387" />
          </View>
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={styles.navbarItem}>
          <MaterialCommunityIcons name="view-gallery" size={32} color="#BC7BE4" />
          <AntDesign name="heart" size={32} color="#ADAFBB" />
          <MaterialIcons name="message" size={32} color="#ADAFBB" />
          <FontAwesome name="user" size={32} color="#ADAFBB" />
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#1E1E1E',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 40,
    // paddingVertical: 40,
  },
  header: {
    // height: 100,
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  headerLeft: {
    // height: 50,
    // width: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  headerRight: {
    // height: 50,
    // width: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  content: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    // marginTop: 40,
    // height: '80%',
    // borderRadius: 10,
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  swipeBox: {
    borderRadius: 10,
    // marginTop: 40,
    // height: '100%',
    backgroundColor: '#fff',
  },
  image: {
    height: '80%',
    backgroundColor: '#E94057',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  work: {
    fontSize: 24,
    color: '#A09FB1',
  },
  navbar: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  navbarItem: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
  }
});
