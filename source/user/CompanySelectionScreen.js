import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { useCart } from '../context/CartContext';

const companies = [
  {
    id: '1',
    name: 'Healthy Bowl Kitchen',
    rating: '4.8',
    amount: 240,
    delivery: '25 mins',
  },

  {
    id: '2',
    name: 'Fit Meal Hub',
    rating: '4.6',
    amount: 210,
    delivery: '30 mins',
  },

  {
    id: '3',
    name: 'Nutri Fresh',
    rating: '4.9',
    amount: 260,
    delivery: '20 mins',
  },
];

export default function CompanySelectionScreen({
  route,
  navigation,
}) {
  const { addToCart } = useCart();

  const food = route?.params?.food;

  /* ADD TO CART */
  const handleAddToCart = (
    restaurant
  ) => {
    addToCart({
      foodName:
        food?.name || 'Healthy Meal',

      image:
        food?.image ||
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',

      hotel: restaurant.name,

      /* IMPORTANT FIX */
      price: `₹${restaurant.amount}`,

      quantity: 1,
    });

    navigation.navigate('Cart');
  };

  /* RENDER ITEM */
  const renderCompany = ({
    item,
  }) => (
    <View style={styles.card}>
      {/* LEFT */}
      <View style={styles.leftSection}>
        <Image
          source={{
            uri:
              food?.image ||
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
          }}
          style={styles.foodImage}
        />

        <View style={styles.details}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.foodName}>
            {food?.name ||
              'Healthy Food'}
          </Text>

          <Text style={styles.info}>
            ⭐ {item.rating} •{' '}
            {item.delivery}
          </Text>

          <Text style={styles.price}>
            ₹{item.amount}
          </Text>
        </View>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          handleAddToCart(item)
        }
      >
        <Text style={styles.buttonText}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Select Restaurant
      </Text>

      <FlatList
        data={companies}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={renderCompany}
        showsVerticalScrollIndicator={
          false
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
    marginBottom: 20,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    elevation: 3,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    flex: 1,
  },

  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
  },

  details: {
    marginLeft: 14,
    justifyContent: 'center',
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  foodName: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },

  info: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#16b39a',
    marginTop: 6,
  },

  button: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});