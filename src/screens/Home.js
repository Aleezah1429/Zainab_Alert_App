import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Image, TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home = (props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <View >
      <Text style={styles.logo}>
        ZAINAB
        <Text style={{ color: "#00cc99" }}> ALERT</Text>
      </Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, }}>
        <View style={{ height:100, marginTop: 200, width: 100, borderRadius: 20, backgroundColor:"#00cc99"}}> 
          <TouchableOpacity onPress={()=>props.navigation.navigate("ChildFound")} style={{margin:10}}>
            <Image style={styles.image} source={require("../assets/Found.png")} />
          </TouchableOpacity>
          <Text style={styles.Image_Heading}>Report Found Child</Text>
        </View>
        <View style={{ height:100, marginTop: 200, width: 100, marginLeft: 35, borderRadius: 20, backgroundColor:"#00cc99"}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("ChildLost")} style={{margin:10}}>
            <Image style={styles.image} source={require("../assets/missing.png")} />
          </TouchableOpacity>
          <Text style={styles.Image_Heading}>Report Missing Child</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  image:{
      width:80,
      height:80
  },
  logo: {
    textAlign: "center",
    fontSize: 40,
    marginTop: 20,
    fontWeight: "bold",
    color: "white"
  },
  Image_Heading : {
    color: "#00cc99",
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold"

  }

});



export default Home;
