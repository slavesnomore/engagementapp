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
        flex: 1,
        paddingBottom: 10,
        textAlign: 'center',
        backgroundColor: '#999'
    },
    engagementImage: {
        height: 100
    },
    engagementItem: {
        flex: 1,
        height: 150
    },
});