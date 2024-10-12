import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';

const calculateDiscount = (price) => {
    return price * 0.15;
}
const App = ({ navigation, route }) => {
    const [name, setName] = useState('Pina Mountain');
    const [price, setPrice] = useState('1350$');
    const [priceReduce, setPriceReduce] = useState('449$');
    const [image, setImage] = useState(require('./Images/bione-removebg-preview.png'));

    React.useEffect(() => {
        if(route.params?.name){
            setImage(route.params.image);
            setName(route.params.name);
            setPrice(route.params.price);
            console.log(route.params.price);
            console.log(route.params.name);
            console.log(route.params.image);
            setPriceReduce(calculateDiscount(route.params.price));
        }
    }, [route.params]);
    return (
        <View style={Styles.container}>
            <View style={{ flex: 1}}>
                <View style={Styles.View1}>
                    <Image source={image} style={Styles.Image} />
                </View>
                <View style = {Styles.View2}>
                    <Text style = {Styles.NameProduct}>{name}</Text>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {Styles.Price}>15% OFF I {price}</Text>
                        <Text style = {Styles.PriceReduce}>{priceReduce}$</Text>
                    </View>
                    <Text style = {Styles.Describtion}>Description</Text>
                    <Text style = {Styles.DescribtionContent}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
                </View>
                <View style={Styles.View3}>
                    <Image source={require('./Images/akar-icons_heart.png')} style={Styles.IconHeart} />
                    <TouchableOpacity style={Styles.ButtonAdd}>
                        <Text style={Styles.ButtonName}>Add to card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    View1: {
        flex: 3,
        backgroundColor: '#E941411A',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    Image: {
        width: 280,
        height: 320,
    },
    View2: {
        flex:2.5,
        justifyContent:'space-around',
        alignItems:'flex-start',
        paddingLeft:10
    },
    NameProduct: {
        fontWeight: 400,
        fontSize: 35,
        color: '#000000'
    },
    Price:{
        fontWeight:400,
        fontSize:25,
        color:'#00000096'
    },
    PriceReduce:{
        fontWeight:400,
        fontSize:25,
        color:'#000000',
        textDecorationLine: 'line-through',
        marginLeft:50
    },
    Describtion: {
        fontWeight: 400,
        fontSize: 25,
        color:'#000000',
        marginBottom:10
    },
    DescribtionContent: {
        fontWeight: 400,
        fontSize: 22,
        color: '#00000091'
    },
    View3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    IconHeart: {
        width: 35,
        height: 35,
    },
    ButtonAdd: {
        width: 269,
        height: 54,
        borderRadius: 30,
        backgroundColor: '#E94141',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonName: {
        fontWeight: 400,
        fontSize: 20,
        color: '#FFFAFA'
    }
})
export default App;