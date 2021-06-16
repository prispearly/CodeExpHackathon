import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";

let map;
let service;
let infowindow;
  

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState(null);
  console.log(text) //pass props to api 


  // console.log(props.navigation)
  function getLat(text) {
    
    
  }

  function initialize() {
  //http://maps.googleapis.com/maps/api/geocode/json?address={text}

    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
  
    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
      });
  
    var request = {
      location: pyrmont,
      radius: '500',
      type: ['restaurant']
    };
  
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  

  return (
    <ScrollView style={{ backgroundColor: "gold" }}>
      <Button
        onPress={() => navigation.navigate("Screen1")}
        title="Go to Screen1"
      />
       <Button
        onPress={() => navigation.navigate("QueueCard")}
        title="Go to QueueCard"
      />

      
      <Button 
        onPress={() => navigation.navigate("SearchScreen")}
        title='Go to SearchScreen'
      />

    <Text style={styles.titleText}>Welcome</Text>
      <Text style={styles.baseText}>Please enter your location</Text>

      <View style={styles.belowSection}>
        <View style={styles.searchSection}>
          <Entypo
            tyle={styles.locationIcon}
            name="location-pin"
            size={20}
            color="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="postal code here"
            onChangeText={onChangeText}
        
            keyboardType="numeric"
          />
        </View>
        { text !== null ? <Button  color="#000" title="Get Started" onPress={() => navigation.navigate("Screen1")}></Button> : null }
      </View>
    </ScrollView>
  );
};

//store textinput in setState
//show button only when textinput is a valid postal code

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "SofiaPro",
    marginLeft: 30,
    marginTop: 100,
    fontSize: 30,
  },
  titleText: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 30,
    fontFamily: "SofiaPro",
  },

  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 50
  },
  locationIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },

  belowSection: {
    flexDirection: "column",
    width: "60%",
    marginLeft: 30,
  },

  
});

export default HomeScreen;

/*
<TextInput
        style={styles.input}
        onChangeText={onChangeText}
          value={text}
          placeholder="postal code here"
      />
    

input: {
    backgroundColor: '#ffffff',
    width: "60%", 
    marginLeft: 30,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
*/
