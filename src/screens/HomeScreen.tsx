import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = ({}: IHomeScreen): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 100, fontWeight: '800', color: 'silver' },
});
