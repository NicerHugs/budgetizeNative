import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import Calculator from './calculator.js';
import CalcBtn from './calcBtn.js';
import {colors, fonts} from './../styles/variables.js';
import {getDollars, getCents} from './../util/moneyFormat.js';

export default React.createClass({
  getInitialState() {
    return {amt: '0'}
  },
  handleClear() {
    this.setState({
      amt: this.state.amt.substr(0, this.state.amt.length-1)
    });
  },
  handleNumberClick(n) {
    this.setState({
      amt: this.state.amt + n
    });
  },
  handleAdd() {
    let val = this.state.amt;
    console.log('you want to add ' + val + ' dollars.');
    this.setState({amt: '0'})
  },
  handleSubtract() {
    let val = this.state.amt;
    console.log('you want to expense ' + val + ' dollars.');
    this.setState({amt: '0'})
  },
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.heading}>
          <View><Text style={styles.sign}>$</Text></View>
          <Text style={styles.dollars}>{getDollars(this.state.amt)}</Text>
          <View><Text style={styles.cents}>{getCents(this.state.amt)}</Text></View>
        </View>
        <Calculator numberPress={this.handleNumberClick}
                    clear={this.handleClear}/>
        <View style={styles.footer}>
          <TouchableNativeFeedback>
            <View style={styles.recordBtnLeft}>
              <Text style={styles.recordBtnTxt}>+</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.recordBtnRight}>
              <Text style={styles.recordBtnTxt}>-</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
});

const borderRight = {
  borderRightColor: colors.main,
  borderRightWidth: 1,
  borderStyle: 'solid'
}

const recordBtnStyle = {
  backgroundColor: colors.primary,
  flex: 1,
  alignItems: 'center',
  padding: 10
}

const superScript = {
  fontSize: 40,
  color: colors.primary,
  paddingBottom: 30,
  fontFamily: fonts.hairline
}

const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sign: Object.assign({}, superScript, {fontFamily: fonts.bold}),
  dollars: {
    color: colors.primary,
    fontSize: 100,
    fontFamily: fonts.regular
  },
  cents: superScript,
  recordBtnLeft: Object.assign({}, recordBtnStyle, borderRight),
  recordBtnRight: recordBtnStyle,
  recordBtnTxt: {
    color: colors.main,
    fontSize: 40,
    fontFamily: fonts.bold
  },
  footer: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'orange'
  }
});
