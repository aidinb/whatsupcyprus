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
    Geolocation
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';
const SECTIONS = [
    {
        title: 'History',
        content: 'Cyprus is an island that has been inhabited for over 13,000 years, from the Neolithic Stone Age to the civilized 21st century, mankind has walked this fertile land.Early settlers most probably came from nearby countries, with Turkey only 40 miles away the journey would not have been difficult. Artefacts found in Neolithic settlements have clear links with similar finds on the mainland and there are many villages of the period dotted across the island. With the Early and Middle Bronze Ages came the development of the first real towns and commercial centers, and due to trade, cultural relations with neighbouring countries improved. There was a steady influx of immigrants from nearby lands among them the Myceneans who developed trading cities around the island, such as Enkomi in the north and Paphos in the south. They brought with them Greek cultural methods and started producing decorative pottery not just for the home market but also for export.The Iron Age coincided with a slowing down in commercial growth and a dispersal of the peoples. Those that continued to live on Cyprus carried on their traditions until they were given a boost by the arrival of the Phoenicians. Links with the Orient were made, the economy grew and religion started to change. Worship of the Mycenean Horned God, was replaced by the cult of Astarte, Goddess of Fertility. She in time was replaced by Aphrodite, always considered to be a native of Cyprus.'
    },
    {
        title: 'Administrative divisions',
        content: 'Northern Cyprus is divided into six districts: Lefkoşa, Gazimağusa, Girne, Güzelyurt, İskele and Lefke. Lefke District was established by separation from the Güzelyurt District in 2016. In addition, there are further twelve sub-districts divided between the five larger districts and twenty-eight municipalities.',
    },
    {
        title: 'Demographics',
        content: "Northern Cyprus's first official census was performed in 1996. The population recorded was 200,587. The second census, carried out in 2006, revealed the population of Northern Cyprus to be 265,100, of which majority is composed of indigenous Turkish Cypriots (including refugees from Southern Cyprus) and settlers from Turkey. Of the 178,000 Turkish Cypriot citizens, 82% are native Cypriots (145,000). Of the 45,000 people born to non-Cypriot parentage, nearly 40% (17,000) were born in Cyprus. The figure for non-citizens, including students, guest workers and temporary residents stood at 78,000 people.The third official census of Northern Cyprus was carried out in 2011, made under the auspices of UN observers. It returned a total population of 294,906.",
    },
    {
        title: 'Climate',
        content: 'The winter in Northern Cyprus is cool and rainy, particularly between December and February, with 60% of annual rainfall. These rains produce winter torrents that fill most of the rivers, which typically dry up as the year progresses. Snow has been known to fall on the Kyrenia Range, but seldom elsewhere in spite of low night temperatures. The short spring is characterized by unstable weather, occasional heavy storms and the "meltem", or westerly wind. Summer is hot and dry enough to turn low-lying lands on the island brown. Parts of the island experience the "Poyraz", a north-westerly wind, or the sirocco, a wind from Africa, which is dry and dusty. Summer is followed by a short, turbulent autumn.',
    }
];

var {height, width} = Dimensions.get('window');
export default class About extends Component {
    constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
        this.state = {
            isLoading: false

        }
    }

    static navigationOptions = {
        tabBarLabel: 'About Cyprus',
        tabBarIcon: ({tintColor}) => (
            <FontAwsome name="info-circle" size={22} color={tintColor}/>
        ),

        header: (navigation, header) => ({
            ...header,
            visible: true,
            tintColor: 'white',
            style: {backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0},

        }),
    };

    componentDidMount() {

    }

    _renderHeader(section) {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.3)',
                width: width,
                alignSelf: 'center',
                backgroundColor: '#0089AE'
            }}>
                <Text style={{
                    color: 'white', fontWeight: 'bold', fontSize: 15, textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 3,
                    textShadowColor: 'rgba(0,0,0,0.5)',
                }}>{section.title}</Text>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={{padding:20}}>
                <Text style={{fontWeight:'bold',fontSize:14,textAlign:'justify'}} ellipsizeMode='middle'>{section.content}</Text>
            </View>
        );
    }

    render() {

        return (
            <View style={{flex: 1}}>
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
                    }}>About Us</Text>
                </View>
                <ScrollView style={{width: width, height: height - 60, backgroundColor: 'rgba(124, 181, 209,0.3)'}}
                            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                    <Accordion
                        sections={SECTIONS}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </ScrollView>
            </View>
        )
    }


};


const styles = StyleSheet.create({});
