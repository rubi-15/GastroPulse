import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function LandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      {/* Full Background Image */}
      <ImageBackground
        source={require("../../assets/welcome-bg.jpeg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Overlay */}
        <View style={styles.overlay}>
          {/* Bottom Card */}
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>
              Healthy Meals,
              {"\n"}
              Less Waste
            </Text>

            <Text style={styles.subtitle}>
              GastroPulse connects users with healthy homemade meals while
              helping reduce food waste through smart food sharing and nutrition
              tracking.
            </Text>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupButton}
             onPress={() => navigation.navigate("SignupRole")}>
              <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "flex-end",
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.30)",
  },

  bottomContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 35,
    paddingBottom: 25,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#111111",
    lineHeight: 45,
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 26,
    marginBottom: 35,
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#23B6A6",
    paddingVertical: 17,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  loginText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  signupButton: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingVertical: 17,
    borderRadius: 12,
    alignItems: "center",
  },

  signupText: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "600",
  },
});