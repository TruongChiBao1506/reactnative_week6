import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import { Ubuntu_700Bold} from '@expo-google-fonts/ubuntu';
const App = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        VT323_400Regular,Ubuntu_700Bold
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }
    else {
        return (
            <View style={Styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={Styles.Title}>
                        <Text style={Styles.ContentTitle}>A premium online store for sporter and their stylish choice</Text>
                    </View>
                    <View style = {Styles.ImageBackground}>
                        <Image source = {require('./Images/bifour_-removebg-preview.png')} style = {{width:292, height:270, marginBottom:30}}/>

                    </View>
                    <View style = {Styles.View3}>
                        <Text style = {Styles.PowerBike}>POWER BIKE SHOP</Text>
                        <TouchableOpacity style = {Styles.ButtonStart} onPress = {()=> navigation.navigate('Screen02')}>
                            <Text style = {Styles.ButtonName}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }

}
const Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    ContentTitle: {
        fontFamily: 'VT323_400Regular',
        fontWeight: 400,
        fontSize: 26,
        color: '#000000',
        width: 351,
        height: 87,
        textAlign: 'center'
    },
    ImageBackground:{
        flex:3,
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:'#E941411A',
        borderRadius:50
    },
    View3:{
        flex:2,
        justifyContent:'space-around',
        alignItems:'center',
    },
    PowerBike:{
        fontFamily:'Ubuntu_700Bold',
        fontWeight:700,
        fontSize:26,
        color:'#000000',
        textAlign:'center',
        width:230,
        height:61
    },
    ButtonStart:{
        width:340, 
        height:61,
        backgroundColor:'#E94141',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },
    ButtonName:{
        fontFamily:'VT323_400Regular',
        color:'#FEFEFE',
        fontWeight:400,
        fontSize:27,

    }
})
export default App;