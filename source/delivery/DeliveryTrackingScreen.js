// ======================================================
// FILE: source/delivery/DeliveryTrackingScreen.js
// DELIVERY TRACKING SCREEN
// ======================================================

import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function DeliveryTrackingScreen({
  navigation,
  route,
}) {

  // ======================================================
  // ORDER ID FROM PREVIOUS SCREEN
  // ======================================================

  const orderId =
    route?.params?.orderId ||
    'ORD1001';

  // ======================================================
  // DELIVERY STATUS
  // ======================================================

  const [deliveryStatus,
    setDeliveryStatus] =
    useState('On The Way');

  // ======================================================
  // MARK AS DELIVERED
  // ======================================================

  const markDelivered = () => {

    Alert.alert(
      'Delivery Successful',
      'Order delivered successfully.',
      [

        {
          text: 'OK',

          onPress: () =>
            navigation.navigate(
              'DeliveryOrders'
            ),
        },

      ]
    );

    setDeliveryStatus(
      'Delivered'
    );

  };

  // ======================================================
  // CALL CUSTOMER
  // ======================================================

  const callCustomer = () => {

    Alert.alert(
      'Calling Customer',
      'Connecting to Rahul Sharma...'
    );

  };

  // ======================================================
  // OPEN MAP
  // ======================================================

  const openMap = () => {

    Alert.alert(
      'Navigation',
      'Opening Google Maps Navigation...'
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

          <TouchableOpacity
            onPress={() =>
              navigation.goBack()
            }
          >

            <Ionicons
              name="arrow-back"
              size={28}
              color="#222"
            />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Live Tracking
          </Text>

          <Ionicons
            name="navigate-circle"
            size={34}
            color="#16b39a"
          />

        </View>

        {/* ======================================================
            MAP PLACEHOLDER
        ====================================================== */}

        <View style={styles.mapCard}>

          <Ionicons
            name="map-outline"
            size={70}
            color="#16b39a"
          />

          <Text style={styles.mapText}>
            Live Map Tracking
          </Text>

          <Text style={styles.mapSubText}>
            Google Maps Integration
          </Text>

        </View>

        {/* ======================================================
            ORDER DETAILS
        ====================================================== */}

        <View style={styles.detailsCard}>

          <Text style={styles.orderId}>
            {orderId}
          </Text>

          <Text style={styles.restaurant}>
            Spicy Kitchen
          </Text>

          {/* CUSTOMER */}

          <View style={styles.infoRow}>

            <Ionicons
              name="person-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.infoText}>
              Rahul Sharma
            </Text>

          </View>

          {/* PICKUP */}

          <View style={styles.infoRow}>

            <Ionicons
              name="restaurant-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.infoText}>
              Anna Nagar, Chennai
            </Text>

          </View>

          {/* DROP */}

          <View style={styles.infoRow}>

            <Ionicons
              name="location-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.infoText}>
              T Nagar, Chennai
            </Text>

          </View>

          {/* TIME */}

          <View style={styles.infoRow}>

            <Ionicons
              name="time-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.infoText}>
              Estimated Time:
              {' '}
              18 mins
            </Text>

          </View>

        </View>

        {/* ======================================================
            DELIVERY STATUS
        ====================================================== */}

        <View style={styles.statusCard}>

          <Text style={styles.statusTitle}>
            Delivery Progress
          </Text>

          {/* STEP 1 */}

          <View style={styles.stepRow}>

            <Ionicons
              name="checkmark-circle"
              size={24}
              color="#16b39a"
            />

            <Text style={styles.stepText}>
              Order Accepted
            </Text>

          </View>

          {/* STEP 2 */}

          <View style={styles.stepRow}>

            <Ionicons
              name="checkmark-circle"
              size={24}
              color="#16b39a"
            />

            <Text style={styles.stepText}>
              Food Picked Up
            </Text>

          </View>

          {/* STEP 3 */}

          <View style={styles.stepRow}>

            <Ionicons
              name="bicycle"
              size={24}
              color="#FF9800"
            />

            <Text style={styles.stepText}>
              {deliveryStatus}
            </Text>

          </View>

          {/* STEP 4 */}

          <View style={styles.stepRow}>

            <Ionicons
              name={
                deliveryStatus ===
                'Delivered'
                  ? 'checkmark-circle'
                  : 'ellipse-outline'
              }
              size={24}
              color={
                deliveryStatus ===
                'Delivered'
                  ? '#16b39a'
                  : '#999'
              }
            />

            <Text style={styles.stepText}>
              Delivered
            </Text>

          </View>

        </View>

        {/* ======================================================
            ACTION BUTTONS
        ====================================================== */}

        {/* CALL CUSTOMER */}

        <TouchableOpacity
          style={styles.callBtn}
          onPress={callCustomer}
        >

          <Ionicons
            name="call-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.btnText}>
            Call Customer
          </Text>

        </TouchableOpacity>

        {/* OPEN MAP */}

        <TouchableOpacity
          style={styles.mapBtn}
          onPress={openMap}
        >

          <Ionicons
            name="navigate-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.btnText}>
            Open Navigation
          </Text>

        </TouchableOpacity>

        {/* DELIVERED */}

        <TouchableOpacity
          style={styles.doneBtn}
          onPress={markDelivered}
        >

          <Ionicons
            name="checkmark-circle-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.btnText}>
            Mark as Delivered
          </Text>

        </TouchableOpacity>

        <View style={{ height: 120 }} />

      </ScrollView>

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

  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },

  mapCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    marginBottom: 20,
  },

  mapText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 15,
  },

  mapSubText: {
    color: '#777',
    marginTop: 6,
  },

  detailsCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },

  orderId: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 15,
  },

  restaurant: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginTop: 8,
    marginBottom: 18,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  infoText: {
    marginLeft: 10,
    color: '#555',
    fontSize: 15,
  },

  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 25,
  },

  statusTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 18,
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  stepText: {
    marginLeft: 12,
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },

  callBtn: {
    backgroundColor: '#2979FF',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  mapBtn: {
    backgroundColor: '#FF9800',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  doneBtn: {
    backgroundColor: '#16b39a',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 8,
  },

});