import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DetailsScreen from './../screens/DetailsScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {deviceWidth, getFontSize} from '../utils';

export type ListItemProps = {
  item: any;
  reset: boolean;
  count: () => void;
};
const ListItem: React.FC<ListItemProps> = props => {
  const {item, reset, count} = props;

  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (reset) setIsFavorite(false);
  }, [reset]);

  const onFavoriteClick = () => {
    setIsFavorite((fav: boolean) => !fav);
    count(item.gender, isFavorite ? -1 : 1);
  };
  const onDetailsClick = () => {
    console.log('details');
    navigation.navigate('DetailsScreen', {item});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onFavoriteClick}
        style={styles.icFavContainer}>
        {!isFavorite && <Icon name="heart" size={28} color="#2e0e18" />}
        {isFavorite && <Icon name="trash-alt" size={28} color="#15064e" />}
      </TouchableOpacity>

      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{item.gender}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onDetailsClick}
          style={styles.details}>
          <Text style={styles.detailsText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: deviceWidth / 6,
    flexDirection: 'row',
    backgroundColor: 'rgb(206, 208, 207)',
    flex: 1,
    borderRadius: 10,
    opacity: 0.8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: getFontSize(18),
  },
  text: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: getFontSize(16),
  },
  details: {
    marginRight: 10,
  },
  detailsText: {
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontSize: getFontSize(14),
  },
  icFavContainer: {
    margin: 20,
    width: 30,
  },
});

export default ListItem;
