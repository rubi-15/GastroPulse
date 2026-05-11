// ======================================================
// FILE: source/cook/CookOrdersScreen.js
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
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function CookOrdersScreen({
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
  // FILTER TABS
  // ======================================================

  const [selectedTab, setSelectedTab] =
    useState('All');

  const tabs = [
    'All',
    'Pending',
    'Preparing',
    'Ready',
    'Completed',
  ];

  // ======================================================
  // ORDERS DATA
  // ======================================================

  const [orders, setOrders] =
    useState([
      {
        id: 'ORD101',
        customer: 'Arun Kumar',
        dish: 'Healthy Quinoa Bowl',
        quantity: 2,
        amount: 420,
        address: 'Chennai',
        status: 'Pending',
        deliveryPartner: 'Waiting',
        prepTime: '20 mins',
        diet: 'High Protein',
        allergy: 'No Peanut',
        instructions:
          'Less spicy, use olive oil',
        priority: '🔥 High Priority',
      },

      {
        id: 'ORD102',
        customer: 'Priya',
        dish: 'Protein Salad',
        quantity: 1,
        amount: 260,
        address: 'Coimbatore',
        status: 'Preparing',
        deliveryPartner: 'Ravi',
        prepTime: '10 mins',
        diet: 'Low Carb',
        allergy: 'No Allergy',
        instructions:
          'Extra vegetables',
        priority: '⭐ VIP Customer',
      },

      {
        id: 'ORD103',
        customer: 'Kavin',
        dish:
          'Diabetic Friendly Meal',
        quantity: 3,
        amount: 780,
        address: 'Madurai',
        status: 'Completed',
        deliveryPartner: 'Arjun',
        prepTime: 'Delivered',
        diet: 'Diabetic Friendly',
        allergy: 'No Sugar',
        instructions:
          'Low salt required',
        priority: '🥗 Health Critical',
      },
    ]);

  // ======================================================
  // FILTERED ORDERS
  // ======================================================

  const filteredOrders =
    selectedTab === 'All'
      ? orders
      : orders.filter(
          item =>
            item.status ===
            selectedTab
        );

  // ======================================================
  // DASHBOARD VALUES
  // ======================================================

  const totalOrders =
    orders.length;

  const pendingOrders =
    orders.filter(
      item =>
        item.status ===
        'Pending'
    ).length;

  const preparingOrders =
    orders.filter(
      item =>
        item.status ===
        'Preparing'
    ).length;

  const totalEarnings =
    orders.reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  // ======================================================
  // UPDATE STATUS
  // ======================================================

  const updateStatus = (
    id,
    newStatus
  ) => {

    const updatedOrders =
      orders.map(item => {

        if (item.id === id) {

          return {
            ...item,
            status: newStatus,
          };

        }

        return item;

      });

    setOrders(updatedOrders);

    Alert.alert(
      'Updated',
      `Order marked as ${newStatus}`
    );

  };

  // ======================================================
  // REJECT ORDER
  // ======================================================

  const rejectOrder = id => {

    Alert.alert(
      'Reject Order',
      'Are you sure?',
      [
        {
          text: 'Cancel',
        },

        {
          text: 'Reject',

          onPress: () => {

            const updated =
              orders.filter(
                item =>
                  item.id !== id
              );

            setOrders(updated);

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

      {/* HEADER */}

      <View style={styles.header}>

        <View>

          <Text style={styles.welcome}>
            Orders Dashboard 👨‍🍳
          </Text>

          <Text style={styles.name}>
            Chef {cookName}
          </Text>

        </View>

        <Ionicons
          name="receipt-outline"
          size={34}
          color="#16b39a"
        />

      </View>

      {/* ORDERS LIST */}

      <FlatList
        data={filteredOrders}
        keyExtractor={(item) =>
          item.id
        }
        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 140,
        }}

        ListHeaderComponent={
          <>

            {/* DASHBOARD CARDS */}

            <View style={styles.statsRow}>

              <View style={styles.statCard}>

                <Text
                  style={styles.statValue}
                >
                  {totalOrders}
                </Text>

                <Text
                  style={styles.statLabel}
                >
                  Orders
                </Text>

              </View>

              <View style={styles.statCard}>

                <Text
                  style={styles.statValue}
                >
                  {pendingOrders}
                </Text>

                <Text
                  style={styles.statLabel}
                >
                  Pending
                </Text>

              </View>

            </View>

            <View style={styles.statsRow}>

              <View style={styles.statCard}>

                <Text
                  style={styles.statValue}
                >
                  {preparingOrders}
                </Text>

                <Text
                  style={styles.statLabel}
                >
                  Preparing
                </Text>

              </View>

              <View style={styles.statCard}>

                <Text
                  style={styles.statValue}
                >
                  ₹{totalEarnings}
                </Text>

                <Text
                  style={styles.statLabel}
                >
                  Earnings
                </Text>

              </View>

            </View>

            {/* FILTER TABS */}

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={
                false
              }
              style={
                styles.tabsContainer
              }
            >

              {tabs.map(tab => (

                <TouchableOpacity
                  key={tab}
                  style={[
                    styles.tabButton,

                    selectedTab ===
                      tab &&
                      styles.activeTabButton,
                  ]}
                  onPress={() =>
                    setSelectedTab(tab)
                  }
                >

                  <Text
                    style={[
                      styles.tabText,

                      selectedTab ===
                        tab &&
                        styles.activeTabText,
                    ]}
                  >
                    {tab}
                  </Text>

                </TouchableOpacity>

              ))}

            </ScrollView>

          </>
        }

        renderItem={({ item }) => (

          <View style={styles.orderCard}>

            {/* TOP */}

            <View style={styles.orderTop}>

              <Text style={styles.orderId}>
                {item.id}
              </Text>

              <View
                style={
                  styles.statusBadge
                }
              >

                <Text
                  style={
                    styles.statusText
                  }
                >
                  {item.status}
                </Text>

              </View>

            </View>

            {/* DETAILS */}

            <Text style={styles.detail}>
              👤 Customer:
              {' '}
              {item.customer}
            </Text>

            <Text style={styles.detail}>
              🍽 Dish:
              {' '}
              {item.dish}
            </Text>

            <Text style={styles.detail}>
              📦 Quantity:
              {' '}
              {item.quantity}
            </Text>

            <Text style={styles.detail}>
              📍 Address:
              {' '}
              {item.address}
            </Text>

            <Text style={styles.detail}>
              🥗 Diet:
              {' '}
              {item.diet}
            </Text>

            <Text style={styles.detail}>
              ⚠ Allergy:
              {' '}
              {item.allergy}
            </Text>

            <Text style={styles.detail}>
              📝 Instructions:
              {' '}
              {item.instructions}
            </Text>

            <Text style={styles.detail}>
              🚚 Delivery Partner:
              {' '}
              {item.deliveryPartner}
            </Text>

            <Text style={styles.detail}>
              ⏱ Prep Time:
              {' '}
              {item.prepTime}
            </Text>

            <Text style={styles.priority}>
              {item.priority}
            </Text>

            <Text style={styles.amount}>
              ₹{item.amount}
            </Text>

            {/* ACTION BUTTONS */}

            {item.status ===
              'Pending' && (

              <View
                style={
                  styles.buttonRow
                }
              >

                <TouchableOpacity
                  style={
                    styles.acceptBtn
                  }
                  onPress={() =>
                    updateStatus(
                      item.id,
                      'Preparing'
                    )
                  }
                >

                  <Text
                    style={
                      styles.btnText
                    }
                  >
                    Accept
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity
                  style={
                    styles.rejectBtn
                  }
                  onPress={() =>
                    rejectOrder(
                      item.id
                    )
                  }
                >

                  <Text
                    style={
                      styles.btnText
                    }
                  >
                    Reject
                  </Text>

                </TouchableOpacity>

              </View>
            )}

            {item.status ===
              'Preparing' && (

              <TouchableOpacity
                style={styles.readyBtn}
                onPress={() =>
                  updateStatus(
                    item.id,
                    'Ready'
                  )
                }
              >

                <Text
                  style={styles.btnText}
                >
                  Mark Ready
                </Text>

              </TouchableOpacity>
            )}

            {item.status ===
              'Ready' && (

              <TouchableOpacity
                style={
                  styles.completeBtn
                }
                onPress={() =>
                  updateStatus(
                    item.id,
                    'Completed'
                  )
                }
              >

                <Text
                  style={styles.btnText}
                >
                  Complete Order
                </Text>

              </TouchableOpacity>
            )}

            {item.status ===
              'Completed' && (

              <View
                style={
                  styles.completedBox
                }
              >

                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color="#16b39a"
                />

                <Text
                  style={
                    styles.completedText
                  }
                >
                  Order Delivered
                </Text>

              </View>
            )}

          </View>

        )}
      />

      {/* BOTTOM NAVIGATION */}

      <View style={styles.bottomBar}>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              'CookHome',
              { cookName }
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

        <TouchableOpacity
          style={styles.bottomItem}
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

          <Text style={styles.bottomText}>
            Menu
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
        >

          <Ionicons
            name="receipt"
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

        <TouchableOpacity
          style={styles.bottomItem}
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
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
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

  statsRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 15,
  },

  statCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#16b39a',
  },

  statLabel: {
    marginTop: 5,
    color: '#666',
  },

  tabsContainer: {
    marginBottom: 20,
  },

  tabButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  activeTabButton: {
    backgroundColor: '#16b39a',
  },

  tabText: {
    color: '#555',
    fontWeight: '600',
  },

  activeTabText: {
    color: '#fff',
  },

  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
  },

  orderTop: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  orderId: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  statusBadge: {
    backgroundColor: '#EAF8F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
  },

  statusText: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 12,
  },

  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 7,
  },

  priority: {
    color: '#ff5722',
    fontWeight: '700',
    marginTop: 8,
  },

  amount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#16b39a',
    marginTop: 14,
    marginBottom: 18,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
  },

  acceptBtn: {
    backgroundColor: '#16b39a',
    width: '48%',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rejectBtn: {
    backgroundColor: '#ff4d4d',
    width: '48%',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  readyBtn: {
    backgroundColor: '#ff9800',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  completeBtn: {
    backgroundColor: '#4CAF50',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

  completedBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  completedText: {
    marginLeft: 8,
    color: '#16b39a',
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

  activeBottomText: {
    marginTop: 4,
    color: '#16b39a',
    fontSize: 12,
    fontWeight: '700',
  },

});