import React, {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from './../styles/variables.js';
import Dimensions from 'Dimensions';

export default function(props){
  return (
    <View style={styles.pageNavWrap}>
      <View style={styles.pageNav}>
        <View style={styles.navLinkBorder}><Text style={styles.pageNavLink}>Record</Text></View>
        <View style={styles.navLinkBorder}><Text style={styles.pageNavLink}>Track</Text></View>
        <View style={styles.navLink}><Text style={styles.pageNavLink}>Reward</Text></View>
      </View>
      <View style={sliderStyle(props.page).slider}/>
    </View>
  )
}

function sliderStyle(start) {
  return StyleSheet.create({
    slider: {
      height: 3,
      backgroundColor: colors.primary,
      width: Dimensions.get('window').width/3,
      alignSelf: start === 0 ? 'flex-start' : start === 1 ? 'center' : 'flex-end'
    }
  });
}

const navLink = {
  flex: 1,
  marginTop: 8,
  marginBottom: 8
};

const borderRight = {
  borderRightWidth: 1,
  borderColor: colors.secondary,
  borderStyle: 'solid'
};

const styles = StyleSheet.create({
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
  navLinkBorder: Object.assign({}, borderRight, navLink)
});
