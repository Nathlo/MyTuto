import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Styles } from './Style';
import { TextInput, List, Button } from 'react-native-paper';

const chatsinit = [{
  id: '1',
  user: 'derick',
  message: 'The best',
  date: '12/09/2024',
},
{
  id: '2',
  user: 'derick',
  message: 'The best',
  date: '12/09/2024',
},
{
  id: '3',
  user: 'derick',
  message: 'The best',
  date: '12/09/2024',
},
{
  id: '4',
  user: 'derick',
  message: 'The best',
  date: '12/09/2024',
},
{
  id: '5',
  user: 'derick',
  message: 'The best',
  date: '12/09/2024',
}]

const App = () => {
  const [message, setMessage] = useState(chatsinit);
  return (
    <View style={Styles.container}>
      <View style={Styles.menu}>

        <View style={Styles.box}>
          <Button icon="menu"></Button>
            
        </View>

        <View>
          <Text style={Styles.titleText}>SupAp</Text>
        </View>

        <View style={Styles.box}>
        <Button icon="account"></Button>
        </View>

      </View>

        <View style={Styles.content}>
          
          <TextInput 
            label='saisir une tâche'
          />

          <FlatList 
            data={message}
            keyExtractor={item=>item.id}
            renderItem={
                ({item})=><List.Item title={item.user}
            description={item.message}
            right={props=><Text>{item.date}</Text>}/>}
          />

          <Button icon="camera">
            Press me
          </Button>

        </View>

      </View>
  )
}

export default App

const styles = StyleSheet.create({})