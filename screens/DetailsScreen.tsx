import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {deviceWidth, getFontSize} from '../utils';

const DetailsScreen = ({route}) => {
  const {item} = route.params;
  const [planet, setPlanet] = React.useState(null);
  const [species, setSpecies] = React.useState(null);

  React.useEffect(() => {
    if (!!item.homeworld) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${item.homeworld}`);
          const {data} = response;
          setPlanet(data.name);
        } catch (error) {
          console.error('Something went wrong', error);
        }
      };
      fetchData();
    }
  }, []);

  React.useEffect(() => {
    if (!!item.species) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${item.species}`);
          const {data} = response;
          setSpecies(data.name);
        } catch (error) {
          console.error('Something went wrong', error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Name: </Text>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Birth Year: </Text>
        <Text style={styles.text}>{item.birth_year}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Gender: </Text>
        <Text style={styles.text}>{item.gender}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Home World: </Text>
        {!!planet && <Text style={styles.text}>{planet}</Text>}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Species: </Text>
        {!!species && <Text style={styles.text}>{species}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#c7c5c5',
    opacity: 0.8,
    borderRadius: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: getFontSize(18),
    marginRight: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: getFontSize(20),
    marginRight: 10,
  },
});

export default DetailsScreen;
