import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {deviceWidth, getFontSize} from '../utils';

export type CountPanelProps = {
  male: number;
  female: number;
  other: number;
  onReset: () => void;
};

const CountPanel: React.FC<CountPanelProps> = props => {
  const {male, female, other, onReset} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.cell}>{male}</Text>
        <Text style={styles.text}>Male</Text>
      </View>
      <View>
        <Text style={styles.cell}>{female}</Text>
        <Text style={styles.text}>Female</Text>
      </View>
      <View>
        <Text style={styles.cell}>{other}</Text>
        <Text style={styles.text}>Other</Text>
      </View>

      <TouchableOpacity
        style={[styles.cell, styles.customButton]}
        onPress={onReset}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: deviceWidth / 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4490e7',
    flex: 1,
    borderRadius: 5,
    opacity: 0.8,
  },
  cell: {
    width: deviceWidth / 6,
    height: deviceWidth / 14,
    backgroundColor: '#f0f8ff',
    textAlignVertical: 'center',
    fontSize: getFontSize(18),
    textAlign: 'center',
    marginBottom: 3,
    borderRadius: 10,
    opacity: 0.8,
  },
  customButton: {
    backgroundColor: '#12476f',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: getFontSize(14),
  },
});

export default CountPanel;
