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
      <TouchableNativeFeedback
        onPress={this.sendValue}>
        <View style={styles.btn}>
          <Text style={styles.text}>{this.props.value}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
});

const styles = StyleSheet.create({
  btn: {
    borderColor: colors.secondary,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 7
  },
  text: {
    color: colors.primary,
    fontSize: 40,
    fontFamily: fonts.regular,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})
