
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TouchableOpacity, Image, Platform } from 'react-native';
import {replaceOrPushRoute, resetRoute} from '../../actions/route';
import {closeDrawer} from '../../actions/drawer';

import {Container, Content, View, Text, Button, Icon, List, ListItem, Thumbnail} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import styles from "./style";

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }
    resetRoute(route) {
        this.props.closeDrawer();
        this.props.resetRoute(route);
    }

    render(){
        return (
            <Container>
                <Image source={require('../../../images/BG-signUp.png')} style={styles.background} >
                    <Content style={Platform.OS === 'android' ? styles.adrawerContent : styles.drawerContent}>
                        <List foregroundColor={"white"} >
                            <ListItem button onPress={() => this.navigateTo('home')} iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-home-outline" />
                                <Text style={styles.linkText}>Home</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('blankPage')} iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-paper-outline" />
                                <Text style={styles.linkText}>Blank Page</Text>
                            </ListItem>
                        </List>
                    </Content>
                </Image>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route)),
        resetRoute:(route)=>dispatch(resetRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
