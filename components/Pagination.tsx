import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {deviceWidth} from '../utils';

export type PaginationProps = {
  page: number;
  onUpdatePage: (arg: number) => void;
};

const Pagination: React.FC<PaginationProps> = props => {
  const {page, onUpdatePage} = props;

  const handleNextPage = () => {
    onUpdatePage(page + 1);
  };

  const handlePrevPage = () => {
    onUpdatePage(page - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.paginationBtn}
        onPress={handlePrevPage}
        disabled={page === 1}>
        <Icon name="chevron-left" size={20} color="#050505" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paginationBtn}
        onPress={handleNextPage}
        disabled={page === 9}>
        <Icon name="chevron-right" size={20} color="#050505" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    height: deviceWidth / 6,
    flex: 1,
  },
  paginationBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#8ea8bf',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Pagination;
