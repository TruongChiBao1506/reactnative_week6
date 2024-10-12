import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
const DATA = [
    {
        id: 1,
        name: 'Pinarello',
        price: 1800,
        image: require('./Images/bifour_-removebg-preview.png')
    },
    {
        id: 2,
        name: 'Pina Mountai',
        price: 1700,
        image: require('./Images/bione-removebg-preview.png')
    },
    {
        id: 3,
        name: 'Pina Bike',
        price: 1500,
        image: require('./Images/bithree_removebg-preview.png')
    },
    {
        id: 4,
        name: 'Pinarello',
        price: 1900,
        image: require('./Images/bitwo-removebg-preview.png')
    },
    {
        id: 5,
        name: 'Pinarello',
        price: 2700,
        image: require('./Images/bithree_removebg-preview.png')
    },
    {
        id: 6,
        name: 'Pinarello',
        price: 1350,
        image: require('./Images/bione-removebg-preview.png')
    },
];

const App = ({ navigation }) => {
    const Item = ({ item, index }) => (
        <View style={Styles.ItemList} onClick={() => navigation.navigate({
            name: 'Screen03',
            params: {
                name: item.name,
                price: item.price,
                image: item.image
            }
        })}>
            <View style={{ position: 'relative' }}>
                {index === 0 && <Image source={require('./Images/Vector.png')} style={Styles.HeartIcon} />}
                {index != 0 && <Image source={require('./Images/Vector (1).png')} style={Styles.HeartIcon} />}
                <Image source={item.image} style={Styles.ImageItem} />
            </View>
            <Text style={Styles.NameItem}>{item.name}</Text>
            <Text style={Styles.PriceItem}><Text style={Styles.Currency}>$</Text>{item.price}</Text>
        </View>
    );
    let [fontsLoaded] = useFonts({
        Ubuntu_700Bold
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }
    else {
        return (
            <View style={Styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={Styles.View1}>
                        <Text style={Styles.Title}>The world’s Best Bike</Text>
                        <View style={Styles.Button}>
                            <TouchableOpacity style={Styles.ButtonType}>
                                <Text style={Styles.ButtonName}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.ButtonType, { marginHorizontal: 20 }]}>
                                <Text style={Styles.ButtonName}>Roadbike</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.ButtonType}>
                                <Text style={Styles.ButtonName}>Mountain</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SafeAreaView style={{ flex: 3 }}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item, index }) => <Item item={item} index={index} />}
                            numColumns={2}
                            columnWrapperStyle={Styles.row} />
                    </SafeAreaView>
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
    View1: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Title: {
        fontFamily: 'Ubuntu_700Bold',
        fontWeight: 700,
        fontSize: 25,
        color: '#E94141',
        textAlign: 'left',
        left: -40,
        marginTop: 15
    },
    Button: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%'
    },
    ButtonType: {
        width: 99,
        height: 32,
        backgroundColor: '#C4C4C400',
        borderColor: '#E9414187',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
    },
    ButtonName: {
        // fontFamily:'Voltaire-Regular',
        fontWeight: 400,
        fontSize: 20,
        textAlign: 'center',
        color: '#E94141'
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
    },
    ImageItem: {
        width: 128,
        height: 118
    },
    HeartIcon: {
        width: 20,
        height: 20,
        position: 'absolute',

    },
    ItemList: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#F7BA8326'
    },
    NameItem: {
        // fontFamily:'Voltaire-Regular',
        fontWeight: 400,
        fontSize: 20,
        textAlign: 'center',
        color: '#00000099'
    },
    Currency: {
        // fontFamily:'Voltaire-Regular',
        fontWeight: 400,
        fontSize: 20,
        textAlign: 'center',
        color: '#F7BA83'
    },
    PriceItem: {
        // fontFamily:'Voltaire-Regular',
        fontWeight: 500,
        fontSize: 20,
        textAlign: 'center',
        color: '#000000'
    }

})

export default App;