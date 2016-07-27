
'use strict';

var React = require('react-native');
var { StyleSheet, Dimensions } = React;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    links: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
    },
    alinks: {
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: 'transparent'
    },
    linkText: {
        paddingLeft: 20,
    },
    logoutContainer: {
        padding: 30,
    },
    logoutbtn: {
        paddingTop: 30,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#797979',
    },
    background: {
        flex: 1,
        width: (deviceWidth/3*2),
        height:null,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    drawerContent: {
        paddingTop: 30,
    },
    adrawerContent: {
        paddingTop: 10,
    }
});
