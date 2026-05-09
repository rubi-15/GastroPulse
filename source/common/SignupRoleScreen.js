import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupRoleScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Select Role For Signup
      </Text>

      {/* User */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("UserSignup")
        }
      >
        <Text style={styles.icon}>👤</Text>

        <Text style={styles.roleText}>User</Text>
      </TouchableOpacity>

      {/* Cook */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("CookSignup")
        }
      >
        <Text style={styles.icon}>👨‍🍳</Text>

        <Text style={styles.roleText}>
          Home Cook
        </Text>
      </TouchableOpacity>

      {/* Delivery */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("DriverSignup")
        }
      >
        <Text style={styles.icon}>🚴</Text>

        <Text style={styles.roleText}>
          Delivery Partner
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 40,
    textAlign: "center",
    color: "#111",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 30,
    alignItems: "center",
    marginBottom: 20,
    elevation: 2,
  },

  icon: {
    fontSize: 40,
    marginBottom: 10,
  },

  roleText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
});