// ======================================================
// FILE: source/cook/CookProfileScreen.js
// REAL-TIME COOK PROFILE SCREEN
// ======================================================

import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function CookProfileScreen({
  navigation,
  route,
}) {

  // ======================================================
  // COOK NAME
  // ======================================================

  const cookName =
    route?.params?.cookName ||
    'Chef Tharani';

  // ======================================================
  // EDIT MODE
  // ======================================================

  const [isEditing, setIsEditing] =
    useState(false);

  // ======================================================
  // PROFILE DATA
  // ======================================================

  const [cookData, setCookData] =
    useState({

      name: cookName,

      phone: '9876543210',

      email:
        'cheftharani@gmail.com',

      location:
        'Chennai, Tamil Nadu',

      speciality:
        'Healthy Homemade Foods',

      experience:
        '5 Years',

      description:
        'Passionate home chef specialized in healthy and traditional homemade meals.',

    });

  // ======================================================
  // SAVE PROFILE
  // ======================================================

  const saveProfile = () => {

    setIsEditing(false);

    Alert.alert(
      'Success',
      'Profile Updated Successfully'
    );

  };

  // ======================================================
  // LOGOUT
  // ======================================================

  const logout = () => {

    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [

        {
          text: 'Cancel',
        },

        {
          text: 'Logout',

          onPress: () =>
            navigation.replace(
              'CookLogin'
            ),
        },

      ]
    );

  };

  // ======================================================
  // UI
  // ======================================================

  return (

    <SafeAreaView
      style={styles.container}
    >

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >

        {/* ======================================================
            HEADER
        ====================================================== */}

        <View style={styles.header}>

          <View>

            <Text style={styles.welcome}>
              Profile 👨‍🍳
            </Text>

            <Text style={styles.headerName}>
              {cookData.name}
            </Text>

          </View>

          <Ionicons
            name="person-circle"
            size={55}
            color="#16b39a"
          />

        </View>

        {/* ======================================================
            PROFILE CARD
        ====================================================== */}

        <View style={styles.profileCard}>

          <Image
            source={{
              uri:
                'https://randomuser.me/api/portraits/women/44.jpg',
            }}
            style={styles.profileImage}
          />

          {/* NAME */}

          <TextInput
            editable={isEditing}
            value={cookData.name}
            onChangeText={text =>
              setCookData({
                ...cookData,
                name: text,
              })
            }
            style={styles.nameInput}
          />

          {/* SPECIALITY */}

          <TextInput
            editable={isEditing}
            value={
              cookData.speciality
            }
            onChangeText={text =>
              setCookData({
                ...cookData,
                speciality: text,
              })
            }
            style={
              styles.specialityInput
            }
          />

          {/* RATING */}

          <View style={styles.ratingRow}>

            <Ionicons
              name="star"
              size={18}
              color="#FFC107"
            />

            <Text
              style={styles.ratingText}
            >
              4.9 Rating
            </Text>

            <Text
              style={styles.ordersText}
            >
              • 1200 Orders
            </Text>

          </View>

        </View>

        {/* ======================================================
            DETAILS CARD
        ====================================================== */}

        <View style={styles.detailsCard}>

          {/* PHONE */}

          <View style={styles.detailRow}>

            <Ionicons
              name="call-outline"
              size={22}
              color="#16b39a"
            />

            <TextInput
              editable={isEditing}
              value={cookData.phone}
              onChangeText={text =>
                setCookData({
                  ...cookData,
                  phone: text,
                })
              }
              style={
                styles.detailInput
              }
            />

          </View>

          {/* EMAIL */}

          <View style={styles.detailRow}>

            <Ionicons
              name="mail-outline"
              size={22}
              color="#16b39a"
            />

            <TextInput
              editable={isEditing}
              value={cookData.email}
              onChangeText={text =>
                setCookData({
                  ...cookData,
                  email: text,
                })
              }
              style={
                styles.detailInput
              }
            />

          </View>

          {/* LOCATION */}

          <View style={styles.detailRow}>

            <Ionicons
              name="location-outline"
              size={22}
              color="#16b39a"
            />

            <TextInput
              editable={isEditing}
              value={
                cookData.location
              }
              onChangeText={text =>
                setCookData({
                  ...cookData,
                  location: text,
                })
              }
              style={
                styles.detailInput
              }
            />

          </View>

          {/* EXPERIENCE */}

          <View style={styles.detailRow}>

            <Ionicons
              name="briefcase-outline"
              size={22}
              color="#16b39a"
            />

            <TextInput
              editable={isEditing}
              value={
                cookData.experience
              }
              onChangeText={text =>
                setCookData({
                  ...cookData,
                  experience: text,
                })
              }
              style={
                styles.detailInput
              }
            />

          </View>

        </View>

        {/* ======================================================
            ABOUT SECTION
        ====================================================== */}

        <View style={styles.aboutCard}>

          <Text style={styles.aboutTitle}>
            About Chef
          </Text>

          <TextInput
            editable={isEditing}
            multiline
            value={
              cookData.description
            }
            onChangeText={text =>
              setCookData({
                ...cookData,
                description: text,
              })
            }
            style={styles.aboutInput}
          />

        </View>

        {/* ======================================================
            BUTTONS
        ====================================================== */}

        {!isEditing ? (

          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              setIsEditing(true)
            }
          >

            <Ionicons
              name="create-outline"
              size={20}
              color="#fff"
            />

            <Text
              style={styles.buttonText}
            >
              Edit Profile
            </Text>

          </TouchableOpacity>

        ) : (

          <TouchableOpacity
            style={styles.saveButton}
            onPress={saveProfile}
          >

            <Ionicons
              name="save-outline"
              size={20}
              color="#fff"
            />

            <Text
              style={styles.buttonText}
            >
              Save Changes
            </Text>

          </TouchableOpacity>

        )}

        {/* ======================================================
            LOGOUT
        ====================================================== */}

      {/* ======================================================
    LOGOUT
====================================================== */}

<TouchableOpacity
  style={styles.logoutButton}
  onPress={() => {

    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
        },

        {
          text: 'Logout',

          onPress: () =>
            navigation.replace(
              'Login'
            ),
        },
      ]
    );

  }}
>

  <Ionicons
    name="log-out-outline"
    size={20}
    color="#fff"
  />

  <Text style={styles.buttonText}>
    Logout
  </Text>

</TouchableOpacity>

        <View style={{ height: 120 }} />

      </ScrollView>

      {/* ======================================================
          BOTTOM NAVIGATION
      ====================================================== */}

      <View style={styles.bottomBar}>

        {/* DASHBOARD */}

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'CookHome',
              {
                cookName,
              }
            )
          }
        >

          <Ionicons
            name="grid-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
            Dashboard
          </Text>

        </TouchableOpacity>

        {/* MENU */}

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'CookMenu',
              {
                cookName,
              }
            )
          }
        >

          <Ionicons
            name="restaurant-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
            Menu
          </Text>

        </TouchableOpacity>

        {/* ORDERS */}

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'CookOrders',
              {
                cookName,
              }
            )
          }
        >

          <Ionicons
            name="receipt-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
            Orders
          </Text>

        </TouchableOpacity>

        {/* PROFILE */}

        <TouchableOpacity
          style={styles.bottomItem}
        >

          <Ionicons
            name="person"
            size={24}
            color="#16b39a"
          />

          <Text
            style={
              styles.activeBottomText
            }
          >
            Profile
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  welcome: {
    fontSize: 14,
    color: '#777',
  },

  headerName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginTop: 5,
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    padding: 25,
    marginBottom: 20,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginBottom: 15,
  },

  nameInput: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },

  specialityInput: {
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  ratingText: {
    marginLeft: 5,
    fontWeight: '700',
    color: '#222',
  },

  ordersText: {
    marginLeft: 8,
    color: '#777',
  },

  detailsCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  detailInput: {
    marginLeft: 15,
    flex: 1,
    fontSize: 15,
    color: '#333',
  },

  aboutCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 20,
    marginBottom: 25,
  },

  aboutTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
  },

  aboutInput: {
    color: '#555',
    lineHeight: 22,
  },

  editButton: {
    backgroundColor: '#ff9800',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  saveButton: {
    backgroundColor: '#16b39a',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  logoutButton: {
    backgroundColor: '#ff4d4d',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 8,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    height: 80,
    flexDirection: 'row',
    justifyContent:
      'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },

  bottomItem: {
    alignItems: 'center',
  },

  bottomText: {
    marginTop: 4,
    color: '#777',
    fontSize: 12,
  },

  activeBottomText: {
    marginTop: 4,
    color: '#16b39a',
    fontSize: 12,
    fontWeight: '700',
  },

});