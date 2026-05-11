import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({
  navigation,
}) {

  const [selectedRole, setSelectedRole] =
    useState("");

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // ==========================================
  // LOGIN FUNCTION
  // ==========================================
  const handleLogin = () => {

    if (
      !selectedRole ||
      !username ||
      !email ||
      !password
    ) {

      Alert.alert(
        "Missing Details",
        "Please fill all fields"
      );

      return;
    }

    // ==========================================
    // USER LOGIN
    // ==========================================
    if (selectedRole === "user") {

      navigation.replace(
        "UserHome",
        {
          userName: username,
          userEmail: email,
        }
      );
    }

    // ==========================================
    // COOK LOGIN
    // ==========================================
    else if (
      selectedRole === "cook"
    ) {

      navigation.replace(
        "CookHome",
        {
          cookName: username,
          cookEmail: email,
        }
      );
    }

    // ==========================================
    // DELIVERY LOGIN
    // ==========================================
    else if (
      selectedRole === "delivery"
    ) {

      navigation.replace(
        "DeliveryHome",
        {
          deliveryName: username,
          deliveryEmail: email,
        }
      );
    }

  };

  // ==========================================
  // FORGOT PASSWORD
  // ==========================================
  const handleForgotPassword =
    () => {

      if (!email) {

        Alert.alert(
          "Email Required",
          "Please enter your email address"
        );

        return;
      }

      Alert.alert(
        "Password Reset",
        `Reset link sent to ${email}`
      );
    };

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#F7F7F7"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={
          styles.scrollContainer
        }
      >

        {/* HEADER */}
        <View style={styles.headerContainer}>

          <Text style={styles.welcomeText}>
            Welcome Back 👋
          </Text>

          <Text style={styles.subText}>
            Login to continue your
            healthy food journey with
            GastroPulse.
          </Text>

        </View>

        {/* ROLE TITLE */}
        <Text style={styles.sectionTitle}>
          Select Role
        </Text>

        {/* USER ROLE */}
        <TouchableOpacity
          style={[
            styles.roleCard,

            selectedRole ===
              "user" &&
              styles.selectedCard,
          ]}
          onPress={() =>
            setSelectedRole("user")
          }
        >

          <View
            style={styles.roleTop}
          >

            <Ionicons
              name="person-outline"
              size={32}
              color="#16b39a"
            />

            <Text
              style={styles.roleTitle}
            >
              User
            </Text>

          </View>

          <Text
            style={
              styles.roleDescription
            }
          >
            Order healthy homemade
            meals based on your
            nutrition goals.
          </Text>

        </TouchableOpacity>

        {/* COOK ROLE */}
        <TouchableOpacity
          style={[
            styles.roleCard,

            selectedRole ===
              "cook" &&
              styles.selectedCard,
          ]}
          onPress={() =>
            setSelectedRole("cook")
          }
        >

          <View
            style={styles.roleTop}
          >

            <Ionicons
              name="restaurant-outline"
              size={32}
              color="#16b39a"
            />

            <Text
              style={styles.roleTitle}
            >
              Home Cook
            </Text>

          </View>

          <Text
            style={
              styles.roleDescription
            }
          >
            Share your cooking skills
            and earn through healthy
            meals.
          </Text>

        </TouchableOpacity>

        {/* DELIVERY ROLE */}
        <TouchableOpacity
          style={[
            styles.roleCard,

            selectedRole ===
              "delivery" &&
              styles.selectedCard,
          ]}
          onPress={() =>
            setSelectedRole(
              "delivery"
            )
          }
        >

          <View
            style={styles.roleTop}
          >

            <Ionicons
              name="bicycle-outline"
              size={32}
              color="#16b39a"
            />

            <Text
              style={styles.roleTitle}
            >
              Delivery Partner
            </Text>

          </View>

          <Text
            style={
              styles.roleDescription
            }
          >
            Deliver healthy meals to
            customers quickly and
            safely.
          </Text>

        </TouchableOpacity>

        {/* USERNAME */}
        <TextInput
          placeholder="Username"
          placeholderTextColor="#777"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        {/* EMAIL */}
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* PASSWORD */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* FORGOT PASSWORD */}
        <TouchableOpacity
          style={
            styles.forgotContainer
          }
          onPress={
            handleForgotPassword
          }
        >

          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>

        </TouchableOpacity>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >

          <Text style={styles.loginText}>
            Login
          </Text>

        </TouchableOpacity>

        {/* SIGNUP */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() =>
            navigation.navigate(
              "SignupRole"
            )
          }
        >

          <Text style={styles.signupText}>
            Create New Account
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  scrollContainer: {
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 40,
  },

  headerContainer: {
    marginBottom: 30,
  },

  welcomeText: {
    fontSize: 34,
    fontWeight: "800",
    color: "#111",
    marginBottom: 10,
  },

  subText: {
    fontSize: 15,
    color: "#666",
    lineHeight: 24,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 18,
  },

  roleCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E4E4E4",
  },

  selectedCard: {
    borderColor: "#16b39a",
    borderWidth: 2,
    backgroundColor: "#F4FFFC",
  },

  roleTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  roleTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginLeft: 12,
  },

  roleDescription: {
    color: "#666",
    lineHeight: 22,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 17,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E4E4E4",
  },

  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 25,
  },

  forgotText: {
    color: "#16b39a",
    fontWeight: "700",
    fontSize: 14,
  },

  loginButton: {
    backgroundColor: "#16b39a",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 18,
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  signupButton: {
    borderWidth: 1.5,
    borderColor: "#16b39a",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  signupText: {
    color: "#16b39a",
    fontSize: 17,
    fontWeight: "700",
  },

});
