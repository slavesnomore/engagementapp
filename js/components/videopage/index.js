'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image } from 'react-native';
import {popRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';


import { Container, Header, Content, Text, Button, Icon, Title } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class VideoPage extends Component {

    popRoute(route) {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#01cca1'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute('engagement')}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                        
                        <Title>VideoPage</Title>
                        
                        <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button> 
                    </Header>

                    <Content padder style={{backgroundColor: '#fff'}} foregroundColor="#000">
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(VideoPage);
