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
import {fonts, colors} from './styles/variables.js';

class budgetizeNative extends Component {
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
        <View style={styles.pageNav}>
          <Text style={styles.pageNavLink}>Record</Text>
          <Text style={styles.pageNavLink}>Track</Text>
          <Text style={styles.pageNavLink}>Reward</Text>
        </View>
        <ViewPagerAndroid
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
}

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
    backgroundColor: colors.main,
    borderColor: colors.primary,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  pageNavLink: {
    flex: 1,
    color: colors.primary,
    margin: 10,
    textAlign: 'center'
  },
  viewPager: {
    flex: 1,
    flexDirection: 'column'
  }
})

AppRegistry.registerComponent('budgetizeNative', () => budgetizeNative);
