import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const ChallengeFlatList = () => {
  const netflixSeries = [
    {
      name: 'Archive 81',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 82',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 83',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 84',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 85',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 86',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 87',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 88',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 89',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
    {
      name: 'Archive 90',
      year: '2022',
      Creater: 'Rebacca',
      Genre: 'Horror, thriller',
    },
  ];
  return (
    <View>
      <Text style={styles.headerStyle}> List of Top 10 Series </Text>
      <FlatList
        style={styles.liststyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={key => {
          return key.name;
        }}
        data={netflixSeries}
        renderItem={({item}) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyles}> Name: {item.name} </Text>
              <Text style={styles.textStyles}> Creater: {item.Creater} </Text>
              <Text style={styles.textStyles}> Genre: {item.Genre} </Text>
              <Text style={styles.textStyles}> year: {item.year} </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  liststyle: {
    textAlign: 'center',
    margin: 20,
    padding: 5,
  },
  textStyles: {
    color: 'white',
    textAlign: 'left',
    padding: 5,
    fontSize: 30,
    backgroundColor: '#009688',
    borderRadius: 20,
  },
  viewStyle: {
    padding: 5,
    margin: 20,
    borderRadius: 20,
  },
  headerStyle: {
    margin: 30,
    fontSize: 40,
  },
});
export default ChallengeFlatList;
