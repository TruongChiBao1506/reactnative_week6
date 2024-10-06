import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';

const DATA = [
    {
        id: 1,
        Name: "Cáp chuyển từ Cổng USB sang PS2...",
        CountRating: 15,
        Price: 69900,
        Image: require('./Images/giacchuyen 1.png'),
        Discount: -39
    },
    {
        id: 2,
        Name: "Cáp chuyển từ Cổng USB sang PS2...",
        CountRating: 15,
        Price: 69900,
        Image: require('./Images/daynguon 1.png'),
        Discount: -39
    },
    {
        id: 3,
        Name: "Cáp chuyển từ Cổng USB sang PS2...",
        CountRating: 15,
        Price: 69900,
        Image: require('./Images/dauchuyendoipsps2 1.png'),
        Discount: -39
    },
    {
        id: 4,
        Name: "Cáp chuyển từ Cổng USB sang PS2...",
        CountRating: 15,
        Price: 69900,
        Image: require('./Images/dauchuyendoi 1.png'),
        Discount: -39
    },
    {
        id: 5,
        Name: "Cáp chuyển từ Cổng USB sang PS2...",
        CountRating: 15,
        Price: 69900,
        Image: require('./Images/carbusbtops2 1.png'),
        Discount: -39
    },
    {
        id: 6,
        Name: "Cáp chuyển từ Cổng USB sang PS2...",
        CountRating: 15,
        Price: 69900,
        Image: require('./Images/daucam 1.png'),
        Discount: -39
    },
];
const formatCurrency = (amount) => {
    // Sử dụng toLocaleString để thêm dấu phân cách hàng nghìn
    const formattedAmount = amount.toLocaleString('vi-VN');

    // Thêm ký hiệu đồng vào cuối
    return `${formattedAmount}đ`;
};
const windowWidth = Dimensions.get('window').width;

const Item = ({ item }) => (
    <View style={Styles.ListItem}>
        <Image source={item.Image} style={{ width: 150, height: 90 }} />
        <Text style={Styles.Name}>{item.Name}</Text>
        <View style={Styles.Rating}>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                <Image source={require('./Images/StarLight.png')} style={{ width: 13, height: 13, marginHorizontal: 3 }} />
                <Image source={require('./Images/StarLight.png')} style={{ width: 13, height: 13, marginHorizontal: 3 }} />
                <Image source={require('./Images/StarLight.png')} style={{ width: 13, height: 13, marginHorizontal: 3 }} />
                <Image source={require('./Images/StarLight.png')} style={{ width: 13, height: 13, marginHorizontal: 3 }} />
                <Image source={require('./Images/Star.png')} style={{ width: 13, height: 13, marginHorizontal: 3 }} />
            </View>
            <Text>({item.CountRating})</Text>
        </View>
        <View style={Styles.PriceDis}>
            <Text style={{
                fontWeight: 700, fontSize: 12, color: '#000000'
            }}>{formatCurrency(item.Price)}</Text>
            <Text style={{ fontWeight: 400, fontSize: 12, color: '#969DAA', marginLeft: 15 }}>{item.Discount}%</Text>
        </View>
    </View>
);

const App = ({ navigation }) => {

    return (
        <View style={Styles.container}>

            <View style={Styles.Header}>
                <TouchableOpacity style={Styles.ButtonHeader} onPress={() => navigation.navigate('Screen4_a')}>
                    <Image source={require('./Images/ant-design_arrow-left-outlined.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <View style={{ position: 'relative', width: 192, height: 45, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ position: 'absolute', width: 24, height: 24, left: 10 }}>
                        <Image source={require('./Images/whh_magnifier.png')} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>

                    <TextInput placeholder="Dây cáp usb" style={Styles.InputSearch} />
                </View>
                <View style = {{position:'relative'}}>
                    <Image source={require('./Images/Ellipse 4.png')} style = {{width:17, height:17, position:'absolute', top:-3, right:10, zIndex:2}}/>
                    <TouchableOpacity style={Styles.ButtonHeader}>
                        <Image source={require('./Images/bi_cart-check.png')} style={{ width: 24, height: 24, marginLeft: 20, zIndex:1 }} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={Styles.ButtonHeader}>
                    <Image source={require('./Images/Group 2.png')} style={{ width: 18, height: 4 }} />
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{ width: windowWidth, flex: 3, marginTop: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    columnWrapperStyle={Styles.row}
                />
            </SafeAreaView>
            <View style={Styles.TabBotton}>
                <TouchableOpacity>
                    <Image source={require('./Images/Group 10.png')} style={{ width: 23, height: 14, marginHorizontal: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./Images/Home.png')} style={{ width: 24, height: 24, marginHorizontal: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./Images/Vector 1 (Stroke).png')} style={{ width: 26, height: 24, marginHorizontal: 20 }} />
                </TouchableOpacity>
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
    Header: {
        flex: 0.3,
        width: windowWidth,
        height: 42,
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    InputSearch: {
        width: 192,
        height: 30,
        backgroundColor: '#FFFFFF',
        paddingLeft: 45
    },
    ButtonHeader: {
        marginHorizontal: 15
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
    },
    ListItem: {
        justifyContent: 'center',
        alignItems: 'center',
        // width: windowWidth/2,
        padding: 10,
        marginHorizontal: 5,
    },
    Name: {
        fontWeight: 400,
        fontSize: 12,
        color: '#000000',
        width: 111,
        height: 28,
        marginTop: 10
    },
    Rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    PriceDis: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: -25
    },
    TabBotton: {
        flex: 0.3,
        width: windowWidth,
        height: 49,
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
export default App;