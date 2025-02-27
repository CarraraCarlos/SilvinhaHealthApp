import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Caio Caraio & Carlão Caraião</Text>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
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
});
