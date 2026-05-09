// ======================================================
// FILE: source/user/UserHomeScreen.js
// ======================================================

import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useCart } from '../context/CartContext';

export default function UserHomeScreen({
  navigation,
}) {

  const { cartItems } = useCart();

  return (

    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <View style={styles.logoBox}>

            <Image
              source={require('../../assets/logo.jpeg')}
              style={styles.logoImage}
              resizeMode="contain"
            />

          </View>

          <View style={styles.headerRight}>

            <TouchableOpacity>

              <Ionicons
                name="notifications-outline"
                size={24}
                color="#222"
              />

            </TouchableOpacity>

            {/* PROFILE IMAGE CLICK */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  'Profile'
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

        </View>

        {/* SECTION */}
        <Text style={styles.sectionTitle}>
          Suggested Meals
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
        >

          {/* MEAL CARD */}
          <View style={styles.mealCard}>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
              }}
              style={styles.mealImage}
            />

            <View style={styles.mealContent}>

              <Text style={styles.mealTitle}>
                Mediterranean Quinoa Bowl
              </Text>

              <Text style={styles.mealDesc}>
                Wholesome quinoa,
                crisp vegetables and
                healthy fats.
              </Text>

              <View style={styles.mealBottom}>

                <Text style={styles.kcal}>
                  450 kcal
                </Text>

                <TouchableOpacity
                  style={styles.addBtn}
                >

                  <Text style={styles.addText}>
                    Add
                  </Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

          {/* SECOND CARD */}
          <View style={styles.mealCard}>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
              }}
              style={styles.mealImage}
            />

            <View style={styles.mealContent}>

              <Text style={styles.mealTitle}>
                Baked Salmon
              </Text>

              <Text style={styles.mealDesc}>
                Omega rich healthy meal
                with balanced nutrition.
              </Text>

              <View style={styles.mealBottom}>

                <Text style={styles.kcal}>
                  380 kcal
                </Text>

                <TouchableOpacity
                  style={styles.addBtn}
                >

                  <Text style={styles.addText}>
                    Add
                  </Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

        </ScrollView>

        {/* ACTIVE ORDER */}
        <Text style={styles.sectionTitle}>
          Your Active Order
        </Text>

        <View style={styles.orderCard}>

          <View style={styles.orderTop}>

            <Text style={styles.orderId}>
              Order #NP10293
            </Text>

            <View style={styles.badge}>

              <Text style={styles.badgeText}>
                Preparing
              </Text>

            </View>

          </View>

          <Text style={styles.delivery}>
            Estimated Delivery:
            30 mins
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                'Cart'
              )
            }
          >

            <Text style={styles.track}>
              Track Order →
            </Text>

          </TouchableOpacity>

        </View>

        {/* EXPLORE */}
        <Text style={styles.sectionTitle}>
          Explore Meals
        </Text>

        {/* CASUAL */}
        <TouchableOpacity
          style={styles.exploreCard}
          onPress={() =>
            navigation.navigate(
              'CasualCravings'
            )
          }
        >

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
            }}
            style={styles.exploreImage}
          />

          <View style={styles.overlay}>

            <Text style={styles.exploreTitle}>
              Casual Cravings
            </Text>

            <Text style={styles.exploreDesc}>
              Indulge in your favorites
              without the fuss.
            </Text>

          </View>

        </TouchableOpacity>

        {/* NUTRITION */}
        <TouchableOpacity
          style={styles.exploreCard}
          onPress={() =>
            navigation.navigate(
              'NutritionalMealForm'
            )
          }
        >

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
            }}
            style={styles.exploreImage}
          />

          <View style={styles.overlay}>

            <Text style={styles.exploreTitle}>
              Nutritional Meals
            </Text>

            <Text style={styles.exploreDesc}>
              Personalized meal
              suggestions for your
              health goals.
            </Text>

          </View>

        </TouchableOpacity>

        {/* HEALTH */}
        <TouchableOpacity
          style={styles.exploreCard}
          onPress={() =>
            navigation.navigate(
              'HealthCentricMealForm'
            )
          }
        >

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200',
            }}
            style={styles.exploreImage}
          />

          <View style={styles.overlay}>

            <Text style={styles.exploreTitle}>
              Health Centric
            </Text>

            <Text style={styles.exploreDesc}>
              Condition specific meals
              carefully curated.
            </Text>

          </View>

        </TouchableOpacity>

        <View style={{ height: 120 }} />

      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomTab}>

        {/* HOME */}
        <TouchableOpacity
          style={styles.tabItem}
        >

          <Ionicons
            name="home"
            size={24}
            color="#16b39a"
          />

          <Text style={styles.activeTab}>
            Home
          </Text>

        </TouchableOpacity>

        {/* CART */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate('Cart')
          }
        >

          <View>

            <Ionicons
              name="cart-outline"
              size={24}
              color="#888"
            />

            {cartItems.length > 0 && (

              <View style={styles.cartBadge}>

                <Text
                  style={
                    styles.cartBadgeText
                  }
                >
                  {cartItems.length}
                </Text>

              </View>

            )}

          </View>

          <Text style={styles.inactiveTab}>
            Cart
          </Text>

        </TouchableOpacity>

        {/* PROFILE */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() =>
            navigation.navigate(
              'Profile'
            )
          }
        >

          <Ionicons
            name="person-outline"
            size={24}
            color="#888"
          />

          <Text style={styles.inactiveTab}>
            Profile
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  logoBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E4F8F3',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  logoImage: {
    width: 34,
    height: 34,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profile: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginLeft: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginTop: 10,
    marginBottom: 15,
  },

  mealCard: {
    width: 270,
    backgroundColor: '#fff',
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ECECEC',
  },

  mealImage: {
    width: '100%',
    height: 120,
  },

  mealContent: {
    padding: 14,
  },

  mealTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  mealDesc: {
    fontSize: 12,
    color: '#777',
    lineHeight: 17,
    marginTop: 5,
  },

  mealBottom: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  kcal: {
    color: '#16b39a',
    fontWeight: '700',
  },

  addBtn: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 10,
  },

  addText: {
    color: '#fff',
    fontWeight: '700',
  },

  orderCard: {
    backgroundColor: '#16b39a',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },

  orderTop: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  orderId: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  badge: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: '#16b39a',
    fontSize: 12,
    fontWeight: '700',
  },

  delivery: {
    color: '#EFFFFB',
    marginTop: 12,
    marginBottom: 15,
  },

  track: {
    color: '#fff',
    fontWeight: '700',
  },

  exploreCard: {
    height: 140,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 18,
  },

  exploreImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor:
      'rgba(0,0,0,0.35)',
  },

  exploreTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  exploreDesc: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },

  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
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
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },

  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -10,
    backgroundColor: '#ff3b30',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },

});