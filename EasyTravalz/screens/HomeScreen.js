import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from "react-native";
import { Icon, Image } from "react-native-elements";
import StarRating from "react-native-star-rating";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const navigation = useNavigation(); // Using useNavigation hook to get navigation object
  const route = useRoute();
  const { id } = route.params;

  const [user, setUser] = useState({
    id: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: ""
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://192.168.56.1:5005/getuserbyid/${id}`);
        console.log(response.data)
        if (response.status === 200) {
          const userData = response.data.user;
          setUser({
            id: userData.id,
            userName: userData.userName,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            password: userData.password
          });
        } else {
          console.log("User not found");
        }
      } catch (err) {
        console.log("500 server error", err);
      }
    };

    fetchUser();
  }, []);

  const [agency, setAgency] = useState([]);

  useEffect(() => {
    const getAgencies = async () => {
      try {
        const response = await axios.get("http://192.168.56.1:5005/getagencies");
        if (response.data) {
          const formattedData = response.data;
          const agencies = formattedData.formattedAgency.map((agency) => ({
            id: agency.id,
            image: agency.image,
            agencyName: agency.agencyName,
            country: agency.country,
            city: agency.city,
            website: agency.website,
            description: agency.description,
          }));
          setAgency(agencies);
          setLoading(false); // Data fetched, set loading to false
        }
      } catch (err) {
        console.log("Agencies not found", err);
      }
    };

    getAgencies();
  }, []);

  const handleAgencyPress = (agencyId) => {
    navigation.navigate("AgencyDetails", { id: agencyId });
    console.log("Agency details Id", agencyId);
  };

  const username = user.userName;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator size="large" color="#000" style={styles.loadingIndicator} />
        ) : (
          <ScrollView>
            <View style={styles.main}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.profilename}>Hi, {username}!</Text>
                  <View style={styles.subheader}>
                    <Image source={require("../assets/home/images/icon.png")} style={styles.locationIcon} />
                    <Text style={styles.location}>Sydney, Australia</Text>
                    <Image source={require("../assets/home/images/drop-arrow.png")} />
                  </View>
                </View>
                <View style={styles.headerIcons}>
                  <Image source={require("../assets/notifcation.png")} style={styles.notiIcon} />
                  <Image source={require("../assets/alerm.png")} style={styles.msgIcon} />
                </View>
              </View>
              <View style={styles.search}>
                <Icon
                  name="search"
                  size={30}
                  color="#000"
                  style={{ marginRight: 10, marginTop: 15 }}
                />
                <TextInput
                  placeholder="Sri Lanka Travel Agency"
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    alignItems: "center",
                    justifyContent: 'flex-end'
                  }}
                />
              </View>
              {agency.map((item) => (
                <TouchableOpacity style={styles.agency} onPress={() => handleAgencyPress(item.id)} key={item.id}>
                  <View>
                    <Image source={require("../assets/home/images/mg-icon.png")} style={styles.mgIcon} />
                    <Image source={{ uri: `http://192.168.56.1:5005/${item.image}` }} style={styles.agencyImg} />
                    <View style={styles.overlay}></View>
                    <View style={styles.agencyContent}>
                      <Text style={styles.agencyTitle}>{item.agencyName}</Text>
                      <Text style={styles.locationTitle}>{item.city} {item.country}</Text>
                      <View style={styles.stars}>
                        <StarRating
                          disabled={true}
                          maxStars={5}
                          rating={4.5}
                          starSize={20}
                          fullStarColor="#FFD700"
                          emptyStarColor="#CCCCCC"
                          starMarginHorizontal={10}
                          starStyle={{ marginRight: 5, marginTop: 5 }}
                        />
                        <Text style={styles.starText}>(1.8K)</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    marginTop: 30,
    display: "flex",
    flexDirection: 'row'
  },
  profilename: {
    fontSize: 16,
    color: '#0B131E',
    marginBottom: 5
  },
  location: {
    fontSize: 19,
    color: '#000',
    fontWeight: 'bold'
  },
  subheader: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    gap: 7,
  },
  locationIcon: {
    width: 25,
    height: 30,
  },
  headerIcons: {
    display: 'flex',
    flexDirection: "row",
    gap: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 100,
  },
  msgIcon: {
    position: 'relative',
    width: 30,
    height: 30,
  },
  notiIcon: {
    position: 'relative',
    top: 15,
    width: 40,
    height: 40,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 2,
  },
  agency: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    top: 10,
    marginBottom: 15
  },
  agencyImg: {
    width: '100%',
    height: 190,
    borderRadius: 18,
    zIndex: -1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
    borderRadius: 18,
  },
  agencyContent: {
    position: 'absolute',
    top: 100,
    left: 20,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
  },
  agencyTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '900',
    zIndex: 3,
  },
  locationTitle: {
    color: '#fff',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  starText: {
    color: '#fff',
    zIndex: 3,
    fontSize: 18
  },
  mgIcon: {
    transform: [{ scale: 2 }],
  },
  loadingIndicator: {
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    marginTop:200,
  },
});

export default HomeScreen;
