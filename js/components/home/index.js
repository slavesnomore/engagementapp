
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import {resetRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Card, Title} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    resetRoute(route) {
        this.props.resetRoute(route);
    }
    
    render() {
        return (
            <Container theme={theme}>
                {/*<Image source={require('../../../images/BG-signUp.png')} style={styles.container} >*/}
                    <Header>
                        <Button transparent style={{padding: 20}}  onPress={() => this.resetRoute('login')}>
                            <Icon name="ios-power" />
                        </Button>
                        
                        <Title>Home</Title>
                        
                         <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button>
                        
                    </Header>

                    <Content>
                        <Grid style={{marginTop: 20}}>
                            <Row>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <Text style={{fontSize: 20, marginBottom: 10}}>
                                        Home Content Here...
                                    </Text>
                                </View>
                            </Row>
                        </Grid>
                    </Content>
                {/*</Image>*/}
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        resetRoute:(route)=>dispatch(resetRoute(route))
    }
}

export default connect(null, bindAction)(Home);
