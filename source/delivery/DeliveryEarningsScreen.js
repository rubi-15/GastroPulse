// ======================================================
// FILE: source/delivery/DeliveryEarningsScreen.js
// DYNAMIC DELIVERY EARNINGS SCREEN
// ======================================================

import React, { useMemo } from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function DeliveryEarningsScreen({
  navigation,
}) {

  // ======================================================
  // DYNAMIC DELIVERY DATA
  // ======================================================

  const deliveries = [

    {
      id: '1',
      customer: 'Rahul Sharma',
      restaurant: 'Spicy Kitchen',
      amount: 120,
      distance: '3.2 km',
      payment: 'UPI',
      tip: 20,
      date: 'Today • 1:20 PM',
      status: 'Completed',
    },

    {
      id: '2',
      customer: 'Priya',
      restaurant: 'Burger Hub',
      amount: 95,
      distance: '2.1 km',
      payment: 'Cash',
      tip: 10,
      date: 'Today • 11:10 AM',
      status: 'Completed',
    },

    {
      id: '3',
      customer: 'Arun Kumar',
      restaurant: 'Healthy Bowl',
      amount: 150,
      distance: '4.5 km',
      payment: 'UPI',
      tip: 30,
      date: 'Yesterday • 7:45 PM',
      status: 'Completed',
    },

    {
      id: '4',
      customer: 'Sneha',
      restaurant: 'Pizza Point',
      amount: 180,
      distance: '5 km',
      payment: 'Card',
      tip: 40,
      date: 'Yesterday • 4:30 PM',
      status: 'Completed',
    },

    {
      id: '5',
      customer: 'Kavin',
      restaurant: 'South Meals',
      amount: 135,
      distance: '3.8 km',
      payment: 'UPI',
      tip: 15,
      date: 'Yesterday • 2:15 PM',
      status: 'Completed',
    },

  ];

  // ======================================================
  // DYNAMIC CALCULATIONS
  // ======================================================

  const totalOrders = deliveries.length;

  const totalEarnings = useMemo(() => {

    return deliveries.reduce(
      (sum, item) =>
        sum + item.amount + item.tip,
      0
    );

  }, []);

  const totalTips = useMemo(() => {

    return deliveries.reduce(
      (sum, item) =>
        sum + item.tip,
      0
    );

  }, []);

  const averagePerOrder = Math.floor(
    totalEarnings / totalOrders
  );

  // ======================================================
  // WITHDRAW FUNCTION
  // ======================================================

  const withdrawEarnings = () => {

    Alert.alert(
      'Withdraw Earnings',
      `₹${totalEarnings} withdrawal request sent successfully`,
      [
        {
          text: 'OK',
        },
      ]
    );

  };

  // ======================================================
  // DELIVERY CARD
  // ======================================================

  const renderDelivery = ({ item }) => (

    <View style={styles.historyCard}>

      <View style={styles.leftSection}>

        <View style={styles.iconBox}>

          <Ionicons
            name="bicycle"
            size={24}
            color="#16b39a"
          />

        </View>

        <View>

          <Text style={styles.restaurantName}>
            {item.restaurant}
          </Text>

          <Text style={styles.customerText}>
            Customer: {item.customer}
          </Text>

          <Text style={styles.dateText}>
            {item.date}
          </Text>

          <Text style={styles.distanceText}>
            Distance: {item.distance}
          </Text>

        </View>

      </View>

      <View style={styles.rightSection}>

        <Text style={styles.amountText}>
          ₹{item.amount}
        </Text>

        <Text style={styles.tipText}>
          + ₹{item.tip} Tip
        </Text>

        <Text style={styles.paymentText}>
          {item.payment}
        </Text>

        <Text style={styles.statusText}>
          {item.status}
        </Text>

      </View>

    </View>

  );

  // ======================================================
  // UI
  // ======================================================

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
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
            Earnings
          </Text>

          <Ionicons
            name="wallet-outline"
            size={30}
            color="#16b39a"
          />

        </View>

        {/* ======================================================
            MAIN EARNINGS CARD
        ====================================================== */}

        <View style={styles.totalCard}>

          <Text style={styles.totalTitle}>
            Total Earnings
          </Text>

          <Text style={styles.totalAmount}>
            ₹{totalEarnings}
          </Text>

          <Text style={styles.totalSub}>
            Updated in Real-Time
          </Text>

        </View>

        {/* ======================================================
            STATS CARDS
        ====================================================== */}

        <View style={styles.statsContainer}>

          {/* TOTAL ORDERS */}

          <View style={styles.statsCard}>

            <Ionicons
              name="receipt-outline"
              size={28}
              color="#16b39a"
            />

            <Text style={styles.statsValue}>
              {totalOrders}
            </Text>

            <Text style={styles.statsLabel}>
              Orders
            </Text>

          </View>

          {/* TOTAL TIPS */}

          <View style={styles.statsCard}>

            <Ionicons
              name="cash-outline"
              size={28}
              color="#FF9800"
            />

            <Text style={styles.statsValue}>
              ₹{totalTips}
            </Text>

            <Text style={styles.statsLabel}>
              Tips
            </Text>

          </View>

        </View>

        {/* ======================================================
            AVG EARNING CARD
        ====================================================== */}

        <View style={styles.averageCard}>

          <View>

            <Text style={styles.averageTitle}>
              Average Per Delivery
            </Text>

            <Text style={styles.averageAmount}>
              ₹{averagePerOrder}
            </Text>

          </View>

          <Ionicons
            name="trending-up"
            size={40}
            color="#16b39a"
          />

        </View>

        {/* ======================================================
            DELIVERY HISTORY TITLE
        ====================================================== */}

        <View style={styles.historyHeader}>

          <Text style={styles.historyTitle}>
            Recent Deliveries
          </Text>

          <Text style={styles.historyCount}>
            {totalOrders} Orders
          </Text>

        </View>

        {/* ======================================================
            DELIVERY LIST
        ====================================================== */}

        <FlatList
          data={deliveries}
          keyExtractor={item => item.id}
          renderItem={renderDelivery}
          scrollEnabled={false}
        />

        {/* ======================================================
            WITHDRAW BUTTON
        ====================================================== */}

        <TouchableOpacity
          style={styles.withdrawBtn}
          onPress={withdrawEarnings}
        >

          <Ionicons
            name="card-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.withdrawText}>
            Withdraw Earnings
          </Text>

        </TouchableOpacity>

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

        {/* EARNINGS */}

        <TouchableOpacity
          style={styles.bottomItem}
        >

          <Ionicons
            name="wallet"
            size={24}
            color="#16b39a"
          />

          <Text
            style={
              styles.activeBottomText
            }
          >
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

  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },

  totalCard: {
    backgroundColor: '#16b39a',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },

  totalTitle: {
    color: '#fff',
    fontSize: 18,
  },

  totalAmount: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '700',
    marginTop: 12,
  },

  totalSub: {
    color: '#DFFCF6',
    marginTop: 8,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 20,
  },

  statsCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
  },

  statsValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginTop: 10,
  },

  statsLabel: {
    color: '#777',
    marginTop: 5,
  },

  averageCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 22,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  averageTitle: {
    fontSize: 16,
    color: '#777',
  },

  averageAmount: {
    fontSize: 30,
    fontWeight: '700',
    color: '#222',
    marginTop: 5,
  },

  historyHeader: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  historyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  historyCount: {
    color: '#777',
  },

  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#E9FFFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  restaurantName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },

  customerText: {
    color: '#555',
    marginTop: 4,
  },

  dateText: {
    color: '#777',
    marginTop: 4,
    fontSize: 12,
  },

  distanceText: {
    color: '#16b39a',
    marginTop: 3,
    fontSize: 12,
    fontWeight: '600',
  },

  rightSection: {
    alignItems: 'flex-end',
  },

  amountText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#16b39a',
  },

  tipText: {
    color: '#FF9800',
    fontWeight: '600',
    marginTop: 3,
  },

  paymentText: {
    color: '#777',
    marginTop: 3,
    fontSize: 12,
  },

  statusText: {
    color: '#4CAF50',
    marginTop: 5,
    fontWeight: '700',
    fontSize: 12,
  },

  withdrawBtn: {
    backgroundColor: '#FF9800',
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  withdrawText: {
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