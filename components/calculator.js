import React, {View, StyleSheet} from 'react-native';
import CalcBtn from './calcBtn.js';

export default React.createClass({
  handlePress(n) {
    if (n === 'C') {
      this.props.clear();
    } else {
      this.props.numberPress(n);
    }
  },
  render() {
    const calcVals = [[7,8,9],[4,5,6],[1,2,3],[null, 0, 'C']];
      let calcRows = calcVals.map((vals, i) => {
        let btns = vals.map((val, i) => {
          if (val === null) { return (<View key={i} style={{width: 82}}/>); }
          return (
            <CalcBtn key={i} value={val} callback={this.handlePress}/>
          )
        });
      return (
        <View key={i} style={styles.row}>
          {btns}
        </View>
      )
    });
    return (
      <View style={styles.calculator}>
        {calcRows}
      </View>
    )
  }
});

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  row: {
    flexDirection:'row',
    alignItems: 'center',
    paddingBottom: 10
  }
})
