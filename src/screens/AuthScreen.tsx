import React, { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { RootPublicStackParamsList } from '../navigation/PublicNav';
import { Context as AuthContext } from '../context/AuthContext';
import { LanguageSelector } from '../components/common/LanguageSelector';

type AuthScreenNavProp = StackNavigationProp<RootPublicStackParamsList, 'Auth'>;

interface IAuthScreen {
  navigation: AuthScreenNavProp;
}

const AuthScreen: React.FC<IAuthScreen> = ({
  navigation,
}: IAuthScreen): JSX.Element => {
  const { signin } = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{t('welcome')}</Text>
        <MaterialCommunityIcons name='close' style={styles.icon} />
        <Text style={styles.description}>Expo Boilerplate</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title='Sign In'
          onPress={() => {
            signin('some@email.com', 'mypassword');
          }}
        />
      </View>
      <LanguageSelector />
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  upperContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
  },
  title: { fontSize: 50, fontWeight: '800', color: 'silver' },
  icon: { fontSize: 150, color: 'red', marginVertical: 30 },
  description: { fontSize: 18, color: 'gray' },
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
