// ======================================================
// FILE: source/delivery/DeliveryProfileScreen.js
// REAL-TIME DYNAMIC DELIVERY PROFILE SCREEN
// ======================================================

import React, { useState, useEffect } from 'react';

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

export default function DeliveryProfileScreen({
  navigation,
  route,
}) {

  // ======================================================
  // ONLINE STATUS FROM HOME SCREEN
  // ======================================================

  const [onlineStatus, setOnlineStatus] =
    useState(true);

  useEffect(() => {

    if (
      route.params?.onlineStatus !==
      undefined
    ) {

      setOnlineStatus(
        route.params.onlineStatus
      );

    }

  }, [route.params]);

  // ======================================================
  // EDIT MODE
  // ======================================================

  const [isEditing, setIsEditing] =
    useState(false);

  // ======================================================
  // PROFILE DATA
  // ======================================================

  const [profileData,
    setProfileData] =
    useState({

      name: 'Arun Kumar',

      phone: '9876543210',

      email:
        'arunkumar@gmail.com',

      city:
        'Chennai, Tamil Nadu',

      vehicle:
        'Honda Activa TN09AB1234',

      experience:
        '3 Years',

      description:
        'Fast and reliable delivery partner with excellent customer ratings and fast delivery performance.',

      image:
        'https://randomuser.me/api/portraits/men/32.jpg',

      rating: 4.8,

      totalDeliveries: 980,

      todayDeliveries: 12,

      todayEarnings: 1250,

      completedOrders: 920,

      cancelledOrders: 12,

      onlineStatus: true,

    });

  // ======================================================
  // LIVE ONLINE STATUS UPDATE
  // ======================================================

  useEffect(() => {

    setProfileData(prev => ({
      ...prev,
      onlineStatus: onlineStatus,
    }));

  }, [onlineStatus]);

  // ======================================================
  // CHANGE PROFILE PHOTO
  // ======================================================

  const changePhoto = () => {

    const images = [

      'https://randomuser.me/api/portraits/men/32.jpg',

      'https://randomuser.me/api/portraits/men/45.jpg',

      'https://randomuser.me/api/portraits/men/60.jpg',

      'https://randomuser.me/api/portraits/men/75.jpg',

      'https://randomuser.me/api/portraits/men/12.jpg',

    ];

    const randomImage =
      images[
        Math.floor(
          Math.random() *
            images.length
        )
      ];

    setProfileData({
      ...profileData,
      image: randomImage,
    });

    Alert.alert(
      'Profile Updated',
      'Profile photo changed successfully'
    );

  };

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
          style: 'cancel',
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

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.welcome}>
              Delivery Partner 🚴
            </Text>

            <Text style={styles.headerName}>
              {profileData.name}
            </Text>

          </View>

          {/* ONLINE STATUS */}

          <View
            style={[
              styles.statusBadge,

              {
                backgroundColor:
                  profileData.onlineStatus
                    ? '#16b39a'
                    : '#ff4d4d',
              },
            ]}
          >

            <Text
              style={styles.statusBadgeText}
            >
              {profileData.onlineStatus
                ? 'ONLINE'
                : 'OFFLINE'}
            </Text>

          </View>

        </View>

        {/* PROFILE CARD */}

        <View style={styles.profileCard}>

          <View>

            <Image
              source={{
                uri:
                  profileData.image,
              }}
              style={
                styles.profileImage
              }
            />

            <TouchableOpacity
              style={
                styles.cameraButton
              }
              onPress={changePhoto}
            >

              <Ionicons
                name="camera"
                size={18}
                color="#fff"
              />

            </TouchableOpacity>

          </View>

          <TextInput
            editable={isEditing}
            value={profileData.name}
            onChangeText={text =>
              setProfileData({
                ...profileData,
                name: text,
              })
            }
            style={styles.nameInput}
          />

          <TextInput
            editable={isEditing}
            value={
              profileData.vehicle
            }
            onChangeText={text =>
              setProfileData({
                ...profileData,
                vehicle: text,
              })
            }
            style={
              styles.vehicleInput
            }
          />

          <View style={styles.ratingRow}>

            <Ionicons
              name="star"
              size={18}
              color="#FFC107"
            />

            <Text
              style={styles.ratingText}
            >
              {profileData.rating}
            </Text>

            <Text
              style={styles.ordersText}
            >
              •{' '}
              {
                profileData.totalDeliveries
              }{' '}
              Deliveries
            </Text>

          </View>

        </View>

        {/* STATS */}

        <View style={styles.statsRow}>

          <View style={styles.statsCard}>

            <Ionicons
              name="cube-outline"
              size={28}
              color="#16b39a"
            />

            <Text
              style={styles.statsValue}
            >
              {
                profileData.todayDeliveries
              }
            </Text>

            <Text
              style={styles.statsLabel}
            >
              Today's Deliveries
            </Text>

          </View>

          <View style={styles.statsCard}>

            <Ionicons
              name="cash-outline"
              size={28}
              color="#FF9800"
            />

            <Text
              style={styles.statsValue}
            >
              ₹
              {
                profileData.todayEarnings
              }
            </Text>

            <Text
              style={styles.statsLabel}
            >
              Today's Earnings
            </Text>

          </View>

        </View>

        {/* ANALYTICS */}

        <View style={styles.analyticsContainer}>

          <View style={styles.analyticsCard}>

            <Ionicons
              name="checkmark-done-circle"
              size={26}
              color="#16b39a"
            />

            <Text
              style={styles.analyticsValue}
            >
              {
                profileData.completedOrders
              }
            </Text>

            <Text
              style={styles.analyticsLabel}
            >
              Completed Orders
            </Text>

          </View>

          <View style={styles.analyticsCard}>

            <Ionicons
              name="close-circle"
              size={26}
              color="#ff4d4d"
            />

            <Text
              style={styles.analyticsValue}
            >
              {
                profileData.cancelledOrders
              }
            </Text>

            <Text
              style={styles.analyticsLabel}
            >
              Cancelled Orders
            </Text>

          </View>

        </View>

        {/* DETAILS */}

        <View style={styles.detailsCard}>

          <View style={styles.detailRow}>

            <Ionicons
              name="call-outline"
              size={22}
              color="#16b39a"
            />

            <TextInput
              editable={isEditing}
              value={profileData.phone}
              onChangeText={text =>
                setProfileData({
                  ...profileData,
                  phone: text,
                })
              }
              style={
                styles.detailInput
              }
            />

          </View>

          <View style={styles.detailRow}>

            <Ionicons
              name="mail-outline"
              size={22}
              color="#16b39a"
            />

            <TextInput
              editable={isEditing}
              value={profileData.email}
              onChangeText={text =>
                setProfileData({
                  ...profileData,
                  email: text,
                })
              }
              style={
                styles.detailInput
              }
            />

          </View>

          <View style={styles.detailRow}>

            <Ionicons
              name="location-outline"
              size={22}
              color="#16b39a"
            />

            <TextInput
              editable={isEditing}
              value={profileData.city}
              onChangeText={text =>
                setProfileData({
                  ...profileData,
                  city: text,
                })
              }
              style={
                styles.detailInput
              }
            />

          </View>

        </View>

        {/* ABOUT */}

        <View style={styles.aboutCard}>

          <Text style={styles.aboutTitle}>
            About Delivery Partner
          </Text>

          <TextInput
            editable={isEditing}
            multiline
            value={
              profileData.description
            }
            onChangeText={text =>
              setProfileData({
                ...profileData,
                description: text,
              })
            }
            style={styles.aboutInput}
          />

        </View>

        {/* BUTTONS */}

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

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}
        >

          <Ionicons
            name="log-out-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.buttonText}>
            Logout
          </Text>

        </TouchableOpacity>

        <View style={{ height: 120 }} />

      </ScrollView>

      {/* BOTTOM NAVIGATION */}

      <View style={styles.bottomBar}>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'DeliveryHome'
            )
          }
        >

          <Ionicons
            name="home-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
            Home
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'DeliveryOrders'
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

// ======================================================
// STYLES
// ======================================================

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

  statusBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  statusBadgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 28,
    alignItems: 'center',
    padding: 25,
    marginBottom: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#16b39a',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameInput: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222',
    marginTop: 16,
  },

  vehicleInput: {
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
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

  statsRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 20,
  },

  statsCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 22,
    padding: 20,
    alignItems: 'center',
  },

  statsValue: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
    color: '#222',
  },

  statsLabel: {
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
  },

  analyticsContainer: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 20,
  },

  analyticsCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 22,
    padding: 20,
    alignItems: 'center',
  },

  analyticsValue: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
    color: '#222',
  },

  analyticsLabel: {
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
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
    backgroundColor: '#FF9800',
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