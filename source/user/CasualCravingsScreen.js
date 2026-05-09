// FILE: source/user/CasualCravingsScreen.js

import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CartContext } from '../context/CartContext';

export default function CasualCravingsScreen({
  navigation,
}) {
  const { addToCart } =
    useContext(CartContext);

  const [selectedFilter, setSelectedFilter] =
    useState('Recommended');

  const [searchText, setSearchText] =
    useState('');

  const [selectedMeal, setSelectedMeal] =
    useState(null);

  const [modalVisible, setModalVisible] =
    useState(false);

  const filters = [
    'Recommended',
    'Healthy Bowls',
    'Soups',
    'Salads',
    'Low Carb',
    'High Protein',
    'Vegan',
    'Breakfast',
  ];

  const meals = [
    {
      id: 1,
      title: 'Grilled Salmon with Asparagus',
      kcal: '450 Cal',
      category: 'High Protein',
      image:
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200',

      companies: [
        {
          name: 'Healthy Home Kitchen',
          rating: '4.8',
          price: '₹450',
        },
        {
          name: 'Fit Food House',
          rating: '4.6',
          price: '₹480',
        },
      ],
    },

    {
      id: 2,
      title: 'Spicy Chicken Ramen Bowl',
      kcal: '580 Cal',
      category: 'Recommended',
      image:
        'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1200',

      companies: [
        {
          name: 'Tokyo Noodles',
          rating: '4.9',
          price: '₹320',
        },
        {
          name: 'Asian Bowl Point',
          rating: '4.5',
          price: '₹350',
        },
      ],
    },

    {
      id: 3,
      title: 'Vegetarian Lentil Soup',
      kcal: '320 Cal',
      category: 'Soups',
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200',

      companies: [
        {
          name: 'Healthy Spoon Cafe',
          rating: '4.7',
          price: '₹220',
        },
        {
          name: 'Nutri Meals',
          rating: '4.5',
          price: '₹240',
        },
      ],
    },

    {
      id: 4,
      title: 'Classic Caesar Salad',
      kcal: '380 Cal',
      category: 'Salads',
      image:
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200',

      companies: [
        {
          name: 'Fresh Greens Kitchen',
          rating: '4.8',
          price: '₹280',
        },
        {
          name: 'Green Leaf Foods',
          rating: '4.4',
          price: '₹300',
        },
      ],
    },

    {
      id: 5,
      title: 'Avocado Power Bowl',
      kcal: '300 Cal',
      category: 'Healthy Bowls',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200',

      companies: [
        {
          name: 'Fit Meal House',
          rating: '4.9',
          price: '₹310',
        },
        {
          name: 'Bowl Hub',
          rating: '4.5',
          price: '₹330',
        },
      ],
    },

    {
      id: 6,
      title: 'Vegan Buddha Bowl',
      kcal: '280 Cal',
      category: 'Vegan',
      image:
        'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1200',

      companies: [
        {
          name: 'Vegan Planet',
          rating: '4.8',
          price: '₹340',
        },
        {
          name: 'Nature Foods',
          rating: '4.6',
          price: '₹360',
        },
      ],
    },

    {
      id: 7,
      title: 'Oats Banana Pancakes',
      kcal: '260 Cal',
      category: 'Breakfast',
      image:
        'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200',

      companies: [
        {
          name: 'Morning Fresh Cafe',
          rating: '4.7',
          price: '₹190',
        },
        {
          name: 'Breakfast Club',
          rating: '4.5',
          price: '₹210',
        },
      ],
    },
  ];

  const filteredMeals = meals.filter(
    meal =>
      (selectedFilter === 'Recommended' ||
        meal.category ===
          selectedFilter) &&
      meal.title
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
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

          <Text style={styles.headerTitle}>
            Casual Cravings
          </Text>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() =>
              navigation.navigate(
                'Cart'
              )
            }
          >
            <Ionicons
              name="cart-outline"
              size={22}
              color="#222"
            />
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={18}
            color="#999"
          />

          <TextInput
            placeholder="Search for meals..."
            placeholderTextColor="#999"
            style={styles.input}
            value={searchText}
            onChangeText={
              setSearchText
            }
          />
        </View>

        {/* FILTERS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          style={styles.filterScroll}
        >
          {filters.map(
            (item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.filterBtn,
                  selectedFilter ===
                    item &&
                    styles.activeFilter,
                ]}
                onPress={() =>
                  setSelectedFilter(
                    item
                  )
                }
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedFilter ===
                      item &&
                      styles.activeFilterText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>

        {/* FOOD LIST */}
        {filteredMeals.map(meal => (
          <View
            key={meal.id}
            style={styles.foodCard}
          >
            <View
              style={styles.kcalBadge}
            >
              <Text
                style={styles.kcalText}
              >
                {meal.kcal}
              </Text>
            </View>

            <Image
              source={{
                uri: meal.image,
              }}
              style={styles.foodImage}
            />

            <View
              style={styles.foodContent}
            >
              <Text
                style={styles.foodTitle}
              >
                {meal.title}
              </Text>

              <Text
                style={styles.hotelName}
              >
                Multiple Home Cook
                Options
              </Text>

              <View
                style={styles.bottomRow}
              >
                <Text
                  style={styles.price}
                >
                  {
                    meal.companies[0]
                      .price
                  }
                </Text>

                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() => {
                    setSelectedMeal(
                      meal
                    );

                    setModalVisible(
                      true
                    );
                  }}
                >
                  <Ionicons
                    name="add"
                    size={16}
                    color="#fff"
                  />

                  <Text
                    style={
                      styles.addText
                    }
                  >
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View
          style={{ height: 40 }}
        />
      </ScrollView>

      {/* COMPANY MODAL */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
      >
        <View
          style={
            styles.modalContainer
          }
        >
          <View
            style={
              styles.modalContent
            }
          >
            <View
              style={
                styles.modalHeader
              }
            >
              <Text
                style={
                  styles.modalTitle
                }
              >
                Choose Home Cook
              </Text>

              <TouchableOpacity
                onPress={() =>
                  setModalVisible(
                    false
                  )
                }
              >
                <Ionicons
                  name="close"
                  size={24}
                  color="#222"
                />
              </TouchableOpacity>
            </View>

            {selectedMeal?.companies.map(
              (
                company,
                index
              ) => (
                <View
                  key={index}
                  style={
                    styles.companyCard
                  }
                >
                  <View>
                    <Text
                      style={
                        styles.companyName
                      }
                    >
                      {company.name}
                    </Text>

                    <Text
                      style={
                        styles.reviewText
                      }
                    >
                      ⭐{' '}
                      {
                        company.rating
                      }{' '}
                      Rating
                    </Text>

                    <Text
                      style={
                        styles.companyPrice
                      }
                    >
                      {
                        company.price
                      }
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={
                      styles.companyBtn
                    }
                    onPress={() => {
                      addToCart({
                        id:
                          Date.now(),
                        foodName:
                          selectedMeal.title,
                        hotel:
                          company.name,
                        price:
                          company.price,
                        image:
                          selectedMeal.image,
                        quantity: 1,
                      });

                      setModalVisible(
                        false
                      );

                      navigation.navigate(
                        'Cart'
                      );
                    }}
                  >
                    <Text
                      style={
                        styles.companyBtnText
                      }
                    >
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            )}
          </View>
        </View>
      </Modal>
    </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    marginBottom: 18,
  },

  input: {
    marginLeft: 10,
    flex: 1,
    color: '#222',
    fontSize: 14,
  },

  filterScroll: {
    marginBottom: 18,
  },

  filterBtn: {
    backgroundColor: '#EAEAEA',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  activeFilter: {
    backgroundColor: '#16b39a',
  },

  filterText: {
    color: '#555',
    fontWeight: '600',
    fontSize: 13,
  },

  activeFilterText: {
    color: '#fff',
  },

  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 18,
    overflow: 'hidden',
    position: 'relative',
  },

  foodImage: {
    width: '100%',
    height: 180,
  },

  kcalBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  kcalText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#16b39a',
  },

  foodContent: {
    padding: 14,
  },

  foodTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  hotelName: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },

  bottomRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  price: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 18,
  },

  addBtn: {
    backgroundColor: '#16b39a',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 4,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:
      'rgba(0,0,0,0.4)',
  },

  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    maxHeight: '70%',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  companyCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  companyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  reviewText: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },

  companyPrice: {
    color: '#16b39a',
    fontWeight: '700',
    marginTop: 5,
    fontSize: 16,
  },

  companyBtn: {
    backgroundColor: '#16b39a',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },

  companyBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
});