import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Editor = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        textAlignVertical="top"
        value={value}
        onChangeText={onChangeText}
        placeholder="Start typing..."
        placeholderTextColor="#9CA3AF"
        autoCapitalize="sentences"
        autoCorrect={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#374151',
    lineHeight: 28,
    fontFamily: 'System',
    paddingTop: 10,
  },
});

export default Editor;
