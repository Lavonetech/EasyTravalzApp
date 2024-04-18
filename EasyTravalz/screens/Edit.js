import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const Edit = () => {

  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  const [user, setUser] = useState({
    id: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: ""
});

const [errorMessage, setErrorMessage] = useState("");
const [successMessage,setSuccessMessage]=useState("")

  const route=useRoute();  //use useRouter to get id value!
  const {id}=route.params;
  
  const navigation=useNavigation() //navigation 
 
 

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://192.168.56.1:5005/getuserbyid/${id}`);
      console.log(response.data)
      if (response.status === 200) {
        const userData = response.data.user;
        setUser(() => ({
          
          id: userData.id,
          userName:userData.userName,
          email:userData.email,
          phoneNumber:userData.phoneNumber,
          password:userData.password
        }));

      } else {
        console.log("Usernot found");
      }
    } catch (err) {
      console.log("500 server error", err);
      setErrorMessage("500 server error, please try again");
    }
  };

  fetchUser();
}, [id]);


  const handleProfileImagePress = () => {
    setIsImageModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsImageModalVisible(false);
  };

  const handleUpdatePhoto = () => {
    console.log("Update photo button pressed");
  };

  //handling user data changes
  const handleChange = (name,value) => {
   
    setUser({
      ...user,
      [name]: value
    });
  };


  //updating user profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://192.168.56.1:5005/updateuser/${id}`,user);
  
      if (response.status===201) {
        console.log("User updated successfully",response.data);
        setSuccessMessage("User Profile Successfuly updated")

        setTimeout(()=>{
          setSuccessMessage("")
        },3000)
     
        // You can redirect the user back to the product list or another page here
      } else {
        console.log("Server return error");
      }
    } catch (err) {
      console.log(" error", err);
      setErrorMessage("Eroor updating... please try again");
    }
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });


  // Check if fonts are loaded before rendering
  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }


  return (
    <View style={styles.container}>
        {successMessage && <Text style={styles.success}>{successMessage}</Text>}
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

      <TouchableOpacity onPress={handleProfileImagePress}>
        <View style={styles.profileSection}>
          <Image
            source={require("../assets/editpersonalinfo/profile.jpeg")}
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={handleUpdatePhoto}
          >
            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/editpersonalinfo/camera.png")}
                style={styles.cameraIcon}
              />
              <Text style={styles.cameraButtonText}>Update photo</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Modal to display enlarged image */}
      <Modal
        visible={isImageModalVisible}
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={handleCloseModal}
        >
          <Image
            source={require("../assets/editpersonalinfo/profile.jpeg")}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Modal>

     
      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
        
          value={user.userName}
          onChangeText={(value)=>handleChange("userName",value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
         
          value={user.email}
          onChangeText={(value)=>handleChange("email",value)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={user.phoneNumber}
          onChangeText={(value)=>handleChange("phoneNumber",value)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
         
          onChangeText={(value)=>handleChange("password",value)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 30,
    fontFamily: "Roboto_400Regular",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black background
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
  },

  profileSection: {
   
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  cameraButton: {
    backgroundColor: "transparent",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  cameraContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cameraIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  cameraButtonText: {
    color: "#2196F3",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
  formSection: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },

  success: {
    marginTop: 10,
    marginBottom:5,
    alignItems: 'center',
    color: '#2194FF'
  },
  error: {
    marginTop: 10,
    alignItems: 'center',
    color: '#dc3545'
  }
});

export default Edit;