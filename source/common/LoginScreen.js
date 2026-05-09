import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [selectedRole, setSelectedRole] = useState("");

  const handleLogin = () => {
    if (selectedRole === "user") {
      navigation.navigate("UserHome");
    } else if (selectedRole === "cook") {
      navigation.navigate("CookHome");
    } else if (selectedRole === "delivery") {
      navigation.navigate("DeliveryHome");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F7F7F7"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>
            Welcome to GastroPulse
          </Text>

          <Text style={styles.subText}>
            Choose your role and continue your healthy food journey.
          </Text>
        </View>

        {/* Role Selection */}
        <Text style={styles.sectionTitle}>
          Choose Your Role
        </Text>

        {/* User */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === "user" && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole("user")}
        >
          <Text style={styles.roleIcon}>👤</Text>

          <Text style={styles.roleTitle}>User</Text>

          <Text style={styles.roleDescription}>
            Order personalized healthy meals
          </Text>
        </TouchableOpacity>

        {/* Cook */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === "cook" && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole("cook")}
        >
          <Text style={styles.roleIcon}>👨‍🍳</Text>

          <Text style={styles.roleTitle}>Home Cook</Text>

          <Text style={styles.roleDescription}>
            Share your culinary skills and earn
          </Text>
        </TouchableOpacity>

        {/* Delivery */}
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === "delivery" && styles.selectedCard,
          ]}
          onPress={() => setSelectedRole("delivery")}
        >
          <Text style={styles.roleIcon}>🚴</Text>

          <Text style={styles.roleTitle}>Delivery Partner</Text>

          <Text style={styles.roleDescription}>
            Deliver healthy meals to doorsteps
          </Text>
        </TouchableOpacity>

        {/* Username */}
        <TextInput
          placeholder="Username"
          placeholderTextColor="#777"
          style={styles.input}
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
        />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />

          <Text style={styles.orText}>OR</Text>

          <View style={styles.divider} />
        </View>

        {/* Email Login */}
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            navigation.navigate("SocialLogin", {
              role: selectedRole,
              type: "email",
            })
          }
        >
          <Text style={styles.socialText}>
            Continue with Email
          </Text>
        </TouchableOpacity>

        {/* Google Login */}
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            navigation.navigate("SocialLogin", {
              role: selectedRole,
              type: "google",
            })
          }
        >
          <Text style={styles.socialText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Signup */}
        <TouchableOpacity style={styles.signupButton}
        onPress={() => navigation.navigate("SignupRole")}
        >
          <Text style={styles.signupText}>Sign Up</Text>
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
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },

  headerContainer: {
    marginBottom: 28,
  },

  welcomeText: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
    lineHeight: 42,
  },

  subText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111",
  },

  roleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    elevation: 2,
  },

  selectedCard: {
    borderColor: "#23B6A6",
    borderWidth: 2,
  },

  roleIcon: {
    fontSize: 34,
    marginBottom: 12,
  },

  roleTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  roleDescription: {
    fontSize: 16,
    color: "#666",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D0D0D0",
  },

  orText: {
    marginHorizontal: 12,
    color: "#777",
    fontSize: 15,
  },

  socialButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  socialText: {
    fontSize: 17,
    color: "#333",
    fontWeight: "500",
  },

  loginButton: {
    backgroundColor: "#23B6A6",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 15,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  signupButton: {
    borderWidth: 1.5,
    borderColor: "#23B6A6",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  signupText: {
    color: "#23B6A6",
    fontSize: 20,
    fontWeight: "700",
  },
});