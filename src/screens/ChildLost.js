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
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import ImagePicker from 'react-native-image-picker';

// import { Picker } from '@react-native-picker/picker';
// import ImagePicker from 'react-native-image-picker/lib/commonjs';

const ChildLost = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    // ___THUMBNAIL FUNC___
    const selectThumbnail = () => {

        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const uri = response.uri;
                console.log('Uri', uri)
                const imageName = title + "_thumbnail"
                firebase
                    .storage()
                    .ref(imageName)
                    .putFile(uri)
                    .then((snapshot) => {
                        //You can check the image is now uploaded in the storage bucket
                        console.log(`${imageName} has been successfully uploaded.`);
                    })
                    .catch((e) => console.log('uploading image error => ', e));

                // __Retrieve Image From Firebase Cloud Storage__
                let imageRef = firebase.storage().ref('/' + imageName);
                imageRef
                    .getDownloadURL()
                    .then((url) => {
                        console.log("thumbnail", url)
                        //from url you can fetched the uploaded image easily
                        setthumbnail(url)
                    })
                    .catch((e) => console.log('getting downloadURL of image error => ', e));
            }

        });

    }


    // ___select video function to open video library__
    const selectVideo = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'video', includeBase64: true }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled Video picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const uri = response.uri;

                console.log('VideoUri', uri)

                const videoName = title + "_video"
                firebase
                    .storage()
                    .ref(videoName)
                    .putFile(uri)
                    .then((snapshot) => {
                        //You can check the Video is now uploaded in the storage bucket
                        console.log(`${videoName} has been successfully uploaded.`);
                    })
                    .catch((e) => console.log('uploading Video error => ', e));

                // __Retrieve Video From Firebase Cloud Storage__
                let imageRef = firebase.storage().ref('/' + videoName);
                imageRef
                    .getDownloadURL()
                    .then((url) => {
                        console.log("video", url)

                        //from url you can fetched the uploaded Video easily
                        seturi(url)
                    })
                    .catch((e) => console.log('getting downloadURL of Video error => ', e));
            }
        })
    }


    return (

        <View >

            <View style={{ paddingLeft: "10%", paddingRight: "10%", backgroundColor: "#380036", alignSelf: "flex-start", marginBottom: "5%" }}>
                <Text onPress={() => selectThumbnail()}>Add Thumbnail</Text>
            </View>


            <View style={{ paddingLeft: "10%", paddingRight: "10%", backgroundColor: "#380036", alignSelf: "flex-start" }}>
                <Text onPress={() => selectVideo()}>Add Video</Text>
            </View>

            <View style={{ margin: "3%", paddingLeft: "10%", paddingRight: "10%", backgroundColor: "#380036" }}>
                <Text onPress={() => post_video()}>POST</Text>
            </View>




            <Text style={styles.logo}>
                Report Mis
                <Text style={{ color: "#00cc99" }}>sing Child</Text>
            </Text>
            <View>
                <Text style={styles.text}>Child Name</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Child Name"
                />
            </View>
            <View>
                <Text style={styles.text}>Father Name</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Father Name"
                />
            </View>
            <View>
                <Text style={styles.text}>Gender</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Gender"
                />
            </View>
            <View>
                <Text style={styles.text}>Age</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Age"
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.text}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Phone Number"
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.text}>City</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="City"
                />
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
        marginTop: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
    },
    text: {
        marginLeft: 22,
        fontSize: 15
    }

});



export default ChildLost;
