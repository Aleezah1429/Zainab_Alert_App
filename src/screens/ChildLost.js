import React from 'react';
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
    Button
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
import { useState } from 'react';


const ChildLost = () => {
    const [childId, setChildId] = useState("")
    const [childName, setChildName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [city, setCity] = useState("");

    // state for disable button
    const [disable, setDisable] = useState(true)

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    // ___Child Image Select Func___
    const selectImage = async () => {
        var myChildID = `${childName}-Lost-${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
        await setChildId(myChildID)
        const options = {
            title: 'Select Child Images',
            storageOptions: {
                skipBackup: true,
                path: 'images',

            },

        };
        const response = await MultipleImagePicker.openPicker(options);
        console.log('Response = ', response);
        response.forEach(async (res) => {
            console.log("path", res.realPath)
            const reference = storage().ref(`ChildMissing/${myChildID}/${res.fileName}`);
            await reference.putFile(res.realPath)
        })

    }

    const Submit = () => {
        console.log(childId, childName, fatherName, gender, age, phoneNo, city)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ childId, childName, fatherName, gender, age, phoneNo, city })
        };
        fetch('https://zainab-alert.herokuapp.com/ChildMissingPost', requestOptions)
            .then(response => response.json())
            .then(data => console.log("Data", data));


    }

    useEffect(() => {
        if (childName != "" && fatherName != "" && gender != "" && age != "" && phoneNo != "" && city != "") {
            setDisable(false)
        }
    }, [childName, fatherName, gender, age, phoneNo, city])


    return (

        <ScrollView  >

            <Text style={styles.logo}>
                Report Mis
                <Text style={{ color: "#00cc99" }}>sing Child</Text>
            </Text>
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
            <View style={{ padding: "4%", backgroundColor: "#00cc99", alignSelf: "flex-start", borderRadius: 30, margin: 10, paddingRight: 30 }}>
                <Text style={styles.text} onPress={() => selectImage()} disabled={disable}>Add Images of Child</Text>
            </View>
            <View style={styles.button}>
                <Button
                    color="#00cc99"
                    title="Submit"
                    onPress={() => Submit()} />
            </View>

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
        marginLeft: 20,
        fontSize: 16,
        fontWeight: "bold"
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



export default ChildLost;
