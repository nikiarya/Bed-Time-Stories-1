import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import db from '../config'; 

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ReadStoryScreen extends React.Component {
  
  constructor() {
    super(); 
    this.state = {
      allStories : []
    }
  }

  componentDidMount() {
    this.retrieveStories(); 
  }

  retrieveStories = () => {
    try{
      var allStories = []; 
      var stories = db.collection("stories").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          allStories.push(doc.data())
          console.log('these are the stoires' + allStories); 
        })

        this.setState({allStories : allStories}); 
      })
    } 
    catch(error) {
      console.log(error); 
    }
  }
    render(){
        return(
            <View style={styles.container}>
                 <FlatList
                  data={this.state.allStories}
                  renderItem={({ item }) => (
                  <View style={styles.itemContainer}> 
                    <Text> Title : {item.title} </Text> 
                    <Text> Author : {item.author} </Text> 
                  </View>)} 
                  keyExtractor={(item, index) => index.toString()}
                  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },item: {
  
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: { 
    height: 80, 
    width:'100%', 
    borderWidth: 2, 
    borderColor: 'pink', 
    justifyContent: 'center', 
    alignSelf: 'center'
  } 
});