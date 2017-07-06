import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  ScrollView,
  Image,
  TabBarIOS,
  StatusBar,
  Alert,
 } from 'react-native';

 import BannerLite from 'react-native-banner-lite';

 import Index from './src/pageIndex.js';
 import Person from './src/pagePerson.js';

export default class App extends React.Component {

      //构造函数
      constructor(props) {
          super(props);
          this.state = {
            tab: 'index',
          };
      }

      //Tab标签点击
      select(tabName) {
          this.setState({
            tab: tabName,
          });
      }

      render() {
        return (
            <TabBarIOS
              unselectedTintColor='gray'
              tintColor='darkslateblue'
              barTintColor='#d9d9d9'>
              <TabBarIOS.Item title='首页' icon={require('./resources/首页-默认.png')}
                onPress={this.select.bind(this, 'index')}
                selected={this.state.tab === 'index'}>
                  <View style={styles.container}>
                    <StatusBar
                      backgroundColor="blue"
                      barStyle="dark-content"
                    />
                  <Index></Index>
                  </View>
              </TabBarIOS.Item>

              <TabBarIOS.Item title='资讯' icon={require('./resources/资讯-默认.png')}
                onPress={this.select.bind(this, 'message')}
                selected={this.state.tab === 'message'}>
                <View style={styles.container}>
                  <View style={{height: 120}}>
                    <BannerLite
                      items={[
                        {
                          title: "Hello",
                          subtitle: "World",
                          imageURL: "http://h.hiphotos.baidu.com/image/h%3D200/sign=3a225a4129a4462361caa262a8227246/30adcbef76094b36fbaf3bd6aacc7cd98d109dcf.jpg",
                          onPress:(index)=>{Alert.alert(
                              "tap"+index
                          )}
                        },
                        {
                          title: "How",
                          subtitle: "R U",
                          imageURL: "http://a4.att.hudong.com/35/64/01300000276819133197645554930.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          title: ":dog::dog::dog:",
                          subtitle: "呵呵呵呵呵",
                          imageURL: "http://pic69.nipic.com/file/20150610/21067407_235515103000_2.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                      ]}
                    />
                  </View>
                </View>
              </TabBarIOS.Item>

              <TabBarIOS.Item title='排行榜' icon={require('./resources/排行榜-默认.png')}
                onPress={this.select.bind(this, 'range')}
                selected={this.state.tab === 'range'}>
                <View style={styles.container}>
                </View>
              </TabBarIOS.Item>

              <TabBarIOS.Item title='我的' icon={require('./resources/我的-默认.png')}
                onPress={this.select.bind(this, 'person')}
                selected={this.state.tab === 'person'}>
                <View style={styles.container}>
                  <Person></Person>
                </View>
              </TabBarIOS.Item>

            </TabBarIOS>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
