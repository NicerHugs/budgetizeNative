import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {colors, fonts} from './../styles/variables.js';
import {getDollars, getCents} from './../util/moneyFormat.js';

export default React.createClass({
  sendValue(){
    this.props.callback(this.props.value)
  },
  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={this.sendValue}>
          <View style={styles.btn}>
            <Text style={styles.text}>{this.props.value}</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.bottomBorder} />
      </View>
    )
  }
});

const styles = StyleSheet.create({
  btn: {
    paddingLeft: 27,
    paddingRight: 27,
    paddingTop: 7,
    paddingBottom: 7
  },
  text: {
    color: colors.primary,
    fontSize: 40,
    fontFamily: fonts.regular,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  bottomBorder: {
    borderColor: colors.secondary,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    width: 40,
    alignSelf: 'center'
  }
})
