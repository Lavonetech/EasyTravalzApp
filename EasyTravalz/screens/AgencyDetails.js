import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


function AgencyDetails() {

  
  const navigation = useNavigation(); // Using useNavigation hook to get navigation object
  const route = useRoute();

  
  const {id}=route.params;

  const [agency,setAgency]=useState({
    id: "",
    image:"",
    agencyName: "",
    country:"",
    city:"",
    website:"",
    licenceNo:"",
    RegistrationNo:"",
    description: ""
  })
    const handlePress=()=>{
        navigation.navigate("HomeScreen")
    }

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://192.168.56.1:5005/getagency/${id}`);
          console.log(response.data);
          if (response.status === 200) {
            const agencyData = response.data.formattedAgency;
            setAgency(() => ({
              id: agencyData.id,
              image: agencyData.image,
              agencyName: agencyData.agencyName,
              country: agencyData.country,
              city: agencyData.city,
              website: agencyData.website,
              licenceNo: agencyData.licenceNo,
              RegistrationNo: agencyData.RegistrationNo,
              description: agencyData.description,
              // Update with more fields as needed
            }));
          } else {
            console.log("Travel agency not found");
          }
        } catch (error) {
          console.log("Error fetching agency details:", error);
          // Handle error gracefully, e.g., set error message state
        }
      };
    
      fetchProduct();
    }, [id]);
    

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.main}>
              <View style={styles.agencyProfile}>
                <Image
                source={{ uri: `http://192.168.56.1:5005/${agency.image}` }}  // Use uri for network images
                  style={styles.agencyProfileImg}
                />
                <View>
                  <Text style={styles.agencyProfileTitle}>{agency.agencyName}</Text>
                  <Text style={styles.joinDate}>Joined in March 2016</Text>
                </View>
              </View>
              <View style={styles.verified}>
                <Image
                  source={require("../assets/agencyDetails/shield.png")}
                  style={styles.sheild}
                />
                <Text style={styles.verifiedText}>Verified</Text>
                <Image
                  source={require("../assets/agencyDetails/Star-1.png")}
                  style={styles.star}
                />
                <Text style={styles.verifiedText}>167 reviews</Text>
                <View style={styles.groupImage}>
                  <Image
                    source={require("../assets/agencyDetails/image-group.png")}
                    style={styles.agencyProfileImgGroup}
                  />
                </View>
              </View>
              <View style={styles.details}>
                <Text style={styles.paragraph}>{agency.description}</Text>
                <View style={styles.locate}>
                  <Image source={require("../assets/home/images/icon.png")} style={styles.locationIcon}/>
                  <Text style={styles.location}>{agency.city}, {agency.country}</Text>
                  <View>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                      <Text style={styles.btnText}>Pay Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={{marginTop:3}}>
                    <Text style={{fontSize:16,fontWeight:700,marginBottom:10}}>Address</Text>
                    <Text style={{color:'#818C9B'}}>38/A Piliyandala</Text>
                  </View>
                  <View style={{marginTop:3}}>
                    <Text style={{fontSize:16,fontWeight:700,marginBottom:10}}>Web</Text>
                    <Text style={{color:'#818C9B'}}>{agency.website}</Text>
                  </View>
                  <View style={{marginTop:3}}>
                    <Text style={{fontSize:16,fontWeight:700,marginBottom:10}}>Registration No</Text>
                    <Text style={{color:'#818C9B'}}>{agency.RegistrationNo}</Text>
                  </View>
                  <View style={{marginTop:3}}>
                    <Text style={{fontSize:16,fontWeight:700,marginBottom:10}}>Licence No</Text>
                    <Text style={{color:'#818C9B'}}>{agency.licenceNo}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.fullWidthBtn}>
                <Text style={styles.btnText}>Contact {agency.agencyName}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
  },
  main: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  backBtn: {
    width: 10,
    height: 18,
  },

  verified: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CED6E1",
  },
  sheild: {
    width: 18,
    height: 20,
  },

  verifiedText: {
    fontSize: 18,
    color: "#798494",
    marginTop: -2,
  },
  star: {
    marginTop: 3,
    width: 15,
    height: 15,
  },
  agencyProfile: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: -30,
  },
  agencyProfileImg: {
    width: 65,
    height: 65,
    borderRadius: 50,
    resizeMode:'contain'
  },
  groupImage: {
    marginLeft: 60,
    marginTop: -25,
    marginBottom: 5,
  },
  agencyProfileImgGroup: {
    width: 65,
    height: 65,
    borderRadius: 20,
  },
  agencyProfileTitle: {
    fontSize: 25,
    fontWeight: "900",
  },
  joinDate: {
    fontSize: 16,
    color: "#798494",
  },
  details:{
    marginTop:20
  },
  paragraph:{
    color:'#798494',
    lineHeight:28,
    fontSize:15,

  },

  locate:{
 marginTop:25,
 display:'flex',
 flexDirection:'row',
 gap:10
  },
  locationIcon:{
    width:20,
    height:25,
    },
    location:{
        fontSize:17,
        color:'#1B293D',
        fontWeight:'bold'
      },
      buttonContainer: {
        paddingHorizontal: 40, // Adjust the padding as needed
        paddingVertical: 20, // Adjust the padding as needed
      },
      button: {
        width: "100%",
        height: 50,
        backgroundColor: "#2194FF",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
        paddingHorizontal:10,
       marginTop:-8,
       marginLeft:40
      },
      btnText:{
        fontSize:18,
        color:'#fff'
      },
      fullWidthBtn:{
        backgroundColor: '#2194FF',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop:10,
        marginBottom:10
      }
});
export default AgencyDetails;
