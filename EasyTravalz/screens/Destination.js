import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import { Calendar } from "react-native-calendars";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (day) => {
    const selectedDateString = day.dateString;
    setSelectedDate(selectedDateString);
    setInputDate(selectedDateString);
  };

  const handleLocationChange = (location) => {
    setInputLocation(location);
    // Optionally, you can update the selectedLocation state here if needed
   
  };

  const handleSubmit = () => {
    if (!selectedDate || !inputLocation) {
      // Display error notification if date or location is not selected
      Alert.alert("Error", "Please select both date and enter a location");
      return; // Exit function early if validation fails
    }


    console.log("Selected Date:", selectedDate);
    console.log("Entered Location:", inputLocation);

   
    setInputDate("");
    setInputLocation("");

    
  };

  const handleOKPress = () => {
    setShowCalendar(false); // Hide the calendar
  };

  const handleInputPress = () => {
    setShowCalendar(true); // Show the calendar
  };

  return (
    <View style={styles.container}>
      {/* Location Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/Destination/location.png")}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={inputLocation}
          onChangeText={handleLocationChange}
        />
      </View>

      {/* Date Input */}
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={handleInputPress}
      >
        <Image
          source={require("../assets/Destination/calendar.png")}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: inputDate ? "black" : "gray" }]}
          placeholder="Select Date"
          value={inputDate}
          editable={false}
        />
        {showCalendar && (
          <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {/* Calendar */}
      {showCalendar && (
        <Calendar
          style={styles.calendar}
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: "#2196F3",
            },
          }}
        />
      )}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    width: "95%",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  okButton: {
    backgroundColor: "#2196F3",
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  okButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  calendar: {
    marginTop: 20,
    width: 300,
    height: 320,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#2196F3",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    width: "95%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 22,
    marginRight: 10,
  },
});

export default MyCalendar;
