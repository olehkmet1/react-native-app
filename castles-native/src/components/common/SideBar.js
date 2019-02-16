import React from "react";
import { AppRegistry, Image, ImageBackground, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Separator } from "native-base";
import {DrawerItems} from 'react-navigation';
export default class SideBar extends React.Component {
    render() {
        return (
                <Container>
                    <Content>
                        <ImageBackground
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3t7tW0sOhNnJAKxZMWHEK5UL8xN7JOBxqkbCHQ6aXImYVn5Nx',
                            }}
                            style={{
                                height: 160,
                                alignSelf: "stretch",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Image/>
                        </ImageBackground>
                        <DrawerItems {...this.props} />
                            {/*<List*/}
                            {/*dataArray={routes}*/}
                            {/*renderRow={data => {*/}
                                {/*return (*/}
                                    {/*<ListItem*/}
                                        {/*button*/}
                                        {/*onPress={() => this.props.navigation.navigate(data)}>*/}
                                        {/*<Text>{data}</Text>*/}
                                    {/*</ListItem>*/}
                                {/*);*/}
                            {/*}}*/}
                        {/*/>*/}
                    </Content>
                </Container>
        );
    }
}