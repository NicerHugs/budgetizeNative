'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ViewPagerAndroid,
  ToolbarAndroid} from 'react-native';
import Dimensions from 'Dimensions';
import Record from './components/record.js';
import {fonts, colors} from './styles/variables.js';

let budgetizeNative = React.createClass({
  getInitialState() {
    return {
      page: 0
    }
  },
  changePage(e) {
    this.setState({page: e.nativeEvent.position});
  },
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.primaryDark}
          barStyle="light-content" />
        <ToolbarAndroid
          style={styles.toolbar}
          title="Budgetize"
          titleColor={colors.main} />
        <View style={styles.pageNavWrap}>
          <View style={styles.pageNav}>
            <View style={styles.navLinkBorder}><Text style={styles.pageNavLink}>Record</Text></View>
            <View style={styles.navLinkBorder}><Text style={styles.pageNavLink}>Track</Text></View>
            <View style={styles.navLink}><Text style={styles.pageNavLink}>Reward</Text></View>
          </View>
          <View style={sliderStyle(this.state.page).slider}/>
        </View>
        <ViewPagerAndroid
          onPageSelected={this.changePage}
          style={styles.viewPager}>
          <View>
            <Record/>
          </View>
          <View style={styles.pageStyle}>
            <Text>Track</Text>
          </View>
          <View style={styles.pageStyle}>
            <Text>Reward</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
})


function sliderStyle(start) {
  return StyleSheet.create({
    slider: {
      borderBottomWidth: 3,
      borderColor: colors.primary,
      borderStyle: 'solid',
      width: Dimensions.get('window').width/3,
      alignSelf: start === 0 ? 'flex-start' : start === 1 ? 'center' : 'flex-end'
    }
  });
}

const borderRight = {
  borderRightWidth: 1,
  borderColor: colors.secondary,
  borderStyle: 'solid'
};


const navLink = {
  flex: 1,
  marginTop: 8,
  marginBottom: 8
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  toolbar: {
    height: 60,
    backgroundColor: colors.primary,
  },
  pageNav: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: colors.main
  },
  pageNavWrap: {
    borderColor: colors.primary,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  pageNavLink: {
    color: colors.primary,
    margin: 0,
    textAlign: 'center',
    fontFamily: fonts.regular
  },
  navLink: navLink,
  navLinkBorder: Object.assign({}, borderRight, navLink),
  viewPager: {
    flex: 1,
    flexDirection: 'column'
  }
})

AppRegistry.registerComponent('budgetizeNative', () => budgetizeNative);
