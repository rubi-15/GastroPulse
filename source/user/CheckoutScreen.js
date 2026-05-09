import React, {
  useContext,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CartContext } from '../context/CartContext';

export default function CheckoutScreen({
  navigation,
}) {

  const { cartItems } =
    useContext(CartContext);

  /* ADDRESS STATES */
  const [name, setName] =
    useState('John Doe');

  const [address, setAddress] =
    useState('123 Health Ave');

  const [city, setCity] =
    useState('NutriCity');

  const [phone, setPhone] =
    useState('9876543210');

  const [editAddress, setEditAddress] =
    useState(false);

  /* PAYMENT */
  const [
    selectedPayment,
    setSelectedPayment,
  ] = useState('Google Pay');

  /* TOTAL */
  const total = cartItems.reduce(
    (sum, item) => {

      const price =
        typeof item.price === 'string'
          ? Number(
              item.price.replace(
                '₹',
                ''
              )
            )
          : Number(item.price || 0);

      return sum + price;

    },
    0
  );

  /* PLACE ORDER */
  const handlePlaceOrder = () => {

    if (cartItems.length === 0) {

      Alert.alert(
        'Empty Cart',
        'Please add items to cart'
      );

      return;
    }

    if (
      !name ||
      !address ||
      !city ||
      !phone
    ) {

      Alert.alert(
        'Missing Details',
        'Please fill delivery details'
      );

      return;
    }

    if (phone.length < 10) {

      Alert.alert(
        'Invalid Phone',
        'Enter valid phone number'
      );

      return;
    }

    navigation.navigate(
      'Payment',
      {
        total,
        paymentMethod:
          selectedPayment,

        deliveryDetails: {
          name,
          address,
          city,
          phone,
        },
      }
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
          Checkout
        </Text>

        <View style={{ width: 24 }} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 220,
        }}
      >

        {/* ADDRESS */}
        <View style={styles.card}>

          <View style={styles.rowBetween}>

            <Text style={styles.sectionTitle}>
              Delivery Address
            </Text>

            <TouchableOpacity
              onPress={() =>
                setEditAddress(
                  !editAddress
                )
              }
            >
              <Text style={styles.editText}>
                {editAddress
                  ? 'Save'
                  : 'Edit'}
              </Text>
            </TouchableOpacity>

          </View>

          {editAddress ? (

            <>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Full Name"
                style={styles.input}
              />

              <TextInput
                value={address}
                onChangeText={
                  setAddress
                }
                placeholder="Address"
                style={styles.input}
              />

              <TextInput
                value={city}
                onChangeText={setCity}
                placeholder="City"
                style={styles.input}
              />

              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                style={styles.input}
                maxLength={10}
              />
            </>

          ) : (

            <>
              <Text style={styles.name}>
                {name}
              </Text>

              <Text style={styles.address}>
                {address}
              </Text>

              <Text style={styles.address}>
                {city}
              </Text>

              <Text style={styles.address}>
                +91 {phone}
              </Text>
            </>
          )}

        </View>

        {/* PAYMENT */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Payment Method
          </Text>

          {[
            {
              name: 'Google Pay',
              icon: 'logo-google',
            },

            {
              name: 'PhonePe',
              icon:
                'phone-portrait',
            },

            {
              name: 'Paytm',
              icon: 'wallet',
            },

            {
              name:
                'Cash on Delivery',
              icon: 'cash',
            },

            {
              name: 'UPI Payment',
              icon: 'card',
            },

          ].map((item) => (

            <TouchableOpacity
              key={item.name}
              style={[
                styles.paymentCard,

                selectedPayment ===
                  item.name &&
                  styles.activePayment,
              ]}
              onPress={() =>
                setSelectedPayment(
                  item.name
                )
              }
            >

              <View
                style={
                  styles.paymentLeft
                }
              >

                <Ionicons
                  name={item.icon}
                  size={22}
                  color="#16b39a"
                />

                <Text
                  style={
                    styles.paymentText
                  }
                >
                  {item.name}
                </Text>

              </View>

              <Ionicons
                name={
                  selectedPayment ===
                  item.name
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={22}
                color="#16b39a"
              />

            </TouchableOpacity>
          ))}

        </View>

        {/* MEAL SUMMARY */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Meal Summary
          </Text>

          {cartItems.length === 0 ? (

            <Text style={styles.emptyText}>
              Your cart is empty
            </Text>

          ) : (

            cartItems.map(
              (item, index) => (

                <View
                  key={index}
                  style={
                    styles.mealRow
                  }
                >

                  <Image
                    source={{
                      uri:
                        item.image ||
                        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
                    }}
                    style={
                      styles.image
                    }
                  />

                  <View
                    style={{
                      flex: 1,
                    }}
                  >

                    <Text
                      style={
                        styles.foodName
                      }
                    >
                      {item.foodName}
                    </Text>

                    <Text
                      style={
                        styles.price
                      }
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
            )
          )}

        </View>

        {/* HEALTH TIPS */}
        <View style={styles.tipCard}>

          <Text style={styles.sectionTitle}>
            After-Meal Health Tips
          </Text>

          <Text style={styles.tip}>
            💧 Drink plenty of water
          </Text>

          <Text style={styles.tip}>
            🚶 Walk for 10-15 minutes
          </Text>

          <Text style={styles.tip}>
            🥗 Avoid overeating at night
          </Text>

        </View>

      </ScrollView>

      {/* BOTTOM */}
      <View style={styles.bottomBox}>

        <View>

          <Text style={styles.totalLabel}>
            Total Amount
          </Text>

          <Text style={styles.total}>
            ₹{total}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.placeBtn}
          onPress={handlePlaceOrder}
        >

          <Text style={styles.placeText}>
            Continue
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
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },

  tipCard: {
    backgroundColor: '#EAF8F5',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 14,
  },

  editText: {
    color: '#16b39a',
    fontWeight: '700',
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
    color: '#222',
  },

  address: {
    color: '#666',
    marginBottom: 4,
  },

  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
  },

  paymentCard: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },

  activePayment: {
    borderColor: '#16b39a',
    backgroundColor: '#EAF8F5',
  },

  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  paymentText: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },

  mealRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 14,
    marginRight: 14,
  },

  foodName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  price: {
    marginTop: 6,
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 17,
  },

  tip: {
    color: '#444',
    marginBottom: 10,
    lineHeight: 22,
  },

  emptyText: {
    color: '#777',
  },

  bottomBox: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    elevation: 8,
  },

  totalLabel: {
    color: '#777',
    fontSize: 13,
  },

  total: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    marginTop: 5,
  },

  placeBtn: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 16,
  },

  placeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

});