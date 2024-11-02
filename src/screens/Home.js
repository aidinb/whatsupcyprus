import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,
    Dimensions,
    Image,
    Button,
    Modal,
    Geolocation,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import u from '../util/TechWS';
import Spinner from 'react-native-loading-spinner-overlay';
import FastImage from 'react-native-fast-image'
import FontAwsome from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');
export default class Home extends Component {
    constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
        this.state = {
            isLoading: false,
            item: [],
            refreshing: false,
            next: '',
        }
        this.refreshItem = this.refreshItem.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    static navigationOptions = {
        tabBarLabel: 'Tourist & Attraction',
        tabBarIcon: ({tintColor}) => (
            <FontAwsome name="university" size={22} color={tintColor}/>
        ),

        header: (navigation, header) => ({
            ...header,
            visible: true,
            tintColor: 'white',
            style: {backgroundColor: 'silver', position: 'absolute', top: 0, left: 0, right: 0},

        }),
    };

    componentDidMount() {
        this.setState({isLoading: true});
        u.place().then(res=> {
            this.setState({
                item: res.data.objects,
                isLoading: false,
                next: res.data.meta.next
            });
            console.log('eveeeeeenteeeee');
            console.log(res.data.objects)
        }).catch(e=> {
            console.log(e);
            this.setState({isLoading: false})
        })
    }

    _renderItem = (itm) => {
        return (
            <View key={"subItem__" + itm.id}
                  style={{width: width, height: height / 2 - 45}} activeOpacity={0.6}>
                <FastImage
                    style={{
                        width: width,
                        height: height / 2 - 100,

                    }}
                    source={{uri: u.site + itm.photo}}
                    resizeMode={'cover'}
                />
                <View style={{
                    padding: 10,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    paddingBottom: 23
                }}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{itm.name}</Text>

                </View>
            </View>
        )
    };
    _renderFooter = ()=> {
        if (this.state.item.length < 1 || this.state.nextPlace == null) {
            return (<View/>)
        } else {
            return (<View style={{padding: 10, backgroundColor: 'white'}}>
                <ActivityIndicator animating size="large"/>
            </View>)
        }
    };

    refreshItem() {
        this.setState({refreshingSpecial: true});
        u.place().then(res=> {
            this.setState({item: res.data.objects, refreshing: false, next: res.data.meta.next})
        }).catch(e=>console.log(e.response))
    }

    loadMore() {
        console.log('ENDENDEND')
        if (this.state.nextSpecial != null) {
            u.loadMore(this.state.next).then(res=>this.setState({
                item: this.state.item.concat(res.data.objects),
                isLoading: false,
                next: res.data.meta.next
            })).catch(e=>console.log(e.response))
        }
    }

    render() {

        return (
            <View style={{flex: 1,backgroundColor:'rgba(124, 181, 209,0.3)'}}>
                <View style={{
                    width: width,
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: '#7CB5D1',
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                }}>
                    <Text style={{
                        marginTop: 10,
                        fontWeight: 'bold',
                        color: 'white',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowColor: "#228C86",
                        textShadowRadius: 3
                    }}>Tourist & Attraction</Text>
                </View>
                <View style={{backgroundColor: '#F8F6FA', flex: 1, flexDirection: 'column'}}>
                    <FlatList
                        data={this.state.item}
                        renderItem={({item})=>this._renderItem(item)}
                        keyExtractor={(item, index) => 'item_' + item.id}
                        refreshing={this.state.refreshing}
                        onRefresh={this.refreshItem}
                        ListFooterComponent={this._renderFooter}
                        onEndReached={this.loadMore}
                        onEndThreshold={0}
                    />

                </View>
                    <Spinner visible={this.state.isLoading} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>

            </View>
        )
    }


};


const styles = StyleSheet.create({});
