import React, { useContext, useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
} from 'react-native';
import storage from '@react-native-firebase/storage';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';

const Result = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [result, setResult] = useState([{ FoundChildId: "Ahmed-Found-2126", MissingChildId: "Ahmed-Lost-2292" }]);


    return (
        <ScrollView>
            <Text style={styles.logo}>
                Res
                <Text style={{ color: "#00cc99" }}>ult</Text>
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                <View>
                    <Text style={styles.Heading}>Found</Text>
                </View>
                <View>
                    <Text style={styles.Heading}>Missing</Text>
                </View>
            </View>
            {result.map((item) => {
                return(
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop:10}}>
                    <View>
                        <Text>{item.FoundChildId}</Text>
                    </View>
                    <View>
                        <Text>{item.MissingChildId}</Text>
                    </View>
                </View>
                )
            })}


        </ScrollView>

    );
};


const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80
    },
    logo: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
    },
    // Image_Info: {
    //     color: "#00cc99",
    //     textAlign: "center",
    //     marginTop: 15,
    //     fontSize: 20,
    //     fontWeight: "bold"

    // },
    Heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00cc99"
    },


});



export default Result;
