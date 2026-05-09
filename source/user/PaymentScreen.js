import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CartContext } from '../context/CartContext';

export default function PaymentScreen({
  navigation,
  route,
}) {

  const {
    cartItems,
    clearCart,
  } = useContext(CartContext);

  /* GET PAYMENT METHOD FROM CHECKOUT */
  const paymentMethod =
    route?.params?.paymentMethod ||
    'Cash on Delivery';

  const [loading, setLoading] =
    useState(false);

  /* CARD STATES */
  const [cardNumber, setCardNumber] =
    useState('');

  const [cardHolder, setCardHolder] =
    useState('');

  const [expiry, setExpiry] =
    useState('');

  const [cvv, setCvv] =
    useState('');

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
  const placeOrder = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      clearCart();

      navigation.replace(
        'OrderConfirmation',
        {
          totalAmount: total,
          paymentMethod:
            paymentMethod,
        }
      );

    }, 2000);
  };

  /* HANDLE PAYMENT */
  const handlePayment = () => {

    /* COD */
    if (
      paymentMethod ===
      'Cash on Delivery'
    ) {

      Alert.alert(
        'Order Confirmed',
        'Your order will be paid on delivery'
      );

      placeOrder();

      return;
    }

    /* UPI APPS */
    if (
      paymentMethod ===
        'Google Pay' ||
      paymentMethod ===
        'PhonePe' ||
      paymentMethod === 'Paytm' ||
      paymentMethod ===
        'UPI Payment'
    ) {

      Alert.alert(
        paymentMethod,
        `Redirecting to ${paymentMethod}...`
      );

      placeOrder();

      return;
    }

    /* CARD VALIDATION */
    if (
      !cardNumber ||
      !cardHolder ||
      !expiry ||
      !cvv
    ) {

      Alert.alert(
        'Missing Details',
        'Please fill all card details'
      );

      return;
    }

    if (cardNumber.length < 16) {

      Alert.alert(
        'Invalid Card',
        'Enter valid card number'
      );

      return;
    }

    if (cvv.length < 3) {

      Alert.alert(
        'Invalid CVV',
        'Enter valid CVV'
      );

      return;
    }

    placeOrder();
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

        <Text style={styles.title}>
          Payment
        </Text>

        <View style={{ width: 24 }} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 180,
        }}
      >

        {/* SELECTED PAYMENT */}
        <View style={styles.methodCard}>

          <Text style={styles.methodLabel}>
            Selected Payment Method
          </Text>

          <Text style={styles.methodText}>
            {paymentMethod}
          </Text>

        </View>

        {/* COD UI */}
        {paymentMethod ===
          'Cash on Delivery' && (

          <View style={styles.infoCard}>

            <Ionicons
              name="cash"
              size={60}
              color="#16b39a"
            />

            <Text style={styles.infoTitle}>
              Cash on Delivery
            </Text>

            <Text style={styles.infoText}>
              Pay when your food arrives
              at your doorstep.
            </Text>

          </View>
        )}

        {/* UPI UI */}
        {(paymentMethod ===
          'Google Pay' ||
          paymentMethod ===
            'PhonePe' ||
          paymentMethod ===
            'Paytm' ||
          paymentMethod ===
            'UPI Payment') && (

          <View style={styles.infoCard}>

            <Ionicons
              name="phone-portrait"
              size={60}
              color="#16b39a"
            />

            <Text style={styles.infoTitle}>
              UPI Payment
            </Text>

            <Text style={styles.infoText}>
              You will be redirected to{' '}
              {paymentMethod} for secure
              payment.
            </Text>

          </View>
        )}

        {/* CARD FORM */}
        {paymentMethod ===
          'Card Payment' && (

          <View style={styles.formCard}>

            <Text style={styles.label}>
              Card Number
            </Text>

            <TextInput
              style={styles.input}
              placeholder="1234 5678 9012 3456"
              keyboardType="numeric"
              maxLength={16}
              value={cardNumber}
              onChangeText={
                setCardNumber
              }
            />

            <Text style={styles.label}>
              Card Holder Name
            </Text>

            <TextInput
              style={styles.input}
              placeholder="John Doe"
              value={cardHolder}
              onChangeText={
                setCardHolder
              }
            />

            <View style={styles.row}>

              <View style={{ flex: 1 }}>

                <Text style={styles.label}>
                  Expiry Date
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="MM/YY"
                  value={expiry}
                  onChangeText={
                    setExpiry
                  }
                />

              </View>

              <View
                style={{
                  width: 16,
                }}
              />

              <View style={{ flex: 1 }}>

                <Text style={styles.label}>
                  CVV
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="123"
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={3}
                  value={cvv}
                  onChangeText={
                    setCvv
                  }
                />

              </View>

            </View>

          </View>
        )}

      </ScrollView>

      {/* PAY BUTTON */}
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
          style={styles.payBtn}
          onPress={handlePayment}
          disabled={loading}
        >

          {loading ? (

            <ActivityIndicator
              color="#fff"
            />

          ) : (

            <Text style={styles.payText}>
              {paymentMethod ===
              'Cash on Delivery'
                ? 'Place Order'
                : 'Pay Now'}
            </Text>

          )}

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 35,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  methodCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },

  methodLabel: {
    color: '#777',
    marginBottom: 8,
  },

  methodText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#16b39a',
  },

  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    color: '#222',
  },

  infoText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
    lineHeight: 22,
  },

  formCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 18,
  },

  label: {
    marginBottom: 8,
    marginTop: 12,
    color: '#555',
  },

  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    padding: 16,
  },

  row: {
    flexDirection: 'row',
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
  },

  total: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
  },

  payBtn: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    minWidth: 140,
    alignItems: 'center',
  },

  payText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

});