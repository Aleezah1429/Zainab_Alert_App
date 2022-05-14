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


const Result = () => {

    
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [result, setResult] = useState([{ FoundChildId: "Ahmed-Found-2126", MissingChildId: "Ahmed-Lost-2292" }]);
const [FoundChildInfo,setFoundChildInfo] = useState([])
const [MissingChildInfo,setMissingChildInfo] = useState([])
const [FoundChildImage,setFoundChildImage] = useState("")



    useEffect(()=>{
        storage().ref("ChildFound/Ahmed-Found-2126").listAll().then((e)=>{
            console.log("MY",e)
            e._items.forEach(async(item)=>{
                var url = await storage().ref(item.path).getDownloadURL()
                await setFoundChildImage(url)

            })

        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ childFoundId:"Ahmed-Found-2126",childMissingId:"Ali-Missing-5734" })
        };
        fetch('https://zainab-alert.herokuapp.com/SingleChildInfo', requestOptions)
            .then(response => response.json())
            .then(data => {setFoundChildInfo(data.foundData[0])
                setMissingChildInfo(data.missingData[0])
            
            });
    },[])

    return (
        <ScrollView>
            <Text style={styles.logo}>
                Res
                <Text style={{ color: "#00cc99" }}>ults</Text>{"  "}
                <Text style={{ color:"white" }}>Mat</Text>
                <Text style={{ color:"#00cc99" }}>ched</Text>


            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                <View>
                    <Text style={styles.Heading}>Found</Text>
                </View>
                <View>
                    <Text style={styles.Heading}>Missing</Text>
                </View>
            </View>
            {result.map((item,idx) => {
                return(
                <View key={idx}  style={{ flexDirection: "row", justifyContent: "space-around", marginTop:10}}>
                    <View style={{alignItems:"center",width:"50%"}}>
                        {/* <Text style={styles.Text} >{item.FoundChildId}</Text> */}
                        <Image style={styles.ChildImage} source={{uri:FoundChildImage}} />
                        <View style={{width:"95%",marginLeft:"15%"}}> 
                        <Text style={styles.TextGreen} >Child Name:</Text>
                        <Text style={styles.Text} >{FoundChildInfo.childName}</Text>
                        <Text style={styles.TextGreen} >Father Name:</Text>
                        <Text style={styles.Text} >{FoundChildInfo.fatherName}</Text>
                        <Text style={styles.TextGreen} >Gender:</Text>
                        <Text style={styles.Text} >{FoundChildInfo.gender}</Text>
                        <Text style={styles.TextGreen} >Age:</Text>
                        <Text style={styles.Text} >{FoundChildInfo.age}</Text>
                        <Text style={styles.TextGreen} >City:</Text>
                        <Text style={styles.Text} >{FoundChildInfo.city}</Text>
                        <Text style={styles.TextGreen} >PhoneNo.:</Text>
                        <Text style={styles.Text} >{FoundChildInfo.phoneNo}</Text>
                        </View>
                    
                    </View>
                    <View style={{alignItems:"center",width:"50%"}} >
                        {/* <Text style={styles.Text}>{item.MissingChildId}</Text> */}
                        <Image style={styles.ChildImage} source={{uri:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}} />
                        <View style={{width:"90%"}}> 
                        <Text style={styles.TextGreen} >Child Name:</Text>
                        <Text style={styles.Text} >{MissingChildInfo.childName}</Text>
                        <Text style={styles.TextGreen} >Father Name:</Text>
                        <Text style={styles.Text} >{MissingChildInfo.fatherName}</Text>
                        <Text style={styles.TextGreen} >Gender:</Text>
                        <Text style={styles.Text} >{MissingChildInfo.gender}</Text>
                        <Text style={styles.TextGreen} >Age:</Text>
                        <Text style={styles.Text} >{MissingChildInfo.age}</Text>
                        <Text style={styles.TextGreen} >City:</Text>
                        <Text style={styles.Text} >{MissingChildInfo.city}</Text>
                        <Text style={styles.TextGreen} >PhoneNo.:</Text>
                        <Text style={styles.Text} >{MissingChildInfo.phoneNo}</Text>
                        </View>
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
        height: 100
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
    Text:{
        fontSize:20,color:"grey",
    },
    TextGreen:{
        fontSize:20,color:"grey",
        color: "#00cc99",marginTop:"1%"

    }
    ,
    ChildImage:{width:"80%",height:200,marginTop:10,marginBottom:20,}


});



export default Result;
