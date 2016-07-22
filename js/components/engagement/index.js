
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, TouchableOpacity, View } from 'react-native';
import {popRoute, pushNewRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';
import { Container, Header, Content, Text, Button, Icon, Title } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class Engagement extends Component {

    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#01cca1'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name="ios-arrow-back" />
                        </Button>

                        <Title>Engagement</Title>

                        <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button>

                    </Header>

                    <View>
                        <Image source={require('../../../images/stockphoto.jpg')}
                            style={styles.engagementImage} />
                        <Text style={styles.engagementText}>Find out how you can help</Text>
                    </View>
                    <Content style={{backgroundColor: '#fff'}} foregroundColor="#000">
                        <TouchableOpacity style={styles.engagementItem} onPress={() => this.pushNewRoute('videopage')}>
                            <Image source={require('../../../images/stockphoto.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.engagementItem} onPress={() => this.pushNewRoute('videopage')}>
                            <Image source={require('../../../images/stockphoto.jpg')} />
                        </TouchableOpacity>
                            <TouchableOpacity style={styles.engagementItem} onPress={() => this.pushNewRoute('videopage')}>
                            <Image source={require('../../../images/stockphoto.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.engagementItem} onPress={() => this.pushNewRoute('videopage')}>
                            <Image source={require('../../../images/stockphoto.jpg')} />
                        </TouchableOpacity>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Engagement);
