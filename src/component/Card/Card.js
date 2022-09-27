import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const Card = ({news}) => {
  return (
    
      <View style={styles.container}>
        
        <Image style={styles.image} source={{uri: news.imgURL}}/>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.price}>{news.price}</Text>
        <Text style={styles.stok}>{news.inStock ? '': "STOKTA YOK"}</Text>
      </View>
   
   
  );
};
const styles = StyleSheet.create({
    body_container:{
        display:'flex',
        flexDirection:'row',
        padding:5,
        flex:1,
    },
  container: {
    
    backgroundColor: 'lightblue',
    height: Dimensions.get('window').height / 2.88,
    flex:1,
    padding: 5,
    borderRadius: 10,
    margin:2,
    
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
  },
  image: {
    height:120,
    resizeMode:'cover'


  },
  price: {
    marginTop:2,
  },
  stok: {
    color:'red'
  },
});
export default Card;
