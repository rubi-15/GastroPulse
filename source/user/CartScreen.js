import React, { useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CartContext } from '../context/CartContext';

export default function CartScreen({
  navigation,
}) {

  const {
    cartItems,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  /* TOTAL PRICE */
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

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            navigation.goBack()
          }
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color="#222"
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          My Cart
        </Text>

        {cartItems.length > 0 ? (
          <TouchableOpacity
            onPress={clearCart}
          >
            <Text style={styles.clearText}>
              Clear
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 50 }} />
        )}

      </View>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (

        <View style={styles.emptyBox}>

          <Ionicons
            name="cart-outline"
            size={80}
            color="#ccc"
          />

          <Text style={styles.emptyText}>
            Cart is Empty
          </Text>

          <Text style={styles.emptySubText}>
            Add healthy and delicious
            meals to your cart
          </Text>

        </View>

      ) : (

        <>
          {/* CART ITEMS */}
          <ScrollView
            showsVerticalScrollIndicator={
              false
            }
            contentContainerStyle={{
              paddingBottom: 140,
            }}
          >

            {cartItems.map(
              (item, index) => (

                <View
                  key={
                    item.id || index
                  }
                  style={styles.card}
                >

                  {/* IMAGE */}
                  <Image
                    source={{
                      uri:
                        item.image ||
                        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
                    }}
                    style={styles.image}
                    resizeMode="cover"
                  />

                  {/* DETAILS */}
                  <View
                    style={
                      styles.content
                    }
                  >

                    <Text
                      style={
                        styles.food
                      }
                      numberOfLines={1}
                    >
                      {item.foodName ||
                        'Healthy Meal'}
                    </Text>

                    <Text
                      style={
                        styles.hotel
                      }
                      numberOfLines={1}
                    >
                      {item.hotel ||
                        'Restaurant'}
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

                  {/* DELETE BUTTON */}
                  <TouchableOpacity
                    style={
                      styles.deleteBtn
                    }
                    onPress={() =>
                      removeFromCart(
                        item.id
                      )
                    }
                  >
                    <Ionicons
                      name="trash-outline"
                      size={24}
                      color="#ff4d4d"
                    />
                  </TouchableOpacity>

                </View>
              )
            )}

          </ScrollView>

          {/* CHECKOUT SECTION */}
          <View
            style={
              styles.checkoutBox
            }
          >

            <View>
              <Text
                style={
                  styles.totalText
                }
              >
                Total Amount
              </Text>

              <Text
                style={
                  styles.totalPrice
                }
              >
                ₹{total}
              </Text>
            </View>

            <TouchableOpacity
             style={styles.checkoutBtn}
             onPress={() =>
             navigation.navigate('Checkout')
            }
            >
              <Text
                style={
                  styles.checkoutText
                }
              >
                Checkout
              </Text>
            </TouchableOpacity>

          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7F9',
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#222',
  },

  clearText: {
    color: '#ff4d4d',
    fontWeight: '700',
    fontSize: 14,
  },

  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
    marginTop: 20,
  },

  emptySubText: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 12,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  image: {
    width: 92,
    height: 92,
    borderRadius: 18,
  },

  content: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },

  food: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },

  hotel: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },

  price: {
    fontSize: 20,
    fontWeight: '800',
    color: '#16b39a',
    marginTop: 10,
  },

  deleteBtn: {
    padding: 8,
  },

  checkoutBox: {
    position: 'absolute',
    bottom: 15,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 18,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    elevation: 6,
  },

  totalText: {
    color: '#777',
    fontSize: 13,
  },

  totalPrice: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    marginTop: 5,
  },

  checkoutBtn: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 16,
  },

  checkoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

});