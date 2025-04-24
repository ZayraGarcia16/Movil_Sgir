import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface FilterBarProps {
  filters: string[];
  selectedFilter: string | null;
  onSelectFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, selectedFilter, onSelectFilter }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.container}
  >
    {filters.map((filter) => {
      const isSelected = selectedFilter === filter;
      return (
        <TouchableOpacity
          key={filter}
          style={[styles.filterButton, isSelected && styles.selectedFilterButton]}
          onPress={() => onSelectFilter(filter)}
        >
          <Text style={[styles.filterText, isSelected && styles.selectedFilterText]}>
            {filter}
          </Text>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
  },
  selectedFilterButton: {
    backgroundColor: '#FF6B6B',
  },
  filterText: {
    color: '#333',
  },
  selectedFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FilterBar;
