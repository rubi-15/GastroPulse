// ======================================================
// FILE: source/cook/CookMenuScreen.js
// ======================================================

import React, {
  useState,
  useMemo,
  useEffect,
} from 'react';

import {
  View,
 Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  Switch,
  Alert,
  Modal,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';

export default function CookMenuScreen({
  navigation,
  route,
}) {

  // ======================================================
  // COOK NAME
  // ======================================================

  const [cookName, setCookName] =
    useState('Home Chef');

  useEffect(() => {
    loadCookData();
  }, []);

  const loadCookData = async () => {

    try {

      const routeCookName =
        route?.params?.cookName;

      if (
        routeCookName &&
        routeCookName.trim() !== ''
      ) {

        setCookName(routeCookName);

        await AsyncStorage.setItem(
          'cookName',
          routeCookName
        );

        return;
      }

      const storedName =
        await AsyncStorage.getItem(
          'cookName'
        );

      if (
        storedName &&
        storedName.trim() !== ''
      ) {

        setCookName(storedName);

      }

    } catch (error) {

      console.log(error);

    }

  };

  // ======================================================
  // SEARCH
  // ======================================================

  const [search, setSearch] =
    useState('');

  // ======================================================
  // CATEGORY
  // ======================================================

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState('All');

  const categories = [
    'All',
    'Main Course',
    'Healthy',
    'Veg',
    'Protein',
  ];

  // ======================================================
  // MODAL
  // ======================================================

  const [modalVisible, setModalVisible] =
    useState(false);

  // ======================================================
  // EDIT MODE
  // ======================================================

  const [isEditing, setIsEditing] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  // ======================================================
  // FORM STATES
  // ======================================================

  const [dishName, setDishName] =
    useState('');

  const [dishCategory, setDishCategory] =
    useState('');

  const [dishPrice, setDishPrice] =
    useState('');

  const [dishImage, setDishImage] =
    useState('');

  // ======================================================
  // MENU ITEMS
  // ======================================================

  const [menuItems, setMenuItems] =
    useState([
      {
        id: '1',
        name: 'Chicken Biryani',
        category: 'Main Course',
        price: 220,
        rating: 4.8,
        orders: 145,
        available: true,
        image:
          'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200',
      },

      {
        id: '2',
        name: 'Healthy Salad Bowl',
        category: 'Healthy',
        price: 180,
        rating: 4.6,
        orders: 89,
        available: true,
        image:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',
      },

      {
        id: '3',
        name: 'Paneer Butter Masala',
        category: 'Veg',
        price: 200,
        rating: 4.7,
        orders: 120,
        available: false,
        image:
          'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200',
      },
    ]);

  // ======================================================
  // FILTER
  // ======================================================

  const filteredItems = useMemo(() => {

    return menuItems.filter((item) => {

      const matchesSearch =
        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : item.category ===
            selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

  }, [
    search,
    selectedCategory,
    menuItems,
  ]);

  // ======================================================
  // TOGGLE AVAILABILITY
  // ======================================================

  const toggleAvailability = (id) => {

    const updated =
      menuItems.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            available:
              !item.available,
          };

        }

        return item;

      });

    setMenuItems(updated);

  };

  // ======================================================
  // DELETE
  // ======================================================

  const deleteItem = (id) => {

    Alert.alert(
      'Delete Dish',
      'Are you sure you want to delete this dish?',
      [
        {
          text: 'Cancel',
        },

        {
          text: 'Delete',

          onPress: () => {

            const updated =
              menuItems.filter(
                (item) =>
                  item.id !== id
              );

            setMenuItems(updated);

          },
        },
      ]
    );

  };

  // ======================================================
  // OPEN ADD MODAL
  // ======================================================

  const openAddModal = () => {

    setIsEditing(false);

    setDishName('');
    setDishCategory('');
    setDishPrice('');
    setDishImage('');

    setModalVisible(true);

  };

  // ======================================================
  // EDIT DISH
  // ======================================================

  const editDish = (item) => {

    setIsEditing(true);

    setEditingId(item.id);

    setDishName(item.name);

    setDishCategory(item.category);

    setDishPrice(
      item.price.toString()
    );

    setDishImage(item.image);

    setModalVisible(true);

  };

  // ======================================================
  // SAVE DISH
  // ======================================================

  const saveDish = () => {

    if (
      !dishName ||
      !dishCategory ||
      !dishPrice
    ) {

      Alert.alert(
        'Validation',
        'Please fill all fields'
      );

      return;

    }

    // ======================================================
    // EDIT EXISTING
    // ======================================================

    if (isEditing) {

      const updatedItems =
        menuItems.map((item) => {

          if (
            item.id === editingId
          ) {

            return {

              ...item,

              name: dishName,

              category:
                dishCategory,

              price:
                Number(
                  dishPrice
                ),

              image:
                dishImage ||
                item.image,

            };

          }

          return item;

        });

      setMenuItems(updatedItems);

      Alert.alert(
        'Updated',
        'Dish Updated Successfully'
      );

    }

    // ======================================================
    // ADD NEW
    // ======================================================

    else {

      const newDish = {

        id: Date.now().toString(),

        name: dishName,

        category: dishCategory,

        price: Number(dishPrice),

        rating: 5.0,

        orders: 0,

        available: true,

        image:
          dishImage ||
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',
      };

      setMenuItems([
        newDish,
        ...menuItems,
      ]);

      Alert.alert(
        'Success',
        'Dish Added Successfully'
      );

    }

    setDishName('');
    setDishCategory('');
    setDishPrice('');
    setDishImage('');

    setModalVisible(false);

  };

  // ======================================================
  // STATS
  // ======================================================

  const totalItems =
    menuItems.length;

  const availableItems =
    menuItems.filter(
      (item) => item.available
    ).length;

  const totalOrders =
    menuItems.reduce(
      (sum, item) =>
        sum + item.orders,
      0
    );

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
            Welcome Back 👋
          </Text>

          <Text style={styles.name}>
            Chef {cookName}
          </Text>

        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'CookProfile',
              {
                cookName,
              }
            )
          }
        >

          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/men/32.jpg',
            }}
            style={styles.profile}
          />

        </TouchableOpacity>

      </View>

      {/* SEARCH */}

      <View style={styles.searchBox}>

        <Ionicons
          name="search"
          size={20}
          color="#777"
        />

        <TextInput
          placeholder="Search dishes..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />

      </View>

      {/* STATS */}

      <View style={styles.statsRow}>

        <View style={styles.statCard}>

          <Text style={styles.statNumber}>
            {totalItems}
          </Text>

          <Text style={styles.statLabel}>
            Total
          </Text>

        </View>

        <View style={styles.statCard}>

          <Text style={styles.statNumber}>
            {availableItems}
          </Text>

          <Text style={styles.statLabel}>
            Available
          </Text>

        </View>

        <View style={styles.statCard}>

          <Text style={styles.statNumber}>
            {totalOrders}
          </Text>

          <Text style={styles.statLabel}>
            Orders
          </Text>

        </View>

      </View>

      {/* CATEGORY */}

      <View style={styles.categoryWrapper}>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
        >

          {categories.map((item) => (

            <TouchableOpacity
              key={item}
              style={[
                styles.categoryBtn,

                selectedCategory ===
                  item &&
                  styles.activeCategory,
              ]}
              onPress={() =>
                setSelectedCategory(
                  item
                )
              }
            >

              <Text
                style={[
                  styles.categoryText,

                  selectedCategory ===
                    item &&
                    styles.activeCategoryText,
                ]}
              >
                {item}
              </Text>

            </TouchableOpacity>

          ))}

        </ScrollView>

      </View>

      {/* ADD BUTTON */}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={openAddModal}
      >

        <Ionicons
          name="add"
          size={22}
          color="#fff"
        />

        <Text style={styles.addBtnText}>
          Add New Dish
        </Text>

      </TouchableOpacity>

      {/* MENU LIST */}

      <FlatList
        data={filteredItems}
        keyExtractor={(item) =>
          item.id
        }
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        renderItem={({ item }) => (

          <View style={styles.menuCard}>

            <Image
              source={{
                uri: item.image,
              }}
              style={styles.foodImage}
            />

            <View style={styles.cardContent}>

              <View
                style={
                  styles.rowBetween
                }
              >

                <Text
                  numberOfLines={1}
                  style={
                    styles.foodName
                  }
                >
                  {item.name}
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    deleteItem(
                      item.id
                    )
                  }
                >

                  <Ionicons
                    name="trash-outline"
                    size={22}
                    color="#ff4d4d"
                  />

                </TouchableOpacity>

              </View>

              <Text style={styles.category}>
                {item.category}
              </Text>

              <Text style={styles.price}>
                ₹{item.price}
              </Text>

              <View
                style={
                  styles.ratingRow
                }
              >

                <Ionicons
                  name="star"
                  size={15}
                  color="#FFC107"
                />

                <Text
                  style={
                    styles.rating
                  }
                >
                  {item.rating}
                </Text>

                <Text
                  style={
                    styles.orders
                  }
                >
                  {item.orders} orders
                </Text>

              </View>

              <View
                style={
                  styles.actionRow
                }
              >

                {/* EDIT */}

                <TouchableOpacity
                  style={
                    styles.editBtn
                  }
                  onPress={() =>
                    editDish(item)
                  }
                >

                  <Ionicons
                    name="create-outline"
                    size={18}
                    color="#16b39a"
                  />

                  <Text
                    style={
                      styles.editText
                    }
                  >
                    Edit
                  </Text>

                </TouchableOpacity>

                {/* SWITCH */}

                <View
                  style={
                    styles.switchRow
                  }
                >

                  <Text
                    style={
                      styles.switchLabel
                    }
                  >
                    {item.available
                      ? 'Available'
                      : 'Unavailable'}
                  </Text>

                  <Switch
                    value={
                      item.available
                    }
                    onValueChange={() =>
                      toggleAvailability(
                        item.id
                      )
                    }
                    trackColor={{
                      false: '#ccc',
                      true: '#16b39a',
                    }}
                  />

                </View>

              </View>

            </View>

          </View>

        )}
      />

      {/* ======================================================
          BOTTOM NAVIGATION
      ====================================================== */}

      <View style={styles.bottomBar}>

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

        <TouchableOpacity
          style={styles.bottomItem}
        >

          <Ionicons
            name="restaurant"
            size={24}
            color="#16b39a"
          />

          <Text
            style={
              styles.activeBottomText
            }
          >
            Menu
          </Text>

        </TouchableOpacity>

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

      {/* MODAL */}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>
              {isEditing
                ? 'Edit Dish'
                : 'Add New Dish'}
            </Text>

            <TextInput
              placeholder="Dish Name"
              style={styles.modalInput}
              value={dishName}
              onChangeText={setDishName}
            />

            <TextInput
              placeholder="Category"
              style={styles.modalInput}
              value={dishCategory}
              onChangeText={
                setDishCategory
              }
            />

            <TextInput
              placeholder="Price"
              style={styles.modalInput}
              keyboardType="numeric"
              value={dishPrice}
              onChangeText={setDishPrice}
            />

            <TextInput
              placeholder="Image URL"
              style={styles.modalInput}
              value={dishImage}
              onChangeText={setDishImage}
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={saveDish}
            >

              <Text style={styles.saveBtnText}>
                {isEditing
                  ? 'Update Dish'
                  : 'Save Dish'}
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setModalVisible(false)
              }
            >

              <Text style={styles.cancelText}>
                Cancel
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

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

  profile: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  searchBox: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 58,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginTop: 18,
  },

  statCard: {
    backgroundColor: '#fff',
    width: '31%',
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#16b39a',
  },

  statLabel: {
    marginTop: 5,
    color: '#666',
    fontSize: 13,
  },

  categoryWrapper: {
    marginTop: 18,
    minHeight: 60,
  },

  categoryBtn: {
    backgroundColor: '#fff',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRadius: 22,
    marginRight: 12,
    minWidth: 90,
  },

  activeCategory: {
    backgroundColor: '#16b39a',
  },

  categoryText: {
    fontWeight: '600',
    color: '#555',
    fontSize: 13,
  },

  activeCategoryText: {
    color: '#fff',
  },

  addBtn: {
    backgroundColor: '#16b39a',
    marginTop: 8,
    height: 58,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 8,
  },

  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 15,
    flexDirection: 'row',
    marginTop: 18,
  },

  foodImage: {
    width: 110,
    height: 110,
    borderRadius: 18,
  },

  cardContent: {
    flex: 1,
    marginLeft: 15,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  foodName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    flex: 1,
    marginRight: 10,
  },

  category: {
    marginTop: 5,
    color: '#777',
    fontSize: 15,
  },

  price: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '700',
    color: '#16b39a',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  rating: {
    marginLeft: 5,
    fontWeight: '700',
  },

  orders: {
    marginLeft: 10,
    color: '#777',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  editText: {
    marginLeft: 5,
    color: '#16b39a',
    fontWeight: '700',
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  switchLabel: {
    marginRight: 10,
    fontWeight: '600',
    color: '#444',
    fontSize: 12,
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

  modalOverlay: {
    flex: 1,
    backgroundColor:
      'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
  },

  modalInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
  },

  saveBtn: {
    backgroundColor: '#16b39a',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  saveBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  cancelText: {
    textAlign: 'center',
    marginTop: 18,
    color: '#777',
    fontWeight: '600',
  },

});