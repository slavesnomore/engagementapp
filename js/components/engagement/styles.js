'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center'
    },
    engagementText: {
        padding: 2,
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#FFF',
        color: '#444',
        fontWeight: 'bold'
    },
    engagementImage: {
        height: 100
    },
    engagementItem: {
        flex: 1,
        height: 150
    },
});