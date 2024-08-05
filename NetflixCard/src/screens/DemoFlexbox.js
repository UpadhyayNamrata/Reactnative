import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DemoStyles = () => {
  return (
    <View>
      <View style={styles.parentView}>
        <Text style={[styles.childText, styles.commonStyle]}>Box 1</Text>
        <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
        <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
        <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
        <View style={styles.subParent}>
          <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: '95%',
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: '#101820FF',
    backgroundColor: 'aliceblue',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },
  childText: {
    backgroundColor: '#97BC62FF',
    borderColor: '#2C5F2D',
    color: '#2C5F2D',
    flex: 1,
  },
  childText2: {
    backgroundColor: '#D4B996FF',
    borderColor: '#A07858FF',
    color: '#A07858FF',
    flex: 2,
    right: 0,
  },
  childText3: {
    backgroundColor: '#9CC3D5FF',
    borderColor: '#0063B2FF',
    color: '#0063B2FF',
    flex: 3,
    bottom: 0,
  },
  childText4: {
    backgroundColor: '#E69A8DFF',
    borderColor: '#5F4B8BFF',
    color: '#5F4B8BFF',
    bottom: 0,
    right: 0,
  },
  childText5: {
    backgroundColor: '#ADEFD1FF',
    borderColor: '#00203FFF',
    color: '#00203FFF',
  },
  commonStyle: {
    width: 60,
    height: 60,
    fontSize: 20,
    borderWidth: 1,
    textAlign: 'center',
    position: 'absolute',
  },
  subParent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DemoStyles;
