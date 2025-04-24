import { TouchableHighlight } from 'react-native';

type TourCardProps = {
  tour: Tour;
  onPress: () => void;
};

const TourCard = ({ tour, onPress }: TourCardProps) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#f0f0f0"
    style={styles.card}>
    <>
      <Text style={styles.title}>{tour.name}</Text>
      <Text>{tour.shortDescription}</Text>
      <View style={styles.meta}>
        <Text>⭐ {tour.rating}</Text>
        <Text>💵 ${tour.price}</Text>
      </View>
    </>
  </TouchableHighlight>
);
