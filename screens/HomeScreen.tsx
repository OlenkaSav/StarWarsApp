import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import CountPanel from './../components/CountPanel';
import ListItem from './../components/ListItem';
import Pagination from './../components/Pagination';
import axios from 'axios';

const HomeScreen = () => {
  const [male, setMale] = React.useState<number>(0);
  const [female, setFemale] = React.useState<number>(0);
  const [other, setOther] = React.useState<number>(0);
  const [persons, setPersons] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [reset, setReset] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${page}`,
        );
        const {data} = response;
        const {results} = data;
        setPersons(results);
      } catch (error) {
        console.error('Something went wrong', error);
      }
    };
    fetchData();
  }, [page]);

  const hendleReset = () => {
    setMale(0), setFemale(0), setOther(0), setReset(true);
  };

  const countFavorite = (gender: string, value: number) => {
    setReset(false);
    switch (gender) {
      case 'male':
        setMale(male + value);
        break;
      case 'female':
        setFemale(female + value);
        break;
      default:
        setOther(other + value);
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CountPanel
          male={male}
          female={female}
          other={other}
          onReset={hendleReset}
        />
        <View>
          {!!persons?.length &&
            persons.map(item => (
              <ListItem
                key={item.name}
                item={item}
                count={countFavorite}
                reset={reset}
              />
            ))}
        </View>
        <Pagination page={page} onUpdatePage={setPage} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#2a304b',
    padding: 10,
  },
});

export default HomeScreen;
