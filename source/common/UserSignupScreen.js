import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function UserSignupScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            User Registration
          </Text>

          <Text style={styles.subtitle}>
            Profile setup — step 1 of 1
          </Text>
        </View>

        {/* Name */}
        <Text style={styles.label}>Name</Text>

        <TextInput
          placeholder="Your full name"
          style={styles.input}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          style={styles.input}
        />

        {/* Phone */}
        <Text style={styles.label}>
          Phone Number
        </Text>

        <TextInput
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          style={styles.input}
        />

        {/* Age */}
        <Text style={styles.label}>Age</Text>

        <TextInput
          placeholder="Your age in years"
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Height */}
        <Text style={styles.label}>
          Height (cm)
        </Text>

        <TextInput
          placeholder="Your height in centimeters"
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Weight */}
        <Text style={styles.label}>
          Weight (kg)
        </Text>

        <TextInput
          placeholder="Your weight in kilograms"
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />

          <TouchableOpacity
            onPress={() =>
              setShowPassword(!showPassword)
            }
          >
            <Text style={styles.showText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>
          Confirm Password
        </Text>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm password"
            secureTextEntry={!showConfirmPassword}
            style={styles.passwordInput}
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

        {/* Activity */}
        <Text style={styles.label}>
          Daily Activity Level
        </Text>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            Select your activity level
          </Text>
        </TouchableOpacity>

        {/* Workout */}
        <Text style={styles.label}>
          Workout Type
        </Text>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            Select your primary workout type
          </Text>
        </TouchableOpacity>

        {/* Preferences */}
        <Text style={styles.label}>
          Food Preferences
        </Text>

        <View style={styles.preferenceContainer}>
          {preferences.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.preferenceButton}
            >
              <Text style={styles.preferenceText}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() =>
            navigation.navigate("Login")
          }
        >
          <Text style={styles.saveButtonText}>
            Save & Go to Login
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
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
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
    fontSize: 16,
  },

  showText: {
    color: "#23B6A6",
    fontWeight: "700",
  },

  dropdown: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  dropdownText: {
    color: "#777",
    fontSize: 16,
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

  preferenceText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
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