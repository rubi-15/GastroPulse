// ======================================================
// FILE: source/cook/CookEarningsScreen.js
// REAL-TIME EARNINGS MODULE
// ======================================================

import React, {
  useState,
} from 'react';

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

export default function CookEarningsScreen({
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
  // EARNINGS DATA
  // ======================================================

  const totalEarnings = 48250;

  const weeklyEarnings = 12300;

  const monthlyOrders = 186;

  const pendingPayout = 3250;

  // ======================================================
  // TOP SELLING DISHES
  // ======================================================

  const [topDishes] = useState([

    {
      id: '1',
      name: 'Chicken Biryani',
      orders: 82,
      earnings: 16400,
    },

    {
      id: '2',
      name: 'Healthy Salad Bowl',
      orders: 54,
      earnings: 9720,
    },

    {
      id: '3',
      name: 'Paneer Butter Masala',
      orders: 43,
      earnings: 8600,
    },

  ]);

  // ======================================================
  // TRANSACTIONS
  // ======================================================

  const [transactions] = useState([

    {
      id: 'TXN101',
      customer: 'Arun Kumar',
      amount: 420,
      status: 'Credited',
      date: 'Today',
    },

    {
      id: 'TXN102',
      customer: 'Priya',
      amount: 260,
      status: 'Processing',
      date: 'Yesterday',
    },

    {
      id: 'TXN103',
      customer: 'Kavin',
      amount: 780,
      status: 'Credited',
      date: '2 Days Ago',
    },

  ]);

  // ======================================================
  // WITHDRAW FUNCTION
  // ======================================================

  const withdrawMoney = () => {

    Alert.alert(
      'Withdraw Request',
      '₹3250 withdrawal request submitted successfully'
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
              Earnings Dashboard 💰
            </Text>

            <Text style={styles.name}>
              Chef {cookName}
            </Text>

          </View>

          <Ionicons
            name="wallet"
            size={38}
            color="#16b39a"
          />

        </View>

        {/* ======================================================
            MAIN EARNINGS CARD
        ====================================================== */}

        <View style={styles.mainCard}>

          <Text style={styles.mainLabel}>
            Total Earnings
          </Text>

          <Text style={styles.mainAmount}>
            ₹{totalEarnings}
          </Text>

          <Text style={styles.growth}>
            +18% this month 📈
          </Text>

        </View>

        {/* ======================================================
            STATS ROW
        ====================================================== */}

        <View style={styles.statsRow}>

          <View style={styles.statCard}>

            <Ionicons
              name="calendar-outline"
              size={28}
              color="#16b39a"
            />

            <Text style={styles.statValue}>
              ₹{weeklyEarnings}
            </Text>

            <Text style={styles.statLabel}>
              Weekly
            </Text>

          </View>

          <View style={styles.statCard}>

            <Ionicons
              name="receipt-outline"
              size={28}
              color="#16b39a"
            />

            <Text style={styles.statValue}>
              {monthlyOrders}
            </Text>

            <Text style={styles.statLabel}>
              Orders
            </Text>

          </View>

        </View>

        {/* ======================================================
            PAYOUT CARD
        ====================================================== */}

        <View style={styles.payoutCard}>

          <View>

            <Text style={styles.payoutLabel}>
              Pending Payout
            </Text>

            <Text style={styles.payoutAmount}>
              ₹{pendingPayout}
            </Text>

          </View>

          <TouchableOpacity
            style={styles.withdrawBtn}
            onPress={withdrawMoney}
          >

            <Text style={styles.withdrawText}>
              Withdraw
            </Text>

          </TouchableOpacity>

        </View>

        {/* ======================================================
            TOP SELLING DISHES
        ====================================================== */}

        <Text style={styles.sectionTitle}>
          Top Selling Dishes
        </Text>

        {topDishes.map(item => (

          <View
            key={item.id}
            style={styles.dishCard}
          >

            <View>

              <Text style={styles.dishName}>
                {item.name}
              </Text>

              <Text style={styles.dishOrders}>
                {item.orders} Orders
              </Text>

            </View>

            <Text style={styles.dishEarning}>
              ₹{item.earnings}
            </Text>

          </View>

        ))}

        {/* ======================================================
            RECENT TRANSACTIONS
        ====================================================== */}

        <Text style={styles.sectionTitle}>
          Recent Transactions
        </Text>

        <FlatList
          data={transactions}
          scrollEnabled={false}
          keyExtractor={item =>
            item.id
          }
          renderItem={({ item }) => (

            <View
              style={
                styles.transactionCard
              }
            >

              <View>

                <Text
                  style={
                    styles.transactionId
                  }
                >
                  {item.id}
                </Text>

                <Text
                  style={
                    styles.customer
                  }
                >
                  {item.customer}
                </Text>

                <Text
                  style={styles.date}
                >
                  {item.date}
                </Text>

              </View>

              <View
                style={{
                  alignItems:
                    'flex-end',
                }}
              >

                <Text
                  style={
                    styles.transactionAmount
                  }
                >
                  ₹{item.amount}
                </Text>

                <Text
                  style={[
                    styles.status,

                    {
                      color:
                        item.status ===
                        'Credited'
                          ? '#16b39a'
                          : '#ff9800',
                    },
                  ]}
                >
                  {item.status}
                </Text>

              </View>

            </View>

          )}
        />

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
          onPress={() =>
            navigation.navigate(
              'CookProfile',
              {
                cookName,
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

  welcome: {
    fontSize: 14,
    color: '#777',
  },

  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginTop: 5,
  },

  mainCard: {
    backgroundColor: '#16b39a',
    borderRadius: 24,
    padding: 28,
    marginBottom: 20,
  },

  mainLabel: {
    color: '#fff',
    fontSize: 16,
  },

  mainAmount: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '700',
    marginTop: 10,
  },

  growth: {
    color: '#fff',
    marginTop: 8,
    fontSize: 15,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 20,
  },

  statCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 22,
    padding: 20,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginTop: 12,
  },

  statLabel: {
    color: '#777',
    marginTop: 5,
  },

  payoutCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 20,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  payoutLabel: {
    color: '#666',
  },

  payoutAmount: {
    fontSize: 30,
    fontWeight: '700',
    color: '#16b39a',
    marginTop: 6,
  },

  withdrawBtn: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 14,
  },

  withdrawText: {
    color: '#fff',
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
  },

  dishCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  dishName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  dishOrders: {
    color: '#777',
    marginTop: 5,
  },

  dishEarning: {
    fontSize: 22,
    fontWeight: '700',
    color: '#16b39a',
  },

  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  transactionId: {
    fontWeight: '700',
    fontSize: 16,
    color: '#222',
  },

  customer: {
    color: '#666',
    marginTop: 4,
  },

  date: {
    color: '#999',
    marginTop: 5,
    fontSize: 12,
  },

  transactionAmount: {
    fontSize: 22,
    fontWeight: '700',
    color: '#16b39a',
  },

  status: {
    marginTop: 5,
    fontWeight: '700',
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

});