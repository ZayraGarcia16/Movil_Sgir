import React from 'react';
import { View, Text } from 'react-native';

const PackageDetailScreen = ({ route }) => {
  const { packageDetail } = route.params;

  return (
    <View>
      <Text>{packageDetail.name}</Text>
      <Text>{packageDetail.description}</Text>
      <Text>{packageDetail.price}</Text>
    </View>
  );
};

export default PackageDetailScreen;
