import { StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Text, View } from '../components/Themed';
import { EventDataLoader } from '../services/DataSources'; 


export default function EventsScreen() {
  const events = EventDataLoader(); 

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {events.data.map((event, index) => {
        return (
          <Card key={index}>
          <Card.Title>{event.event}</Card.Title>
          <Card.Divider />
          {event.date} - {event.price} <br/>
          {event.description}
        </Card>
        )
      })}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
