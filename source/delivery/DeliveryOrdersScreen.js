// ======================================================
// FILE: source/delivery/DeliveryOrdersScreen.js
// DYNAMIC REAL-TIME DELIVERY ORDERS SCREEN
// ======================================================

import React, {
  useMemo,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function DeliveryOrdersScreen({
  navigation,
}) {

  // ======================================================
  // SEARCH STATE
  // ======================================================

  const [search, setSearch] =
    useState('');

  // ======================================================
  // DYNAMIC ORDERS DATA
  // ======================================================

  const [orders, setOrders] =
    useState([

      {
        id: 'ORD1001',

        customer:
          'Rahul Sharma',

        restaurant:
          'Spicy Kitchen',

        pickup:
          'Anna Nagar, Chennai',

        drop:
          'T Nagar, Chennai',

        amount: 240,

        distance: '3.2 km',

        estimatedTime:
          '15 mins',

        payment:
          'Cash on Delivery',

        status: 'Picked Up',

        rating: 4.8,

        accepted: false,
      },

      {
        id: 'ORD1002',

        customer:
          'Priya Verma',

        restaurant:
          'Healthy Bowl',

        pickup:
          'Velachery, Chennai',

        drop:
          'OMR, Chennai',

        amount: 320,

        distance: '5 km',

        estimatedTime:
          '22 mins',

        payment:
          'Paid Online',

        status: 'On The Way',

        rating: 4.5,

        accepted: false,
      },

      {
        id: 'ORD1003',

        customer:
          'Arjun Kumar',

        restaurant:
          'Madras Meals',

        pickup:
          'Tambaram, Chennai',

        drop:
          'Chromepet, Chennai',

        amount: 180,

        distance: '2.5 km',

        estimatedTime:
          '10 mins',

        payment:
          'Cash on Delivery',

        status: 'Picked Up',

        rating: 4.9,

        accepted: false,
      },

      {
        id: 'ORD1004',

        customer:
          'Keerthana',

        restaurant:
          'Burger Hub',

        pickup:
          'Adyar, Chennai',

        drop:
          'Besant Nagar, Chennai',

        amount: 410,

        distance: '6 km',

        estimatedTime:
          '28 mins',

        payment:
          'UPI Payment',

        status: 'Ready for Pickup',

        rating: 4.6,

        accepted: false,
      },

    ]);

  // ======================================================
  // DYNAMIC CALCULATIONS
  // ======================================================

  const totalOrders =
    orders.length;

  const totalEarnings =
    useMemo(() => {

      return orders.reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );

    }, [orders]);

  // ======================================================
  // SEARCH FILTER
  // ======================================================

  const filteredOrders =
    orders.filter(item =>

      item.customer
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||

      item.restaurant
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  // ======================================================
  // COMPLETE DELIVERY
  // ======================================================

  const completeDelivery = id => {

    Alert.alert(
      'Delivery Completed',
      'Order delivered successfully.',
      [

        {
          text: 'OK',

          onPress: () => {

            const updatedOrders =
              orders.filter(
                item =>
                  item.id !== id
              );

            setOrders(
              updatedOrders
            );

          },
        },

      ]
    );

  };

  // ======================================================
  // ACCEPT ORDER
  // ======================================================

  const acceptDelivery = id => {

    const updatedOrders =
      orders.map(item => {

        if (item.id === id) {

          return {
            ...item,
            accepted: true,
          };

        }

        return item;

      });

    setOrders(updatedOrders);

    Alert.alert(
      'Order Accepted',
      `You accepted ${id}`
    );

  };

  // ======================================================
  // REJECT ORDER
  // ======================================================

  const rejectDelivery = id => {

    Alert.alert(
      'Reject Order',
      'Are you sure want to reject this order?',
      [

        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Yes',

          onPress: () => {

            const updatedOrders =
              orders.filter(
                item =>
                  item.id !== id
              );

            setOrders(updatedOrders);

            Alert.alert(
              'Order Rejected',
              'You rejected the order.'
            );

          },
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

      {/* ======================================================
          HEADER
      ====================================================== */}

      <View style={styles.header}>

        <View>

          <Text style={styles.smallText}>
            Delivery Dashboard 🚴
          </Text>

          <Text style={styles.title}>
            Active Orders
          </Text>

        </View>

        <Ionicons
          name="bicycle"
          size={38}
          color="#16b39a"
        />

      </View>

      {/* ======================================================
          TOP SUMMARY
      ====================================================== */}

      <View style={styles.summaryContainer}>

        {/* TOTAL ORDERS */}

        <View style={styles.summaryCard}>

          <Ionicons
            name="cube-outline"
            size={26}
            color="#16b39a"
          />

          <Text style={styles.summaryValue}>
            {totalOrders}
          </Text>

          <Text style={styles.summaryLabel}>
            Orders
          </Text>

        </View>

        {/* TOTAL EARNINGS */}

        <View style={styles.summaryCard}>

          <Ionicons
            name="cash-outline"
            size={26}
            color="#FF9800"
          />

          <Text style={styles.summaryValue}>
            ₹{totalEarnings}
          </Text>

          <Text style={styles.summaryLabel}>
            Earnings
          </Text>

        </View>

      </View>

      {/* ======================================================
          SEARCH BAR
      ====================================================== */}

      <View style={styles.searchBar}>

        <Ionicons
          name="search"
          size={20}
          color="#888"
        />

        <TextInput
          placeholder="Search orders..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />

      </View>

      {/* ======================================================
          ORDERS LIST
      ====================================================== */}

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >

        {filteredOrders.map(item => (

          <View
            key={item.id}
            style={styles.orderCard}
          >

            {/* TOP */}

            <View style={styles.topRow}>

              <View>

                <Text
                  style={styles.orderId}
                >
                  {item.id}
                </Text>

                <Text
                  style={
                    styles.restaurant
                  }
                >
                  {item.restaurant}
                </Text>

              </View>

              <View style={styles.badge}>

                <Text
                  style={
                    styles.badgeText
                  }
                >
                  {item.status}
                </Text>

              </View>

            </View>

            {/* CUSTOMER */}

            <View style={styles.infoRow}>

              <Ionicons
                name="person-outline"
                size={18}
                color="#666"
              />

              <Text
                style={styles.infoText}
              >
                {item.customer}
              </Text>

            </View>

            {/* PICKUP */}

            <View style={styles.infoRow}>

              <Ionicons
                name="restaurant-outline"
                size={18}
                color="#666"
              />

              <Text
                style={styles.infoText}
              >
                {item.pickup}
              </Text>

            </View>

            {/* DROP */}

            <View style={styles.infoRow}>

              <Ionicons
                name="location-outline"
                size={18}
                color="#666"
              />

              <Text
                style={styles.infoText}
              >
                {item.drop}
              </Text>

            </View>

            {/* DISTANCE */}

            <View style={styles.infoRow}>

              <Ionicons
                name="navigate-outline"
                size={18}
                color="#666"
              />

              <Text
                style={styles.infoText}
              >
                {item.distance}
              </Text>

            </View>

            {/* TIME */}

            <View style={styles.infoRow}>

              <Ionicons
                name="time-outline"
                size={18}
                color="#666"
              />

              <Text
                style={styles.infoText}
              >
                ETA:
                {' '}
                {item.estimatedTime}
              </Text>

            </View>

            {/* PAYMENT */}

            <View style={styles.infoRow}>

              <Ionicons
                name="wallet-outline"
                size={18}
                color="#666"
              />

              <Text
                style={styles.infoText}
              >
                {item.payment}
              </Text>

            </View>

            {/* RATING */}

            <View style={styles.infoRow}>

              <Ionicons
                name="star"
                size={18}
                color="#FFC107"
              />

              <Text
                style={styles.infoText}
              >
                Rating:
                {' '}
                {item.rating}
              </Text>

            </View>

            {/* EARNINGS */}

            <View style={styles.amountRow}>

              <Text
                style={
                  styles.amountLabel
                }
              >
                Delivery Earnings
              </Text>

              <Text style={styles.amount}>
                ₹{item.amount}
              </Text>

            </View>

            {/* ======================================================
                BUTTONS
            ====================================================== */}

            {!item.accepted ? (

              <View style={styles.buttonRow}>

                {/* ACCEPT */}

                <TouchableOpacity
                  style={styles.acceptBtn}
                  onPress={() =>
                    acceptDelivery(
                      item.id
                    )
                  }
                >

                  <Ionicons
                    name="checkmark-outline"
                    size={18}
                    color="#fff"
                  />

                  <Text
                    style={
                      styles.acceptText
                    }
                  >
                    Accept
                  </Text>

                </TouchableOpacity>

                {/* REJECT */}

                <TouchableOpacity
                  style={styles.rejectBtn}
                  onPress={() =>
                    rejectDelivery(
                      item.id
                    )
                  }
                >

                  <Ionicons
                    name="close-outline"
                    size={18}
                    color="#fff"
                  />

                  <Text
                    style={
                      styles.rejectText
                    }
                  >
                    Reject
                  </Text>

                </TouchableOpacity>

              </View>

            ) : (

              <View>

                {/* ACCEPTED BUTTON */}

                <TouchableOpacity
                  style={styles.acceptedBtn}
                  activeOpacity={1}
                >

                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color="#fff"
                  />

                  <Text
                    style={
                      styles.acceptedText
                    }
                  >
                    Accepted
                  </Text>

                </TouchableOpacity>

                {/* TRACK */}

                <TouchableOpacity
                  style={styles.trackBtn}
                  onPress={() =>
                    navigation.navigate(
                      'DeliveryTracking',
                      {
                        orderId:
                          item.id,
                      }
                    )
                  }
                >

                  <Ionicons
                    name="navigate-outline"
                    size={20}
                    color="#fff"
                  />

                  <Text
                    style={
                      styles.trackText
                    }
                  >
                    Track Order
                  </Text>

                </TouchableOpacity>

                {/* DELIVERED */}

                <TouchableOpacity
                  style={styles.doneBtn}
                  onPress={() =>
                    completeDelivery(
                      item.id
                    )
                  }
                >

                  <Ionicons
                    name="checkmark-circle-outline"
                    size={20}
                    color="#fff"
                  />

                  <Text
                    style={styles.doneText}
                  >
                    Mark as Delivered
                  </Text>

                </TouchableOpacity>

              </View>

            )}

          </View>

        ))}

        <View style={{ height: 120 }} />

      </ScrollView>

      {/* ======================================================
          BOTTOM NAVIGATION
      ====================================================== */}

      <View style={styles.bottomBar}>

        {/* HOME */}

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

        {/* ORDERS */}

        <TouchableOpacity
          style={styles.bottomItem}
        >

          <Ionicons
            name="cube"
            size={24}
            color="#16b39a"
          />

          <Text
            style={
              styles.activeBottomText
            }
          >
            Orders
          </Text>

        </TouchableOpacity>

        {/* EARNINGS */}

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'DeliveryEarnings'
            )
          }
        >

          <Ionicons
            name="cash-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
            Earnings
          </Text>

        </TouchableOpacity>

        {/* PROFILE */}

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'DeliveryProfile'
            )
          }
        >

          <Ionicons
            name="person-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
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

  smallText: {
    color: '#777',
    fontSize: 14,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#222',
    marginTop: 5,
  },

  summaryContainer: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
  },

  summaryValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginTop: 10,
  },

  summaryLabel: {
    color: '#777',
    marginTop: 5,
  },

  searchBar: {
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  orderId: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 14,
  },

  restaurant: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 5,
  },

  badge: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 16,
  },

  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  infoText: {
    marginLeft: 10,
    color: '#555',
    flex: 1,
  },

  amountRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },

  amountLabel: {
    color: '#666',
    fontSize: 15,
  },

  amount: {
    color: '#16b39a',
    fontSize: 24,
    fontWeight: '700',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
  },

  acceptBtn: {
    flex: 1,
    backgroundColor: '#16b39a',
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },

  rejectBtn: {
    flex: 1,
    backgroundColor: '#FF4D4D',
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  acceptedBtn: {
    backgroundColor: '#16b39a',
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },

  trackBtn: {
    backgroundColor: '#2979FF',
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },

  doneBtn: {
    backgroundColor: '#FF9800',
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  acceptText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 6,
  },

  rejectText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 6,
  },

  acceptedText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 8,
  },

  trackText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 8,
  },

  doneText: {
    color: '#fff',
    fontWeight: '700',
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