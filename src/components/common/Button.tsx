import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, primary = true }) => (
  <TouchableOpacity
    style={[styles.button, primary ? styles.primaryButton : styles.secondaryButton]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, primary ? styles.primaryText : styles.secondaryText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#FF6B6B',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#FF6B6B',
  },
});

export default Button;
