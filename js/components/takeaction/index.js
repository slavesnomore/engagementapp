
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import {pushNewRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

import Tabs from 'react-native-tabs';

class TakeAction extends Component {
  constructor(props){
    super(props);
    this.state = {page:'Awareness'};
  }
    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        var self = this;
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button>
                    
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent  style={{padding: 20}}>
                            <Icon name="ios-search" />
                        </Button>    
                    </Header>

                    <Content>
                        <View style={styles.bgHead}>
                            <Tabs selected={this.state.page}
                            selectedStyle={{color:'red'}}
                            selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}
                            onSelect={el=>this.setState({page:el.props.name})}>
                                        <Text name="Awareness">Awareness</Text>
                                        <Text name="Takeaction">Take Action</Text>
                                    </Tabs>
                        </View>
                        <View>
                            <Grid>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
                                            <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                                                <Text style={styles.takeactionImgText}>FASHION</Text> 
                                            </Image> 
                                        </TouchableOpacity> 
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
                                            <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                                                <Text style={styles.takeactionImgText}>SCIENCE</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
                                            <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                                                <Text style={styles.takeactionImgText}>AUTO</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
                                            <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                                                <Text style={styles.takeactionImgText}>TECHNOLOGY</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
                                            <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                                                <Text style={styles.takeactionImgText}>FINANCES</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
                                            <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                                                <Text style={styles.takeactionImgText}>ENVIRONMENT</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                            </Grid>
                        </View>
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