import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ListView,
  RefreshControl,
  Alert,
} from 'react-native'

export default class ListViewBasic extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isLoading: false,
      loadcount: 10,
      rowData: [],
    };
  }

  componentDidMount(){
    this.getMoviesFromApi();
  }

  getMoviesFromApi() {
    var self = this;
    this.setState({
      isLoading: true,
    })
    fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
      .then((response) => response.json())
      .then((responseJson) => {
        self.setState({
          isLoading: false,
          rowData: responseJson.movies,
        });
      })
      .catch((error) => {
        self.setState({
          isLoading: false,
        })
        console.error(error);
      });
  }

  onRefresh() {
    this.getMoviesFromApi();
  }

  onSelectRow(index){
    Alert.alert(
      'you has click index about' + index + '。'
    );
  }

  render() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    theDataSource = ds.cloneWithRows(this.state.rowData);
    return (
      <View>
        <ListView
            style={{backgroundColor:"#333333", height:300}}
            dataSource={theDataSource}
            enableEmptySections={true}
            refreshControl={
              <RefreshControl
                onRefresh={this.onRefresh.bind(this)}
                refreshing={this.state.isLoading}
                colors={['#0000ff', '#00ff00', '#ff0000']}
                enabled={true}
              />
            }
            renderRow={(movie) => (
              <View flexDirection="column" style={{height:85, backgroundColor:"#333333", borderBottomWidth:1, borderBottomColor:"#fff"}}>
                  <View flexDirection="row" style={{height:50, top:5}}>
                    <Image source={{uri:movie.posters.thumbnail}} style={{height:50, width:50, left:10, backgroundColor: "#666666"}} />
                    <View flexDirection="column" style={{height:50, left:20, position:"relative"}}>
                      <Text style={{color:"#fff", fontSize:15}}>{movie.title}</Text>
                      <Text style={{height:15, top:15, right:0, color:"#fff", fontSize:10}}>{movie.year}</Text>
                    </View>
                  </View>
              </View>
            )}
        />
      </View>
    );
  }
}
