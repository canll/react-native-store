import {View,Text,FlatList,StyleSheet,TextInput} from "react-native";
import Card from "./component/Card/Card";
import Store_data from "./data.json";

const App = () => {
  const RenderItem = ({item}) => <Card news={item}/> ;
  return (
    <View >
      
      <FlatList
       ListHeaderComponent={<TextInput style={styles.searchBar} placeholder={'Search'}/>}
        columnWrapperStyle={styles.row}
        numColumns={'2'}
        data={Store_data}
        renderItem={RenderItem}
      />
    </View>
  )
}
 const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "center"
},
searchBar:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:'lightblue'
    
}
 })

export default App