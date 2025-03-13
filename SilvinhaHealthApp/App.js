import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Silvinha Health App</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de IMC</Text>

        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 1.70'
            keyboardType='numeric'
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 80.360'
            keyboardType='numeric'
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('AHHHHHHHHHHHHHHHH')}
          >
            <Ionicons name={'calculador-sharp'} size={24} color="#edf2f4" />
            <Text style={styles.text}>Calcular</Text>
          </TouchableOpacity>

      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 120,
    backgroundColor: '#4FFFFF',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  title: {
    color: "#333333",
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 35,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#333333',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#4FFFFF',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label:{
    color: '#edf2f4',
    fontSize: 18,
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#4FFFFF',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4FFFFF',
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#333333',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,

  }
});
