import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import Alert from './Alert';

function App() {
  const onPress = () => {
    Alert.alert('Hello World');
    console.log({
      string: Alert.STRING_VALUE,
      number: Alert.NUMBER_VALUE,
    });
  };
  return (
    <SafeAreaView>
      <Button title="Press me" onPress={onPress} />
    </SafeAreaView>
  );
}

export default App;
