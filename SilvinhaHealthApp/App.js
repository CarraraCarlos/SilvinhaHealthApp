import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [messageImc, setmessageImc] = useState("Preencha o peso e a altura");

function imcCalculator() {
  setImc((weight / (height * height)).toFixed(2))
}

function validateImc() {
  if (weight != null && height != null)
  {
    keyboard.dimiss();
    imcCalculator();
    setHeight(null);
    setWeight(null);
    setTextButton("Calcular Novamente");
    setmessageImc("Seu IMC é igual a:")
    return;
  }
  setImc(null)
  setTextButton("Calcular");
  setmessageImc("Preencha o peso e a altura")
}
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
            onChangeText={setHeight}
            value={height ?? ''}
            placeholder='Ex. 1.70'
            keyboardType='numeric'
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight ??''}
            placeholder='Ex. 80.360'
            keyboardType='numeric'
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => validateImc()}
          >
            <Ionicons name={'calculador-sharp'} size={24} color="#edf2f4" />
            <Text style={styles.text}>{textButton}</Text>
          </TouchableOpacity>

          <View style={styles.imcContainer}>
            <Text style={styles.imcText}>{messageImc}</Text>
            <Text style={styles.imcResult}>{imc}</Text>
          </View>

      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 120,
    backgroundColor: '#008000',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  title: {
    color: "#edf2f4",
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 35,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f4',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#333333',
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
    borderColor: '#10ee90',
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
    backgroundColor: '#19ee19',
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#333333',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  imcContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imcText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold'
  },
  imcResult:{
    fontSize: 48,
    color: '#ef233c',
    fontWeight: 'bold'
  }
});
