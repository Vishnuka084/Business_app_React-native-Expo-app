// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Page = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Profile</Text>
//     </View>
//   )
// }

// export default Page

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//   }
// })

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual profile picture URL
        style={styles.profilePicture}
      />
      <Text style={styles.userName}>Vishnuka Yahan De Silva</Text>
      <Text style={styles.userEmail}>vishnuka.doe@gmail.com</Text>
      <Text style={styles.userBio}>
        A short bio about the user. This is a brief description that might
        include interests, hobbies, or other personal information.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  profilePicture: {
    width: 300, // Adjusted size for a more realistic profile picture
    height: 300,
    borderRadius: 200,
    marginBottom: 35
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5
  },
  userEmail: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20
  },
  userBio: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: "row", // Align buttons in a row
    justifyContent: "space-between", // Distribute space evenly between buttons
    width: "100%", // Full width for container
    maxWidth: 400 // Optional: Limit maximum width
  },
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
    flex: 1 // Buttons will take up equal space
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center" // Center text within button
  }
});

// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";
// import Colors from "@/constants/Colors";

// const Page = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual profile picture URL
//         style={styles.profilePicture}
//       />
//       <Text style={styles.userName}>Vishnuka Yahan De Silva </Text>
//       <Text style={styles.userEmail}>vishnuka.doe@gmail.com</Text>
//       <Text style={styles.userBio}>
//         A short bio about the user. This is a brief description that might
//         include interests, hobbies, or other personal information.
//       </Text>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Edit Profile</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Settings</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Page;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f5f5f5"
//   },
//   profilePicture: {
//     width: 300,
//     height: 300,
//     borderRadius: 200,
//     marginBottom: 1
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 5
//   },
//   userEmail: {
//     fontSize: 16,
//     color: "#888",
//     marginBottom: 20
//   },
//   userBio: {
//     fontSize: 14,
//     color: "#333",
//     textAlign: "center",
//     marginBottom: 20
//   },
//   button: {
//     backgroundColor: Colors.primaryColor,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     margin: 5
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16
//   }
// });
