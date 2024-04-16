import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";

function AgencyDetails({navigation}) {

    const handlePress=()=>{
        navigation.navigate("Home")
    }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.main}>
          <View>
            <Image
              source={require("../assets/AgencyDetails/arrow-left.png")}
              style={styles.backBtn}
            />
          </View>
          <View style={styles.agencyProfile}>
            <Image
              source={require("../assets/home/images/agency/a-1.png")}
              style={styles.agencyProfileImg}
            />
            <View>
              <Text style={styles.agencyProfileTitle}>360 Tours Lanka</Text>
              <Text style={styles.joinDate}>Joined in March 2016</Text>
            </View>
          </View>
          <View style={styles.verified}>
            <Image
              source={require("../assets/AgencyDetails/shield.png")}
              style={styles.sheild}
            />
            <Text style={styles.verifiedText}>Verified</Text>
            <Image
              source={require("../assets/AgencyDetails/Star-1.png")}
              style={styles.star}
            />
            <Text style={styles.verifiedText}>167 reviews</Text>
            <View style={styles.groupImage}>
              <Image
                source={require("../assets/AgencyDetails/image-group.png")}
                style={styles.agencyProfileImgGroup}
              />
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.paragraph}>
              basically i'm an ambitious risk taker kiddo from Sri Lanka been
              living abrade for the lase 8 year trying to find his place in life
              i've taken plenty of experience on my way to achieve success by
              working in multiple industries
            </Text>
            <View style={styles.locate}>
            <Image source={require("../assets/home/images/icon.png")} style={styles.locationIcon}/>
            <Text style={styles.location}>Sydney, Australia</Text>
            <View  >
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
                    <Text style={{color:'#818C9B'}}>www.360tourslanka.com</Text>
                </View>
                <View style={{marginTop:3}}>
                    <Text style={{fontSize:16,fontWeight:700,marginBottom:10}}>Registration No</Text>
                    <Text style={{color:'#818C9B'}}>SLTDA/SQA/TA/01942</Text>
                </View>
                <View style={{marginTop:3}}>
                    <Text style={{fontSize:16,fontWeight:700,marginBottom:10}}>Licence No</Text>
                    <Text style={{color:'#818C9B'}}>TA/2022/0090</Text>
                </View>
            </View>
          </View>
          
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginTop: 15,
  },
  agencyProfileImg: {
    width: 65,
    height: 65,
    borderRadius: 50,
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
        fontSize:21,
        color:'#fff'
      }
});
export default AgencyDetails;
