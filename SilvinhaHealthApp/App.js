import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Caio Caraio & Carlão Caraião</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de IMC</Text>

      </View>

      <Text style={styles.label}>Altura</Text>
      <TextInput
        style={styles.input}
        placeholder='Ex. 1.70'
        keyboardType='numeric'
        />

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleBox:{
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#0ba',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  titleText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'semi-bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#fff'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  input: {
    height: 40,

  }
});
