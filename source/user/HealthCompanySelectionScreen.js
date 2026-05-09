import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

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

  {
    id: '4',
    name: 'Fresh Diet Meals',
    rating: '4.7',
    amount: 280,
    delivery: '18 mins',
  },

  {
    id: '5',
    name: 'Protein Kitchen',
    rating: '4.9',
    amount: 320,
    delivery: '22 mins',
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
    const cartItem = {
      id: Date.now().toString(),

      foodName:
        food?.name || 'Healthy Meal',

      image:
        food?.image ||
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',

      hotel: restaurant.name,

      rating: restaurant.rating,

      delivery: restaurant.delivery,

      price: restaurant.amount,

      quantity: 1,

      status: 'Preparing',
    };

    addToCart(cartItem);

    navigation.navigate('Cart');
  };

  /* COMPANY CARD */
  const renderCompany = ({
    item,
  }) => (
    <View style={styles.card}>
      {/* LEFT SECTION */}
      <View style={styles.leftSection}>
        <Image
          source={{
            uri:
              food?.image ||
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',
          }}
          style={styles.foodImage}
        />

        <View style={styles.details}>
          <Text style={styles.companyName}>
            {item.name}
          </Text>

          <Text style={styles.foodName}>
            {food?.name ||
              'Healthy Meal'}
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

      {/* ADD BUTTON */}
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
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
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
            Select Restaurant
          </Text>
        </View>

        {/* LIST */}
        <FlatList
          data={companies}
          keyExtractor={(item) =>
            item.id
          }
          renderItem={renderCompany}
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            paddingBottom: 30,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F7F9',
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginLeft: 15,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 14,
    marginBottom: 18,
    elevation: 4,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    flex: 1,
  },

  foodImage: {
    width: 85,
    height: 85,
    borderRadius: 16,
    backgroundColor: '#eee',
  },

  details: {
    marginLeft: 14,
    justifyContent: 'center',
    flex: 1,
  },

  companyName: {
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
    fontSize: 16,
    fontWeight: '700',
    color: '#16b39a',
    marginTop: 7,
  },

  button: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginLeft: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});