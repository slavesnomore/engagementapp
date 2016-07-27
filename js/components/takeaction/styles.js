
'use strict';

var React = require('react-native');
var primary = require('../../themes/variable').brandPrimary;
var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    bgHead: {
        backgroundColor: primary,
        width: (deviceWidth),
        padding: 20,
        alignSelf: 'center'
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center',
    },
    takeactionImg: {
        height: (deviceHeight/4) + 10,
        width: (deviceWidth),
    },
    takeactionImgText: {
        fontSize: 12,
        fontWeight: '900',
        padding: 20,
        marginTop: (deviceHeight/6) + 10,
        marginLeft: 10 
    },
});