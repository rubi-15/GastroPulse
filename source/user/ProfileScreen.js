import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({
  navigation,
}) {

  const [isEditing, setIsEditing] =
    useState(false);

  const [name, setName] =
    useState('Tharani');

  const [email, setEmail] =
    useState('tharani@gmail.com');

  const [phone, setPhone] =
    useState('+91 9876543210');

  const [address, setAddress] =
    useState('Salem, Tamil Nadu');

  const [profileImage, setProfileImage] =
    useState(
      'https://i.pravatar.cc/300'
    );

  /* SAVE PROFILE */

  const handleSave = () => {

    setIsEditing(false);

    Alert.alert(
      'Success',
      'Profile updated successfully'
    );
  };

  /* CHANGE PHOTO */

  const changePhoto = () => {

    const randomImage =
      `https://i.pravatar.cc/300?img=${Math.floor(
        Math.random() * 70
      )}`;

    setProfileImage(randomImage);

    Alert.alert(
      'Updated',
      'Profile photo changed'
    );
  };

  return (

    <SafeAreaView style={styles.container}>

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
            color="#222"
          />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          My Profile
        </Text>

        <TouchableOpacity
          onPress={() => {

            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true);
            }

          }}
        >

          <Text style={styles.editText}>

            {isEditing
              ? 'Save'
              : 'Edit'}

          </Text>

        </TouchableOpacity>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >

        {/* PROFILE */}

        <View style={styles.profileBox}>

          <Image
            source={{
              uri: profileImage,
            }}
            style={styles.profileImage}
          />

          {isEditing && (

            <TouchableOpacity
              style={styles.cameraBtn}
              onPress={changePhoto}
            >

              <Ionicons
                name="camera"
                size={18}
                color="#fff"
              />

            </TouchableOpacity>

          )}

          <Text style={styles.userName}>
            {name}
          </Text>

          <Text style={styles.userEmail}>
            {email}
          </Text>

        </View>

        {/* PERSONAL DETAILS */}

        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Personal Details
          </Text>

          <Text style={styles.label}>
            Full Name
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            editable={isEditing}
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

          <Text style={styles.label}>
            Phone Number
          </Text>

          <TextInput
            value={phone}
            onChangeText={setPhone}
            editable={isEditing}
            keyboardType="phone-pad"
            style={[
              styles.input,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

          <Text style={styles.label}>
            Address
          </Text>

          <TextInput
            value={address}
            onChangeText={setAddress}
            editable={isEditing}
            multiline
            style={[
              styles.input,
              styles.addressInput,
              !isEditing &&
                styles.disabledInput,
            ]}
          />

        </View>

        {/* MENU */}

        <View style={styles.card}>

          {/* MY ORDERS */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                'Cart'
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="receipt-outline"
                size={22}
                color="#16b39a"
              />

              <Text style={styles.menuText}>
                My Orders
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

          {/* MY CART */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                'Cart'
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="cart-outline"
                size={22}
                color="#16b39a"
              />

              <Text style={styles.menuText}>
                My Cart
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

          {/* SAVED ADDRESS */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                'SavedAddress'
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="location-outline"
                size={22}
                color="#16b39a"
              />

              <Text style={styles.menuText}>
                Saved Addresses
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

          {/* NOTIFICATIONS */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                'Notifications'
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="notifications-outline"
                size={22}
                color="#16b39a"
              />

              <Text style={styles.menuText}>
                Notifications
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

          {/* SETTINGS */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              navigation.navigate(
                'Settings'
              )
            }
          >

            <View style={styles.menuLeft}>

              <Ionicons
                name="settings-outline"
                size={22}
                color="#16b39a"
              />

              <Text style={styles.menuText}>
                Settings
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />

          </TouchableOpacity>

        </View>

        {/* LOGOUT */}

        <TouchableOpacity
          style={styles.logoutBtn}
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
            size={22}
            color="#fff"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  editText: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 16,
  },

  profileBox: {
    alignItems: 'center',
    marginBottom: 24,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  cameraBtn: {
    position: 'absolute',
    bottom: 10,
    right: 130,
    backgroundColor: '#16b39a',
    padding: 8,
    borderRadius: 20,
  },

  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 14,
  },

  userEmail: {
    color: '#666',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 18,
    color: '#222',
  },

  label: {
    color: '#555',
    marginBottom: 8,
    marginTop: 10,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    padding: 15,
    fontSize: 15,
    color: '#222',
  },

  disabledInput: {
    backgroundColor: '#EFEFEF',
  },

  addressInput: {
    height: 90,
    textAlignVertical: 'top',
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },

  logoutBtn: {
    backgroundColor: '#16b39a',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 10,
  },

});