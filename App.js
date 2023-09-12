import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import Button from './Button';
import ImageViewer from './imageViewer';

const PlaceholderImage = require('./assets/background-image.png');

export default function App() {
  const namesButton = ['choose a photo','use this photo'];
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={PlaceholderImage} style={styles.image} /> */}
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <View style={styles.footContainer}>
        <Button label={namesButton[0]} theme="primary"></Button>
        <Button label={namesButton[1]}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer :{
    flex: 1,
    paddingTop : 58
  },
  image : {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footContainer : {
    flex : 1/3,
    fontSize : 16
  }
});
