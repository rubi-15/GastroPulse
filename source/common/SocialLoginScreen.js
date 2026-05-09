import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SocialLoginScreen({ route, navigation }) {
  const { role, type } = route.params;

  const handleContinue = () => {
    if (role === "user") {
      navigation.navigate("UserHome");
    } else if (role === "cook") {
      navigation.navigate("CookHome");
    } else if (role === "delivery") {
      navigation.navigate("DeliveryHome");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {type === "google"
            ? "Google Sign In"
            : "Email Sign In"}
        </Text>

        <Text style={styles.subtitle}>
          Continue as{" "}
          <Text style={styles.highlight}>
            {role}
          </Text>
        </Text>

        <Text style={styles.description}>
          This page will later connect with Firebase
          authentication for secure login access.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 30,
    elevation: 3,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 15,
    color: "#444",
  },

  highlight: {
    color: "#23B6A6",
    fontWeight: "700",
    textTransform: "capitalize",
  },

  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 25,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#23B6A6",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});