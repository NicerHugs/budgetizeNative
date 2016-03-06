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
import Record from './components/record.js';
import MainNav from './components/mainNav.js';
import {colors} from './styles/variables.js';

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
        <MainNav page={this.state.page}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  toolbar: {
    height: 56,
    backgroundColor: colors.primary
  },
  viewPager: {
    flex: 1,
    flexDirection: 'column'
  }
})

AppRegistry.registerComponent('budgetizeNative', () => budgetizeNative);
