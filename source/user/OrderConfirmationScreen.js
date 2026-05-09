import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function OrderConfirmationScreen({
  navigation,
  route,
}) {

  const {
    orderId,
    total,
    paymentMethod,
    cartItems,
  } = route.params;

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >

        {/* SUCCESS ICON */}
        <View style={styles.successContainer}>

          <View style={styles.iconCircle}>
            <Ionicons
              name="checkmark"
              size={60}
              color="#fff"
            />
          </View>

          <Text style={styles.successTitle}>
            Order Placed Successfully!
          </Text>

          <Text style={styles.successSub}>
            Your healthy meal is being
            prepared and will arrive soon.
          </Text>

        </View>

        {/* ORDER DETAILS */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Order Details
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>
              Order ID
            </Text>

            <Text style={styles.value}>
              #{orderId}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Payment Method
            </Text>

            <Text style={styles.value}>
              {paymentMethod}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Total Amount
            </Text>

            <Text style={styles.total}>
              ₹{total}
            </Text>
          </View>

        </View>

        {/* ORDER ITEMS */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Ordered Meals
          </Text>

          {cartItems.map(
            (item, index) => (

              <View
                key={index}
                style={styles.itemRow}
              >

                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />

                <View
                  style={{
                    flex: 1,
                  }}
                >

                  <Text
                    style={styles.foodName}
                  >
                    {item.foodName}
                  </Text>

                  <Text
                    style={styles.hotel}
                  >
                    {item.hotel}
                  </Text>

                  <Text
                    style={styles.price}
                  >
                    ₹
                    {typeof item.price ===
                    'string'
                      ? item.price.replace(
                          '₹',
                          ''
                        )
                      : item.price}
                  </Text>

                </View>

              </View>
            )
          )}

        </View>

        {/* DELIVERY STATUS */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Delivery Status
          </Text>

          <View style={styles.statusRow}>

            <View style={styles.statusIcon}>
              <Ionicons
                name="restaurant"
                size={22}
                color="#16b39a"
              />
            </View>

            <View>
              <Text style={styles.statusTitle}>
                Preparing Your Meal
              </Text>

              <Text style={styles.statusSub}>
                Your food is being prepared
                by the restaurant.
              </Text>
            </View>

          </View>

          <View style={styles.line} />

          <View style={styles.statusRow}>

            <View style={styles.pendingIcon}>
              <Ionicons
                name="bicycle"
                size={22}
                color="#999"
              />
            </View>

            <View>
              <Text style={styles.pendingTitle}>
                Delivery Partner Assigned
              </Text>

              <Text style={styles.statusSub}>
                Waiting for pickup.
              </Text>
            </View>

          </View>

        </View>

        {/* HEALTH NOTE */}
        <View style={styles.healthCard}>

          <Ionicons
            name="heart"
            size={24}
            color="#16b39a"
          />

          <Text style={styles.healthText}>
            Thank you for choosing healthy
            meals. Stay hydrated and enjoy
            your nutritious food!
          </Text>

        </View>

      </ScrollView>

      {/* BUTTONS */}
      <View style={styles.bottomContainer}>

        <TouchableOpacity
          style={styles.trackBtn}
          onPress={() =>
            navigation.navigate(
              'UserHome'
            )
          }
        >
          <Text style={styles.trackText}>
            Back to Home
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
  },

  successContainer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#16b39a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  successTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    textAlign: 'center',
  },

  successSub: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 24,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 20,
    padding: 18,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 14,
  },

  label: {
    color: '#777',
    fontSize: 15,
  },

  value: {
    color: '#222',
    fontWeight: '700',
    fontSize: 15,
  },

  total: {
    color: '#16b39a',
    fontWeight: '800',
    fontSize: 18,
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 16,
    marginRight: 14,
  },

  foodName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  hotel: {
    color: '#777',
    marginTop: 5,
  },

  price: {
    color: '#16b39a',
    fontWeight: '700',
    marginTop: 8,
    fontSize: 16,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E9FFF8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  pendingIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  pendingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#888',
  },

  statusSub: {
    color: '#777',
    marginTop: 4,
  },

  line: {
    height: 40,
    width: 2,
    backgroundColor: '#ddd',
    marginLeft: 24,
    marginVertical: 8,
  },

  healthCard: {
    backgroundColor: '#EFFFF8',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 120,
  },

  healthText: {
    flex: 1,
    marginLeft: 12,
    color: '#333',
    lineHeight: 22,
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  trackBtn: {
    backgroundColor: '#16b39a',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  trackText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

});