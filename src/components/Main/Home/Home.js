import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { React, useState } from 'react';

import ProductItem from './product_item';
import Header from './header';
import BanNerItem from './BannerItem';

const deviceWidth = Dimensions.get('window').width;

export default function Home({ navigation }) {

    const [productList, setProductList] = useState([
        {
            name: 'Áo Polo I7POL004K',
            imageUrl: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg',
            price: '10.000 VND',
        },
        {
            name: 'Áo Polo I7POL004K',
            imageUrl: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg',
            price: '50.000 VND',
        },
        {
            name: 'Áo Polo I7POL004K',
            imageUrl: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg',
            weight: '500g',
            price: '50.000 VND',
        },
        {
            name: 'Áo Polo I7POL004K',
            imageUrl: 'https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/i/7/i733-060e_1.jpg',
            price: '50.000 VND',
        },
    ])
    const [bnList, setBannerList] = useState([
        {
            imageUrl: 'https://becungshop.vn/Content/Blog/Images/th%C6%A1i-trang-tre-em-xu-huong-2020-1.jpg',
            Description: 'Childern'
        },
        {
            imageUrl: 'https://stylemagazine.vn/wp-content/uploads/style-featured-cover-mua-sam-thong-minh-01.jpg',
            Description: 'Fashion'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzLJPUs8z48OytDIEPOCnTM_z-uZe5HG9LA&usqp=CAU',
            Description: 'Beautify'
        },
        {
            imageUrl: 'https://cdn.chanhtuoi.com/uploads/2021/09/top-thuong-hieu-thoi-trang-nam-duoc-ua-chuong.jpg',
            Description: 'Men'
        },
        {
            imageUrl: 'https://smartfashion.ai/wp-content/uploads/2020/07/shop-thoi-trang-nu-1280x720.jpg',
            Description: 'Women'
        },
    ])

    return (
        <ScrollView>
            <Header />
            {/* Category */}
            <View style={styles.ListName}>
                <Text style={styles.listNameText}>List of Categories</Text>
            </View>
            <View>
                <ScrollView nestedScrollEnabled={true} horizontal={true}>
                    <View style={styles.bannerList}>
                        {
                            bnList.map(
                                (item, index) => <BanNerItem
                                    imageUrl={item.imageUrl}
                                    descipt={item.Description}
                                    key={index}
                                />
                            )
                        }
                    </View>
                </ScrollView>
            </View>

            {/* Producitem */}
            <TouchableOpacity
                style={styles.ListName}
                onPress={() => {
                    navigation.navigate('LISTPRODUCT');
                }}
            >
                <Text style={styles.listNameText}>List of Product</Text>
            </TouchableOpacity>
            <View style={[styles.Top_product, { width: deviceWidth }]}  >
                <View style={styles.flexDrRow}>
                    {
                        productList.map(
                            (item, index) => <ProductItem
                                navigation={navigation}
                                name={item.name}
                                imageUrl={item.imageUrl}
                                price={item.price}
                                key={index}
                            />
                        )
                    }
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        margin: 8,
        height: 200,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
    },
    flexDrRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    ListName: {
        flexDirection: 'row',
    },
    listNameText: {
        marginTop: 8,
        marginLeft: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#AFAEAF'
    },

    Top_product: {
        height: 224,
        display: 'flex',
    },
    bannerList: {
        flexDirection: 'row',
        overflowY: 'hidden',
    },

});
