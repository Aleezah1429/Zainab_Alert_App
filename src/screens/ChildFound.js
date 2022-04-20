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

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ChildFound = () => {

    const [childName, setChildName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [city, setCity] = useState("");


    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    const Submit = () => {
        console.log(childName, fatherName, gender, age, phoneNo, city)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ childName, fatherName, gender, age, phoneNo, city })
        };
        fetch('http://localhost:8001/ChildFound', requestOptions)
            .then(response => response.json())
            // .then(data => setMsg(data.message));

    }

    return (
        <ScrollView>
            <Text style={styles.logo}>
                Report Fou
                <Text style={{ color: "#00cc99" }}>nd Child</Text>
            </Text>
            {/* <form> */}
            <View>
                <Text style={styles.text}>Child Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => { setChildName(e) }}
                    // value={number}
                    placeholder="Child Name"
                />
            </View>
            <View>
                <Text style={styles.text}>Father Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => { setFatherName(e) }}
                    // value={number}
                    placeholder="Father Name"
                />
            </View>
            <View>
                <Text style={styles.text}>Gender</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => { setGender(e) }}
                    // value={number}
                    placeholder="Gender"
                />
            </View>
            <View>
                <Text style={styles.text}>Age</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => { setAge(e) }}
                    // value={number}
                    placeholder="Age"
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.text}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => { setPhoneNo(e) }}
                    // value={number}
                    placeholder="Phone Number"
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.text}>City</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => { setCity(e) }}
                    // value={number}
                    placeholder="City"
                />
            </View>
            <View style={styles.button}>
                <Button
                    color="#00cc99"
                    title="Submit"
                    onPress={() => Submit()} />
            </View>

            {/* </form> */}
        </ScrollView>

    );
};


const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderWidth: 1,
        padding: 10,
        height: 45,
        width: 300,
        borderRadius: 30,
        backgroundColor: "#00cc99",

    },
    logo: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
    },
    text: {
        marginLeft: 22,
        fontSize: 15
    },
    button: {
        width: 100,
        borderRadius: 10,
        textAlign: "center",
        justifyContent: 'center',
        marginRight: 80,
        marginLeft: 120,
        marginTop: 20,
        marginBottom: 50
    }

});



export default ChildFound;
