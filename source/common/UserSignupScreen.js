// ======================================================
// FILE: source/user/UserSignupScreen.js
// ======================================================

import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Picker } from "@react-native-picker/picker";

import { Ionicons } from "@expo/vector-icons";

export default function UserSignupScreen({
  navigation,
}) {

  // =========================================
  // USER DETAILS
  // =========================================

  const [username, setUsername] =
    useState("");

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [age, setAge] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  // =========================================
  // PASSWORD VISIBILITY
  // =========================================

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  // =========================================
  // HEALTH DETAILS
  // =========================================

  const [
    activityLevel,
    setActivityLevel,
  ] = useState("Moderate");

  const [
    workoutType,
    setWorkoutType,
  ] = useState("Gym");

  // =========================================
  // FOOD PREFERENCES
  // =========================================

  const [selectedPreferences,
    setSelectedPreferences] =
    useState([]);

  const preferences = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Keto",
    "Paleo",
    "Dairy-Free",
    "Nut-Free",
    "Spicy",
  ];

  // =========================================
  // TOGGLE FOOD PREFERENCE
  // =========================================

  const togglePreference = (
    item
  ) => {

    if (
      selectedPreferences.includes(item)
    ) {

      setSelectedPreferences(
        selectedPreferences.filter(
          (pref) => pref !== item
        )
      );

    } else {

      setSelectedPreferences([
        ...selectedPreferences,
        item,
      ]);

    }
  };

  // =========================================
  // SIGNUP
  // =========================================

  const handleSignup = () => {

    // VALIDATION

    if (
      !username ||
      !name ||
      !email ||
      !phone ||
      !age ||
      !height ||
      !weight ||
      !password ||
      !confirmPassword
    ) {

      Alert.alert(
        "Validation Error",
        "Please fill all fields"
      );

      return;
    }

    // PASSWORD CHECK

    if (
      password !== confirmPassword
    ) {

      Alert.alert(
        "Password Error",
        "Passwords do not match"
      );

      return;
    }

    // SUCCESS

    Alert.alert(
      "Registration Successful",
      `Welcome ${name} 👋`,
      [
        {
          text: "Continue",

          onPress: () =>

            navigation.replace(
              "UserHome",
              {
                userName:
                  username || name,

                email,

                preferences:
                  selectedPreferences,

                workoutType,

                activityLevel,
              }
            ),
        },
      ]
    );
  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <TouchableOpacity
            onPress={() =>
              navigation.goBack()
            }
          >

            <Ionicons
              name="arrow-back"
              size={24}
              color="#111"
            />

          </TouchableOpacity>

          <Text style={styles.title}>
            User Registration
          </Text>

          <Text style={styles.subtitle}>
            Create your healthy meal profile
          </Text>

        </View>

        {/* USERNAME */}

        <Text style={styles.label}>
          Username
        </Text>

        <TextInput
          placeholder="Enter username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        {/* NAME */}

        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          placeholder="Your full name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        {/* EMAIL */}

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* PHONE */}

        <Text style={styles.label}>
          Phone Number
        </Text>

        <TextInput
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />

        {/* AGE */}

        <Text style={styles.label}>
          Age
        </Text>

        <TextInput
          placeholder="Your age"
          keyboardType="numeric"
          style={styles.input}
          value={age}
          onChangeText={setAge}
        />

        {/* HEIGHT */}

        <Text style={styles.label}>
          Height (cm)
        </Text>

        <TextInput
          placeholder="Your height"
          keyboardType="numeric"
          style={styles.input}
          value={height}
          onChangeText={setHeight}
        />

        {/* WEIGHT */}

        <Text style={styles.label}>
          Weight (kg)
        </Text>

        <TextInput
          placeholder="Your weight"
          keyboardType="numeric"
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
        />

        {/* PASSWORD */}

        <Text style={styles.label}>
          Password
        </Text>

        <View style={styles.passwordContainer}>

          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() =>
              setShowPassword(
                !showPassword
              )
            }
          >

            <Text style={styles.showText}>
              {showPassword
                ? "Hide"
                : "Show"}
            </Text>

          </TouchableOpacity>

        </View>

        {/* CONFIRM PASSWORD */}

        <Text style={styles.label}>
          Confirm Password
        </Text>

        <View style={styles.passwordContainer}>

          <TextInput
            placeholder="Confirm password"
            secureTextEntry={
              !showConfirmPassword
            }
            style={styles.passwordInput}
            value={confirmPassword}
            onChangeText={
              setConfirmPassword
            }
          />

          <TouchableOpacity
            onPress={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >

            <Text style={styles.showText}>
              {showConfirmPassword
                ? "Hide"
                : "Show"}
            </Text>

          </TouchableOpacity>

        </View>

        {/* ACTIVITY LEVEL */}

        <Text style={styles.label}>
          Daily Activity Level
        </Text>

        <View style={styles.dropdownContainer}>

          <Picker
            selectedValue={activityLevel}
            onValueChange={(itemValue) =>
              setActivityLevel(
                itemValue
              )
            }
          >

            <Picker.Item
              label="Low Activity"
              value="Low Activity"
            />

            <Picker.Item
              label="Moderate"
              value="Moderate"
            />

            <Picker.Item
              label="High Activity"
              value="High Activity"
            />

          </Picker>

        </View>

        {/* WORKOUT */}

        <Text style={styles.label}>
          Workout Type
        </Text>

        <View style={styles.dropdownContainer}>

          <Picker
            selectedValue={workoutType}
            onValueChange={(itemValue) =>
              setWorkoutType(
                itemValue
              )
            }
          >

            <Picker.Item
              label="Gym"
              value="Gym"
            />

            <Picker.Item
              label="Yoga"
              value="Yoga"
            />

            <Picker.Item
              label="Running"
              value="Running"
            />

            <Picker.Item
              label="Home Workout"
              value="Home Workout"
            />

          </Picker>

        </View>

        {/* FOOD PREFERENCES */}

        <Text style={styles.label}>
          Food Preferences
        </Text>

        <View style={styles.preferenceContainer}>

          {preferences.map(
            (item, index) => {

              const isSelected =
                selectedPreferences.includes(
                  item
                );

              return (

                <TouchableOpacity
                  key={index}
                  style={[
                    styles.preferenceButton,

                    isSelected &&
                      styles.selectedPreference,
                  ]}
                  onPress={() =>
                    togglePreference(item)
                  }
                >

                  <Text
                    style={[
                      styles.preferenceText,

                      isSelected &&
                        styles.selectedPreferenceText,
                    ]}
                  >
                    {item}
                  </Text>

                </TouchableOpacity>
              );
            }
          )}

        </View>

        {/* SUBMIT */}

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSignup}
        >

          <Text style={styles.saveButtonText}>
            Create Account
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 18,
  },

  header: {
    marginTop: 20,
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
    marginTop: 15,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 15,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  passwordContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 15,
  },

  showText: {
    color: "#23B6A6",
    fontWeight: "700",
  },

  dropdownContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 18,
    overflow: "hidden",
  },

  preferenceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
  },

  preferenceButton: {
    backgroundColor: "#EEEEEE",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 12,
  },

  selectedPreference: {
    backgroundColor: "#23B6A6",
  },

  preferenceText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  selectedPreferenceText: {
    color: "#FFFFFF",
  },

  saveButton: {
    backgroundColor: "#23B6A6",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

});
