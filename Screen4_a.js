import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';

const DATA = [
    {
        id: 1,
        name: 'Ca nấu lẩu, nấu mì mini...',
        shop: 'Devang',
        image: require('./Images/ca_nau_lau.png')
    },
    {
        id: 2,
        name: '1KG KHÔ GÀ BƠ TỎI...',
        shop: 'LTD Food',
        image: require('./Images/ga_bo_toi.png')
    },
    {
        id: 3,
        name: 'Xe cần cẩu đa năng',
        shop: 'Thế giới đồ chơi',
        image: require('./Images/xa_can_cau.png')
    },
    {
        id: 4,
        name: 'Lãnh đạo đơn giản',
        shop: 'Thế giới đồ chơi',
        image: require('./Images/do_choi_dang_mo_hinh.png')
    },
    {
        id: 5,
        name: 'Hiểu lòng con trẻ',
        shop: 'Minh Long Book',
        image: require('./Images/lanh_dao_gian_don.png')
    },
    {
        id: 6,
        name: 'Donald Trump Thiên tài lãnh đạo',
        shop: 'Minh Long Book',
        image: require('./Images/trump 1.png')
    },
];
const Item = ({ item }) => (
    <View style={Styles.ListItem}>
        <Image source={item.image} style={Styles.ImageItem} />
        <View style={{ marginLeft: 10 }}>
            <Text style={{ width: 180 }}>{item.name}</Text>
            <Text><Text style={{ color: '#7D5B5B' }}>Shop</Text> {item.shop}</Text>
        </View>
        <TouchableOpacity style={Styles.ButtonChat}>
            <Text style={{ color: '#FFFFFF' }}>Chat</Text>
        </TouchableOpacity>
    </View>
)
const windowWidth = Dimensions.get('window').width;
const App = ({ navigation }) => {

    return (
        <View style={Styles.container}>
            <View style={Styles.Header}>
                <TouchableOpacity style={Styles.ButtonHeader} onPress={() => navigation.navigate('Screen4_b')}>
                    <Image source={require('./Images/ant-design_arrow-left-outlined.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF' }}>Chat</Text>
                <TouchableOpacity style={Styles.ButtonHeader}>
                    <Image source={require('./Images/bi_cart-check.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: 360, borderBottomWidth: 1, borderBottomColor: '#C4C4C4', height: 60 }}>
                <Text style={{ color: '#000000', width: 320 }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
            </View>
            <SafeAreaView style={{ width: windowWidth, flex: 3 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
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
        alignItems: 'center'
    },
    Header: {
        flex:0.35,
        width: windowWidth,
        height: 42,
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ButtonHeader: {
        marginHorizontal: 15
    },
    ListItem: {
        width: windowWidth,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
    },

    ImageItem: {
        width: 74,
        height: 74
    },
    ButtonChat: {
        width: 88,
        height: 38,
        backgroundColor: '#F31111',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0
    },
    TabBotton: {
        flex:0.35,
        width: windowWidth,
        height: 49,
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default App;