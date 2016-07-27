'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import {pushNewRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Title, Tabs} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

class Awareness extends Component {

  pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

  render() {
    return(
      <Content>
          <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
              <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                  <Text style={styles.takeactionImgText}>LEARN</Text> 
              </Image> 
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
              <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                  <Text style={styles.takeactionImgText}>SHARE</Text>
              </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
              <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                  <Text style={styles.takeactionImgText}>TEACH</Text>
              </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pushNewRoute('takeaction')}>
              <Image source={require('../../../images/stockphoto.jpg')} style={styles.takeactionImg}>
                  <Text style={styles.takeactionImgText}>BE CREATIVE</Text>
              </Image>
          </TouchableOpacity>
      </Content>
      )
  }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

module.exports=Awareness;