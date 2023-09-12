import { StyleSheet,Image } from "react-native";

function ImageViewer(props){
  console.log(props);
  return <Image source={props.aa} style={styles.image}></Image>;
}

const styles = StyleSheet.create({
  image : {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});

export default ImageViewer;