import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import hotelsData from '../services/hotels';

const HotelsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredHotels = hotelsData.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      <TextInput
        placeholder="Buscar hoteles..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={filteredHotels}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.description)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HotelsScreen;
