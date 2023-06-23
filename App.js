import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import * as ImagePicker from 'expo-image-picker';

import Button from '/components/Button.js';
import ImageViewer from './components/ImageViewer.js';

const PlaceholderImage = require('./images/añadir.jpg');

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
      <Text style={{ color: '#fff' }}>Dashboard, hola Jhonny</Text>
      <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
    <Button label="Tareas Pasadas" />
  </View>
  <View style={styles.footerCo}>
    <Button label="Productividad" />
  </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'rigth',
  },
  footerCo: {
    flex: 1 / 3,
    alignItems: 'left',
  },
  container: {
    flex: 1,
    backgroundColor: '#3232',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'orange'
  },
});

  /*container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

container: {
  flex: 1,
  backgroundColor: '#25292e',
  alignItems: 'center',
},
imageContainer: {
  flex: 1,
  paddingTop: 58,
},
image: {
  width: 320,
  height: 440,
  borderRadius: 18,
},
});*/