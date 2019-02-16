import {Component} from "react";
import React from "react";
import { connect } from 'react-redux';

import {  Image, ScrollView } from 'react-native';

import { Container, Header, Title, Form, Left, Right, Button, Body, Content,Text, Card, CardItem, StyleProvider, Input, Item, List, ListItem, Thumbnail, Picker} from "native-base";

import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from "../../assets/styles";
import {colors} from "../../assets/variables";

import getTheme from '../../../native-base-theme/components';
import material from '../../../../castles-native/native-base-theme/variables/material';

import {  View } from 'react-native';
import PageLoader from '../common/PageLoader'

import { ActivityIndicator, FlatList } from 'react-native'

import axios from "axios";

const BASE_URL = 'https://reqres.in';
const PAGE_SIZE = 3;

let dataList = [];

// const renderCastle = (item, i) => {
//     return (
//         <Card style={{height: 300}}>
//             <CardItem style={{padding:0}}>
//                 <Left>
//                     <Thumbnail square source={{uri: 'https://castles.today/assets/uploads/content/148/thumb/bisingen-1.jpg'}} />
//                     {/*<Image style={{flex: 0.5, height: 100}} source={{uri: 'https://castles.today/assets/uploads/content/148/thumb/bisingen-1.jpg'}}/>*/}
//                     <Body>
//                     <Text onPress={() => this.props.navigation.navigate('Details', { title: item.name })}>{item.name}Castle in Olesko</Text>
//                     <Text note>Ukraine</Text>
//                     </Body>
//                 </Left>
//             </CardItem>
//         </Card>)
// }

class CastlesMain extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',
        // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        headerTitle: <View style={{flexDirection: 'column', paddingLeft: 12}}>
            <Text style={styles.detailHeader}>Castles</Text>
        </View>,
        headerLeft:  <Icon name="menu" style={styles.headerIcon} onPress={() => navigation.toggleDrawer()} />,
        headerRight: <View style={{flexDirection:'row', paddingRight: 12}}><Icon name="search" style={styles.headerIcon} onPress={() => navigation.navigate('Search')} />
            <Icon name="filter-list" style={styles.headerIcon} onPress={() => navigation.navigate('Filters')} /></View>,
        headerStyle: {
            backgroundColor: colors.mainColor,
        },
    });
    constructor(props) {
        super(props);
        this.state = {
            reversed: 0,
            data: [],
            page: 1,
            totalPages: null,
            preloader: true,
        };
    }



    onValueChange(value) {
        this.setState({
            reversed: value
        });
    }

    sortList(items) {
        let sorted = items.sort((a, b) => !this.state.reversed ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        this.setState({
            data: sorted
        });
    }

    createUrl(url) {
        return `${BASE_URL}/${url}`;
    }


    getCastles = async() => {

        this.setState({ loading: true });
        const url = `${BASE_URL}/api/users?page=${this.state.page}`;
        // try {
            return await axios.get(url).then(
                response => {
                    // response.data;
                    this.setState({
                        data: this.state.data.concat(response.data.data),
                        loading: false,
                        totalPages: response.data.total_pages,
                        preloader: false
                    });
                    // console.log(this.state.totalPages,222);
                }

            ).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
            });
        // } catch (error) {
        //     console.log(error);
        // }

    }

    handleEnd = () => {
        console.log(this.state.page, 'prev');
        if (this.state.totalPages > this.state.page) {

            this.setState(state => ({ page: state.page + 1 }), () => this.getCastles());


        }
        console.log(this.state.page, 'next');
    };


    componentDidMount() {
        this.setState({
            preloader: true
        });
        this.getCastles();
    }




    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                {
                    !this.state.preloader ?
                    <Container style={styles.mainContainer}>

                    <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={() => this.handleEnd()}
                    onEndReachedThreshold={0}
                    ListFooterComponent={({ item, index }) =>
                    !this.state.loading
                        ? null
                        : <ActivityIndicator size="large" color={colors.mainColor} animating />}
                    renderItem={({ item, index }) =>
                        <View>
                            <Card >

                                {/*<Image style={{flex: 0.5, height: 100}} source={{uri: item.avatar}} />*/}
                            <CardItem style={{padding:0}}>
                                <Left>
                                    <Thumbnail square source={{uri: item.avatar}} />
                                    {/*<Image style={{flex: 0.5, height: 100}} source={{uri: 'https://castles.today/assets/uploads/content/148/thumb/bisingen-1.jpg'}}/>*/}
                                    <Body>
                                    <Text onPress={() => this.props.navigation.navigate('Details', { title: item.name })}>{item.first_name}Castle in Olesko</Text>
                                    <Text note>Ukraine</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card></View>
                        }
                    />


                    {/*</List>*/}
                    {/*{this.state.data.map((item) => (*/}
                    {/*<Card>*/}
                    {/*<CardItem style={{padding:0}}>*/}
                    {/*<Left>*/}
                    {/*<Thumbnail square source={{uri: 'https://castles.today/assets/uploads/content/148/thumb/bisingen-1.jpg'}} />*/}
                    {/*/!*<Image style={{flex: 0.5, height: 100}} source={{uri: 'https://castles.today/assets/uploads/content/148/thumb/bisingen-1.jpg'}}/>*!/*/}
                    {/*<Body>*/}
                    {/*<Text onPress={() => this.props.navigation.navigate('Details', { title: item.name })}>{item.name}Castle in Olesko</Text>*/}
                    {/*<Text note>Ukraine</Text>*/}
                    {/*</Body>*/}
                    {/*</Left>*/}
                    {/*</CardItem>*/}
                    {/*</Card>*/}
                    {/*))}*/}
                        {/*</ScrollView>*/}
                    </Container>
                        : <PageLoader />

                }
            </StyleProvider>

        );
    }
}

export default connect()(CastlesMain);