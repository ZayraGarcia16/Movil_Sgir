import React from 'react';
import { View, Text } from 'react-native';

const TourDetailScreen = ({ route }) => {
  const { tourDetail } = route.params;

  return (
    <View>
      <Text>{tourDetail.name}</Text>
      <Text>{tourDetail.description}</Text>
      <Text>{tourDetail.duration}</Text>
    </View>
  );
};

export default TourDetailScreen;