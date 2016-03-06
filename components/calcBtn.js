import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {colors} from './../styles/variables.js';
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
    marginLeft: 14,
    marginRight: 14,
    marginTop: 7
  },
  text: {
    color: colors.primary,
    fontSize: 40,
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 7,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})
