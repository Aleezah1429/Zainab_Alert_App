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
    Button,ToastAndroid
} from 'react-native';
// import storage from '@react-native-firebase/storage';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import { useState,useEffect } from 'react';
import storage from "@react-native-firebase/storage"

const Login = (props) => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    useEffect(()=>{
        
            },[])
        

    // state for disable button
    const [disable, setDisable] = useState(true)

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };



    const Submit = () => {
        console.log("LOGIN")
        if (Name != "" && Email != "" && Password != "" ) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name, Email, Password})
        };
        fetch('https://zainab-alert.herokuapp.com/Login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status=="success"){
                    ToastAndroid.show("Login Successfully!",ToastAndroid.SHORT)
                    props.navigation.navigate("Home")
                }
                else if(data.status=="warning"){
                    ToastAndroid.show("Wrong Password",ToastAndroid.SHORT)
                }
                else{
                    ToastAndroid.show("Please Signup First",ToastAndroid.SHORT)

                }
            });

    }
    else{
        ToastAndroid.show("Fill all the fields correctly",ToastAndroid.SHORT)
    }
    }

    return (

        <View  style={{alignItems:"center"}} >
            <Image style={{width:"35%",height:"35%",marginBottom:"1%",marginTop:"5%"}} source={require("../assets/Login.png")}/>

            <Text style={styles.logo}>
                
                WEL
                <Text style={{ color: "#00cc99" }}>COME</Text>{"  "}
                <Text style={{ color: "white" }}>BA</Text>
                <Text style={{ color: "#00cc99" }}>CK</Text>



            </Text>
            <View style={{alignItems:"center"}}>

                {/* <Text style={styles.text}>Name</Text> */}
                <TextInput
                keyboardType="default"
                    style={styles.input}
                    onChangeText={(e) => { setName(e) }}
                    // value={number}
                    placeholder="Enter your Name"
                />
            </View>
            <View style={{alignItems:"center"}}>
                {/* <Text style={styles.text}>Email</Text> */}
                <TextInput
                keyboardType="email-address"
                    style={styles.input}
                    onChangeText={(e) => { setEmail(e) }}
                    // value={number}
                    placeholder="Enter your Email"
                />
            </View>
            <View style={{alignItems:"center"}}>
                {/* <Text style={styles.text}>Password</Text> */}
                <TextInput
                secureTextEntry={true}
                keyboardType="default"
                    style={styles.input}
                    onChangeText={(e) => { setPassword(e) }}
                    // value={number}
                    placeholder="Enter your Password"
                />
            </View>
           
            <View style={styles.button}>
                <Button
                    color="#00cc99"
                    title="Submit"
                    style={{borderRadius:200}}
                    onPress={() => Submit()} />
            </View>
            <View style={{alignItems:"center"}}>
                <Text onPress={()=>{props.navigation.navigate("Signup")}} style={styles.text}>Don't have an account? Signup</Text>

</View>

        </View>
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
        // marginTop: 10,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
    },
    text: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: "bold",
        color:"white"
    },
    button: {
        width: "100%",
        borderRadius: 50,
        // textAlign: "center",
        // justifyContent: 'center',
        // marginRight: 80,
        // marginLeft: 120,
        marginTop: 20,
        marginBottom: 30,
        paddingLeft:"35%",
        paddingRight:"35%"

        // alignItems:"center",
        // textAlign:"center"
    }

});



export default Login;
