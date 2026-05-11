// ======================================================
// FILE: CookHomeScreen.js
// ======================================================

import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function CookHomeScreen({
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
  // ORDER DATA
  // ======================================================

  const [orders, setOrders] =
    useState([
      {
        id: 'ORD1021',
        customer: 'Arun Kumar',
        meal: 'Healthy Quinoa Bowl',
        qty: 2,
        amount: 420,
        status: 'Pending',
      },

      {
        id: 'ORD1022',
        customer: 'Priya',
        meal: 'Protein Salad',
        qty: 1,
        amount: 260,
        status: 'Preparing',
      },

      {
        id: 'ORD1023',
        customer: 'Kavin',
        meal: 'Diabetic Friendly Meal',
        qty: 3,
        amount: 780,
        status: 'Ready',
      },
    ]);

  // ======================================================
  // DASHBOARD COUNTS
  // ======================================================

  const totalOrders =
    orders.length;

  const pendingOrders =
    orders.filter(
      item => item.status === 'Pending'
    ).length;

  const preparingOrders =
    orders.filter(
      item => item.status === 'Preparing'
    ).length;

  const totalEarnings =
    orders.reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  // ======================================================
  // ACCEPT ORDER
  // ======================================================

  const acceptOrder = id => {

    const updated =
      orders.map(item => {

        if (item.id === id) {

          return {
            ...item,
            status: 'Preparing',
          };

        }

        return item;

      });

    setOrders(updated);

    Alert.alert(
      'Order Accepted',
      'Start preparing the meal'
    );

  };

  // ======================================================
  // READY ORDER
  // ======================================================

  const readyOrder = id => {

    const updated =
      orders.map(item => {

        if (item.id === id) {

          return {
            ...item,
            status: 'Ready',
          };

        }

        return item;

      });

    setOrders(updated);

    Alert.alert(
      'Meal Ready',
      'Delivery partner will pick it up'
    );

  };

  // ======================================================
  // UI
  // ======================================================

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.welcome}>
              Welcome 👋
            </Text>

            <Text style={styles.cookName}>
              {cookName}
            </Text>

          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                'CookProfile',
                { cookName }
              )
            }
          >

            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/44.jpg',
              }}
              style={styles.profile}
            />

          </TouchableOpacity>

        </View>

        {/* DASHBOARD */}

        <View style={styles.dashboardRow}>

          <View style={styles.card}>

            <Text style={styles.cardValue}>
              {totalOrders}
            </Text>

            <Text style={styles.cardLabel}>
              Total Orders
            </Text>

          </View>

          <View style={styles.card}>

            <Text style={styles.cardValue}>
              {pendingOrders}
            </Text>

            <Text style={styles.cardLabel}>
              Pending
            </Text>

          </View>

        </View>

        <View style={styles.dashboardRow}>

          <View style={styles.card}>

            <Text style={styles.cardValue}>
              {preparingOrders}
            </Text>

            <Text style={styles.cardLabel}>
              Preparing
            </Text>

          </View>

          <TouchableOpacity
  style={styles.card}
  onPress={() =>
    navigation.navigate(
      'CookEarnings',
      {
        cookName,
        totalEarnings,
      }
    )
  }
>

  <Ionicons
    name="wallet-outline"
    size={26}
    color="#16b39a"
    style={{ marginBottom: 8 }}
  />

  <Text style={styles.cardValue}>
    ₹{totalEarnings}
  </Text>

  <Text style={styles.cardLabel}>
    Earnings
  </Text>

</TouchableOpacity>

        </View>

        {/* LIVE ORDERS */}

        <Text style={styles.sectionTitle}>
          Live Orders
        </Text>

        {orders.map(item => (

          <View
            key={item.id}
            style={styles.orderCard}
          >

            <View style={styles.orderTop}>

              <Text style={styles.orderId}>
                {item.id}
              </Text>

              <View style={styles.statusBadge}>

                <Text style={styles.statusText}>
                  {item.status}
                </Text>

              </View>

            </View>

            <Text style={styles.customer}>
              Customer: {item.customer}
            </Text>

            <Text style={styles.meal}>
              Meal: {item.meal}
            </Text>

            <Text style={styles.meal}>
              Quantity: {item.qty}
            </Text>

            <Text style={styles.amount}>
              ₹{item.amount}
            </Text>

            {/* PENDING */}

            {item.status ===
              'Pending' && (

              <TouchableOpacity
                style={styles.acceptBtn}
                onPress={() =>
                  acceptOrder(item.id)
                }
              >

                <Text style={styles.btnText}>
                  Accept Order
                </Text>

              </TouchableOpacity>

            )}

            {/* PREPARING */}

            {item.status ===
              'Preparing' && (

              <TouchableOpacity
                style={styles.readyBtn}
                onPress={() =>
                  readyOrder(item.id)
                }
              >

                <Text style={styles.btnText}>
                  Mark as Ready
                </Text>

              </TouchableOpacity>

            )}

            {/* READY */}

            {item.status ===
              'Ready' && (

              <View style={styles.readyBox}>

                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color="#16b39a"
                />

                <Text style={styles.readyLabel}>
                  Waiting for pickup
                </Text>

              </View>

            )}

          </View>

        ))}

        <View style={{ height: 120 }} />

      </ScrollView>

      {/* ======================================================
          BOTTOM NAVIGATION
      ====================================================== */}

      <View style={styles.bottomTab}>

        {/* DASHBOARD */}

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate(
              'CookHome',
              { cookName }
            )
          }
        >

          <Ionicons
            name="home"
            size={24}
            color="#16b39a"
          />

          <Text style={styles.activeTab}>
            Dashboard
          </Text>

        </TouchableOpacity>

        {/* MENU */}

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate(
              'CookMenu',
              { cookName }
            )
          }
        >

          <Ionicons
            name="restaurant-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.inactiveTab}>
            Menu
          </Text>

        </TouchableOpacity>

        {/* ORDERS */}

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate(
              'CookOrders',
              { cookName }
            )
          }
        >

          <Ionicons
            name="receipt-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.inactiveTab}>
            Orders
          </Text>

        </TouchableOpacity>

        {/* PROFILE */}

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate(
              'CookProfile',
              { cookName }
            )
          }
        >

          <Ionicons
            name="person-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.inactiveTab}>
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
    backgroundColor: '#F6F7FB',
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 25,
  },

  welcome: {
    fontSize: 14,
    color: '#666',
  },

  cookName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginTop: 4,
  },

  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  dashboardRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },

  cardValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#16b39a',
  },

  cardLabel: {
    color: '#777',
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginHorizontal: 16,
    marginTop: 15,
    marginBottom: 14,
  },

  orderCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },

  orderTop: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  orderId: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },

  statusBadge: {
    backgroundColor: '#EAF8F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 12,
  },

  customer: {
    color: '#555',
    marginBottom: 6,
  },

  meal: {
    color: '#444',
    marginBottom: 6,
  },

  amount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginTop: 10,
    marginBottom: 15,
  },

  acceptBtn: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  readyBtn: {
    backgroundColor: '#16b39a',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

  readyBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  readyLabel: {
    marginLeft: 8,
    color: '#16b39a',
    fontWeight: '700',
  },

  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 78,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent:
      'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },

  tabItem: {
    alignItems: 'center',
  },

  activeTab: {
    color: '#16b39a',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '700',
  },

  inactiveTab: {
    color: '#777',
    fontSize: 12,
    marginTop: 4,
  },

});