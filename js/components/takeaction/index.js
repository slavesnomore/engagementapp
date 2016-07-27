'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import {pushNewRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Title, Tabs} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

import Awareness from './Awareness';
import TakeActionPage from './TakeActionPage';

class TakeAction extends Component {
    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button>
                        
                        <Title>Take Action</Title>

                        <Button transparent  style={{padding: 20}}>
                            <Icon name="ios-search" />
                        </Button>
                    </Header>
                    <Content>
                        <Tabs>
                            <Awareness tabLabel="Awareness Building" />
                            <TakeActionPage tabLabel="Take Action" />
                        </Tabs>
                    </Content>
                </Image>
            </Container>
            )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(TakeAction);