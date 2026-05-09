import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {

  const [darkMode, setDarkMode] =
    useState(false);

  const [
    notificationsEnabled,
    setNotificationsEnabled,
  ] = useState(true);

  const [privacyMode, setPrivacyMode] =
    useState(false);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Settings
      </Text>

      {/* DARK MODE */}

      <View style={styles.card}>

        <View style={styles.left}>

          <Ionicons
            name="moon-outline"
            size={22}
            color="#16b39a"
          />

          <Text style={styles.text}>
            Dark Mode
          </Text>

        </View>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />

      </View>

      {/* NOTIFICATION */}

      <View style={styles.card}>

        <View style={styles.left}>

          <Ionicons
            name="notifications-outline"
            size={22}
            color="#16b39a"
          />

          <Text style={styles.text}>
            Push Notifications
          </Text>

        </View>

        <Switch
          value={notificationsEnabled}
          onValueChange={
            setNotificationsEnabled
          }
        />

      </View>

      {/* PRIVACY */}

      <View style={styles.card}>

        <View style={styles.left}>

          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#16b39a"
          />

          <Text style={styles.text}>
            Privacy Mode
          </Text>

        </View>

        <Switch
          value={privacyMode}
          onValueChange={
            setPrivacyMode
          }
        />

      </View>

      {/* ACCOUNT */}

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {

          Alert.alert(
            'Account',
            'Manage Account Clicked'
          );

        }}
      >

        <Ionicons
          name="person-circle-outline"
          size={24}
          color="#fff"
        />

        <Text style={styles.logoutText}>
          Manage Account
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 24,
    color: '#222',
  },

  card: {
    backgroundColor: '#F5F5F5',
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },

  logoutBtn: {
    backgroundColor: '#16b39a',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },

});