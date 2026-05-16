// ======================================================
// FILE: source/delivery/DeliveryHomeScreen.js
// REAL-TIME DYNAMIC DELIVERY HOME SCREEN
// ======================================================

import React, {
  useMemo,
  useState,
  useEffect,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function DeliveryHomeScreen({
  navigation,
  route,
}) {

  // ======================================================
  // GET ONLINE STATUS FROM PROFILE SCREEN
  // ======================================================

  const [isOnline, setIsOnline] =
    useState(true);

  useEffect(() => {

    if (
      route?.params?.onlineStatus !==
      undefined
    ) {

      setIsOnline(
        route.params.onlineStatus
      );

    }

  }, [route?.params]);

  // ======================================================
  // LIVE ACTIVE ORDERS
  // ======================================================

  const [activeOrders, setActiveOrders] =
    useState([

      {
        id: 'ORD2045',

        customer:
          'Rahul Sharma',

        customerPhone:
          '9876543210',

        restaurant:
          'Spicy Kitchen',

        pickup:
          'Anna Nagar, Chennai',

        drop:
          'T Nagar, Chennai',

        amount: 240,

        distance: '3.5 km',

        estimatedTime:
          '18 mins',

        payment:
          'Cash on Delivery',

        status:
          'Picked Up',
      },

      {
        id: 'ORD2051',

        customer:
          'Keerthana',

        customerPhone:
          '9898989898',

        restaurant:
          'Burger Hub',

        pickup:
          'Adyar, Chennai',

        drop:
          'Besant Nagar, Chennai',

        amount: 310,

        distance: '5 km',

        estimatedTime:
          '25 mins',

        payment:
          'UPI Payment',

        status:
          'On The Way',
      },

      {
        id: 'ORD2060',

        customer:
          'Arun Kumar',

        customerPhone:
          '9123456789',

        restaurant:
          'Healthy Bowl',

        pickup:
          'Velachery, Chennai',

        drop:
          'OMR, Chennai',

        amount: 190,

        distance: '2.8 km',

        estimatedTime:
          '12 mins',

        payment:
          'Paid Online',

        status:
          'Ready for Pickup',
      },

    ]);

  // ======================================================
  // DYNAMIC CALCULATIONS
  // ======================================================

  const totalActiveOrders =
    activeOrders.length;

  const todayEarnings =
    useMemo(() => {

      return activeOrders.reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );

    }, [activeOrders]);

  const completedDeliveries =
    12 + activeOrders.length;

  // ======================================================
  // TOGGLE ONLINE / OFFLINE
  // ======================================================

  const toggleStatus = () => {

    const updatedStatus =
      !isOnline;

    setIsOnline(updatedStatus);

    Alert.alert(
      'Delivery Status',
      updatedStatus
        ? 'You are now Online'
        : 'You are now Offline'
    );

  };

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
              activeOrders.filter(
                item =>
                  item.id !== id
              );

            setActiveOrders(
              updatedOrders
            );

          },
        },

      ]
    );

  };

  // ======================================================
  // CALL CUSTOMER
  // ======================================================

  const callCustomer = name => {

    Alert.alert(
      'Calling Customer',
      `Connecting with ${name}`
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

            <Text style={styles.smallText}>
              Welcome Back 🚴
            </Text>

            <Text style={styles.title}>
              Delivery Partner
            </Text>

          </View>

          <View
            style={[
              styles.liveBadge,

              {
                backgroundColor:
                  isOnline
                    ? '#16b39a'
                    : '#ff4d4d',
              },
            ]}
          >

            <Text
              style={styles.liveText}
            >
              {isOnline
                ? 'ONLINE'
                : 'OFFLINE'}
            </Text>

          </View>

        </View>

        {/* ======================================================
            STATUS CARD
        ====================================================== */}

        <View style={styles.statusCard}>

          <View>

            <Text
              style={styles.statusTitle}
            >
              Delivery Status
            </Text>

            <Text
              style={styles.statusText}
            >
              {isOnline
                ? 'You are currently accepting orders'
                : 'You are offline now'}
            </Text>

          </View>

          <Switch
            value={isOnline}
            onValueChange={
              toggleStatus
            }
            trackColor={{
              false: '#999',
              true: '#16b39a',
            }}
          />

        </View>

        {/* ======================================================
            PERFORMANCE CARD
        ====================================================== */}

        <View
          style={styles.performanceCard}
        >

          <View
            style={styles.performanceTop}
          >

            <View>

              <Text
                style={
                  styles.performanceTitle
                }
              >
                Today's Performance
              </Text>

              <Text
                style={
                  styles.performanceSub
                }
              >
                Real-time delivery stats
              </Text>

            </View>

            <Ionicons
              name="stats-chart"
              size={34}
              color="#fff"
            />

          </View>

          <View
            style={styles.performanceRow}
          >

            <View>

              <Text
                style={
                  styles.performanceValue
                }
              >
                ₹{todayEarnings}
              </Text>

              <Text
                style={
                  styles.performanceLabel
                }
              >
                Earnings
              </Text>

            </View>

            <View>

              <Text
                style={
                  styles.performanceValue
                }
              >
                {
                  completedDeliveries
                }
              </Text>

              <Text
                style={
                  styles.performanceLabel
                }
              >
                Completed
              </Text>

            </View>

            <View>

              <Text
                style={
                  styles.performanceValue
                }
              >
                {
                  totalActiveOrders
                }
              </Text>

              <Text
                style={
                  styles.performanceLabel
                }
              >
                Active
              </Text>

            </View>

          </View>

        </View>

        {/* ======================================================
            ACTIVE ORDERS TITLE
        ====================================================== */}

        <View style={styles.sectionRow}>

          <Text style={styles.sectionTitle}>
            Live Deliveries
          </Text>

          <View style={styles.orderCountBadge}>

            <Text
              style={styles.orderCountText}
            >
              {totalActiveOrders}
            </Text>

          </View>

        </View>

        {/* ======================================================
            ACTIVE ORDERS LIST
        ====================================================== */}

        {activeOrders.map(item => (

          <View
            key={item.id}
            style={styles.orderCard}
          >

            {/* TOP */}

            <View style={styles.orderTop}>

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

              <View
                style={
                  styles.orderStatusBadge
                }
              >

                <Text
                  style={
                    styles.orderStatusText
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

            {/* LOCATION */}

            <View style={styles.infoRow}>

              <Ionicons
                name="location-outline"
                size={18}
                color="#666"
              />

              <Text
                style={styles.infoText}
              >
                {item.pickup}
                {'  →  '}
                {item.drop}
              </Text>

            </View>

            {/* ETA */}

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

            {/* AMOUNT */}

            <View
              style={styles.amountRow}
            >

              <Text
                style={styles.amount}
              >
                ₹{item.amount}
              </Text>

              <Text
                style={styles.distance}
              >
                {item.distance}
              </Text>

            </View>

            {/* BUTTONS */}

            <View
              style={styles.buttonRow}
            >

              {/* TRACK */}

              <TouchableOpacity
                style={styles.trackBtn}
                onPress={() =>
                  navigation.navigate(
                    'DeliveryOrderStatus',
                    {
                      order: item,
                      onlineStatus:
                        isOnline,
                    }
                  )
                }
              >

                <Ionicons
                  name="navigate-outline"
                  size={18}
                  color="#fff"
                />

                <Text
                  style={styles.btnText}
                >
                  Track
                </Text>

              </TouchableOpacity>

              {/* CALL */}

              <TouchableOpacity
                style={styles.callBtn}
                onPress={() =>
                  callCustomer(
                    item.customer
                  )
                }
              >

                <Ionicons
                  name="call-outline"
                  size={18}
                  color="#fff"
                />

              </TouchableOpacity>

              {/* COMPLETE */}

              <TouchableOpacity
                style={
                  styles.completeBtn
                }
                onPress={() =>
                  completeDelivery(
                    item.id
                  )
                }
              >

                <Ionicons
                  name="checkmark-circle"
                  size={18}
                  color="#fff"
                />

                <Text
                  style={styles.btnText}
                >
                  Delivered
                </Text>

              </TouchableOpacity>

            </View>

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
        >

          <Ionicons
            name="home"
            size={24}
            color="#16b39a"
          />

          <Text
            style={
              styles.activeBottomText
            }
          >
            Home
          </Text>

        </TouchableOpacity>

        {/* ORDERS */}

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'DeliveryOrders'
            )
          }
        >

          <Ionicons
            name="cube-outline"
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
          onPress={() =>
            navigation.navigate(
              'DeliveryProfile',
              {
                onlineStatus:
                  isOnline,
              }
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
    fontSize: 14,
    color: '#777',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginTop: 5,
  },

  liveBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  liveText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  statusCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  statusTitle: {
    fontWeight: '700',
    fontSize: 17,
    color: '#222',
  },

  statusText: {
    marginTop: 5,
    color: '#666',
  },

  performanceCard: {
    backgroundColor: '#16b39a',
    borderRadius: 25,
    padding: 24,
    marginBottom: 24,
  },

  performanceTop: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  performanceTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  performanceSub: {
    color: '#DFFAF5',
    marginTop: 6,
  },

  performanceRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginTop: 25,
  },

  performanceValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },

  performanceLabel: {
    color: '#E8FFFA',
    marginTop: 5,
    textAlign: 'center',
  },

  sectionRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  orderCountBadge: {
    backgroundColor: '#16b39a',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderCountText: {
    color: '#fff',
    fontWeight: '700',
  },

  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
  },

  orderTop: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 15,
  },

  orderId: {
    color: '#16b39a',
    fontWeight: '700',
  },

  restaurant: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 5,
    color: '#222',
  },

  orderStatusBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  orderStatusText: {
    color: '#2E7D32',
    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  infoText: {
    marginLeft: 8,
    color: '#555',
    flex: 1,
  },

  amountRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginTop: 10,
    marginBottom: 15,
  },

  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#16b39a',
  },

  distance: {
    color: '#777',
  },

  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  trackBtn: {
    flex: 1,
    backgroundColor: '#2979FF',
    height: 52,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },

  callBtn: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  completeBtn: {
    flex: 1,
    backgroundColor: '#16b39a',
    height: 52,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnText: {
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
    fontWeight: '700',
    fontSize: 12,
  },

});
