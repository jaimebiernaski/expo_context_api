import React, { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Button } from 'react-native-elements';
interface IProfileScreen {}

const ProfileScreen: React.FC<IProfileScreen> = ({}: IProfileScreen): JSX.Element => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        title='Sign Out'
        onPress={() => signout()}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 100, fontWeight: '800', color: 'silver' },
  button: {
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'dodgerblue',
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: 'whitesmoke',
    fontSize: 22,
  },
});
