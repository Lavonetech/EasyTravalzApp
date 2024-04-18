
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";




const HomeScreen = () => {


  const navigation = useNavigation(); // Using useNavigation hook to get navigation object
  const route = useRoute();

  const {userName}=route.params

 // navigation for Agency Profile
  const handleAgencyPress = (agencyName) => {
    navigation.navigate("AgencyDetails", { agencyName });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
        <View style={styles.main}>

        <View style={styles.header}>
          <View >
           <Text style={styles.profilename}>Hi,{userName} !</Text>
           <View style={styles.subheader}>
           <Image source={require("../assets/home/images/icon.png")} style={styles.locationIcon}/>
            <Text style={styles.location}>Sydney, Australia</Text>
            <Image source={require("../assets/home/images/drop-arrow.png")} />
           </View>
          </View>
          <View style={styles.headerIcons}>
          <Image source={require("../assets/home/images/msg-icon.png")} style={styles.msgIcon}/>
          </View>
        </View>
        <View style={styles.search}>
          <Icon
            name="search"
            size={30}
            color="#000"
            style={{ marginRight: 10,marginTop:15}}
            
          />
          <TextInput
            placeholder="Sri Lanka Traval Agency"
            style={{
              flex: 1,
              paddingHorizontal: 15,
              paddingVertical: 15,
              alignItems: "center",
              justifyContent:'flex-end'
            }}
          />
        </View>
        <TouchableOpacity style={styles.agency} onPress={() => handleAgencyPress("360 Tours Lanka")}>
          <View>
            <Image source={require("../assets/home/images/agency/a-1.png")} style={styles.agencyImg} />
            <View style={styles.overlay}></View>
            <View style={styles.agencyContent}>
              <Text style={styles.agencyTitle}>360 Tours Lanka</Text>
              <Text style={styles.locationTitle}>Colombo, Sri Lanka</Text>
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
        <View style={styles.agency}>
            <View>
              <Image source={require("../assets/home/images/agency/a-2.png")} style={styles.agencyImg}/>
              <View style={styles.overlay}></View>
              <View style={styles.agencyContent}>
                <Text style={styles.agencyTitle}>A & A Travels (Pvt) Ltd</Text>
                <Text style={styles.locationTitle}>Bentota, Sri Lanka</Text>
                <View style={styles.stars}>
                <StarRating
                   disabled={true}
                   maxStars={5}
                   rating={5}
                   starSize={20}
                 
                   fullStarColor="#FFD700"
                   emptyStarColor="#CCCCCC"
                   starMarginHorizontal={10} 
                   starStyle={{marginRight:5,marginTop:5}}
                   />
                   <Text style={styles.starText}>
                    (1.8K)
                   </Text>
                </View>
                
              </View>
            </View>
        </View>

        <View style={styles.agency}>
            <View>
              <Image source={require("../assets/home/images/agency/a-3.png")} style={styles.agencyImg}/>
              <View style={styles.overlay}></View>
              <View style={styles.agencyContent}>
                <Text style={styles.agencyTitle}>SSD Travellers</Text>
                <Text style={styles.locationTitle}>Kandy, Sri Lanka</Text>
                <View style={styles.stars}>
                <StarRating
                   disabled={true}
                   maxStars={5}
                   rating={5}
                   starSize={20}
                 
                   fullStarColor="#FFD700"
                   emptyStarColor="#CCCCCC"
                   starMarginHorizontal={10} 
                   starStyle={{marginRight:5,marginTop:5}}
                   />
                   <Text style={styles.starText}>
                    (1.8K)
                   </Text>
                </View>
                
              </View>
            </View>
        </View>
        </View>
        </ScrollView>
      
      </SafeAreaView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    width:'100%'
  },
  main: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 5,
    marginTop: 20,
    backgroundColor: "#fff",
    sshadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30, // Increased shadow radius
    // For Android
    elevation: 2,
  },

  header:{
    marginTop:30,
    display:"flex",
   flexDirection:'row'
  },
  profilename:{
    fontSize:16,
    color:'#0B131E',
    marginBottom:5
  },
  location:{
    fontSize:19,
    color:'#000',
    fontWeight:'bold'
  },
  subheader:{
    display:'flex',
    flexDirection: "row",
    alignItems:'center',
    gap:7,
  },
  locationIcon:{
  width:25,
  height:30,
  },
  headerIcons:{
  display:'flex',
  alignItems:'flex-end',
  justifyContent:'flex-end',
  marginLeft:100,
  },
  msgIcon:{
  width:40,
  height:40,
  display:'flex',
  justifyContent:'flex-end'
  },

  agency:{
    position:'relative',
    top:10,
    marginBottom:15
    
  },
  agencyImg:{
  width:'100%',
  height:190,
  borderRadius:18,
  zIndex: -1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
    zIndex: 1, 
    borderRadius:18,
  },
  agencyContent:{
    position:'absolute',
    top:100,
    left:20,
    display:'flex',
    flexDirection:'column',
    zIndex: 2,
  },
  agencyTitle:{
  color:'#fff',
  fontSize:25,
  fontWeight:'900',
  zIndex: 3,
  },

  locationTitle:{
  color:'#fff',
  
  },

  stars:{
    display:'flex',
    flexDirection:'row',
    gap:5,
  
  },
  starText:{
    color:'#fff',
    zIndex:3,
    fontSize:18
  }
});

export default HomeScreen;