import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function NutritionalSuggestionsScreen({
  route,
  navigation,
}) {

  const {
    mealTime,
    foodType,
    activity,
    goal,
    caloriesLevel,
    healthCondition,
    allergies,
    waterLevel,
    sleepLevel,
  } = route.params;

  /* =========================================================
      COMPLETE SMART FOOD DATABASE
  ========================================================= */

  const foods = [

    /* ================= BREAKFAST ================= */

    {
      id: '1',
      name: 'Idli Sambar',
      type: 'Vegetarian',
      meal: 'Breakfast',
      activity: 'Moderate',
      goal: 'Weight Loss',
      caloriesLevel: 'Medium',
      healthCondition: 'Diabetes',
      allergies: 'None',
      waterLevel: 'Low',
      sleepLevel: 'Poor',
      calories: '260 kcal',
      protein: '10g',
      image:
        'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    },

    {
      id: '2',
      name: 'Oats Banana Bowl',
      type: 'Vegetarian',
      meal: 'Breakfast',
      activity: 'Low',
      goal: 'Weight Loss',
      caloriesLevel: 'Low',
      healthCondition: 'None',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Good',
      calories: '220 kcal',
      protein: '12g',
      image:
        'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    },

    {
      id: '3',
      name: 'Egg White Sandwich',
      type: 'Non-Vegetarian',
      meal: 'Breakfast',
      activity: 'High',
      goal: 'Muscle Gain',
      caloriesLevel: 'High',
      healthCondition: 'None',
      allergies: 'Gluten',
      waterLevel: 'High',
      sleepLevel: 'Excellent',
      calories: '390 kcal',
      protein: '28g',
      image:
        'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    },

    {
      id: '4',
      name: 'Avocado Toast',
      type: 'Vegan',
      meal: 'Breakfast',
      activity: 'Low',
      goal: 'Maintenance',
      caloriesLevel: 'Medium',
      healthCondition: 'Heart Care',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Good',
      calories: '280 kcal',
      protein: '11g',
      image:
        'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg',
    },

    {
      id: '5',
      name: 'Greek Yogurt Bowl',
      type: 'Vegetarian',
      meal: 'Breakfast',
      activity: 'Moderate',
      goal: 'Maintenance',
      caloriesLevel: 'Medium',
      healthCondition: 'PCOS',
      allergies: 'Milk',
      waterLevel: 'Medium',
      sleepLevel: 'Average',
      calories: '300 kcal',
      protein: '18g',
      image:
        'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
    },

    /* ================= BRUNCH ================= */

    {
      id: '6',
      name: 'Paneer Sandwich',
      type: 'Vegetarian',
      meal: 'Brunch',
      activity: 'Moderate',
      goal: 'Muscle Gain',
      caloriesLevel: 'High',
      healthCondition: 'None',
      allergies: 'Gluten',
      waterLevel: 'High',
      sleepLevel: 'Good',
      calories: '420 kcal',
      protein: '24g',
      image:
        'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg',
    },

    {
      id: '7',
      name: 'Chicken Wrap',
      type: 'Non-Vegetarian',
      meal: 'Brunch',
      activity: 'High',
      goal: 'Muscle Gain',
      caloriesLevel: 'High',
      healthCondition: 'None',
      allergies: 'None',
      waterLevel: 'High',
      sleepLevel: 'Excellent',
      calories: '500 kcal',
      protein: '35g',
      image:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
    },

    {
      id: '8',
      name: 'Fruit Pancakes',
      type: 'Vegetarian',
      meal: 'Brunch',
      activity: 'Low',
      goal: 'Weight Gain',
      caloriesLevel: 'High',
      healthCondition: 'None',
      allergies: 'Milk',
      waterLevel: 'Low',
      sleepLevel: 'Average',
      calories: '450 kcal',
      protein: '13g',
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    },

    {
      id: '9',
      name: 'Vegan Buddha Bowl',
      type: 'Vegan',
      meal: 'Brunch',
      activity: 'Moderate',
      goal: 'Weight Loss',
      caloriesLevel: 'Low',
      healthCondition: 'Heart Care',
      allergies: 'None',
      waterLevel: 'High',
      sleepLevel: 'Good',
      calories: '320 kcal',
      protein: '17g',
      image:
        'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    },

    /* ================= LUNCH ================= */

    {
      id: '10',
      name: 'Chicken Rice Bowl',
      type: 'Non-Vegetarian',
      meal: 'Lunch',
      activity: 'High',
      goal: 'Muscle Gain',
      caloriesLevel: 'High',
      healthCondition: 'None',
      allergies: 'None',
      waterLevel: 'High',
      sleepLevel: 'Excellent',
      calories: '540 kcal',
      protein: '42g',
      image:
        'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    },

    {
      id: '11',
      name: 'Quinoa Salad',
      type: 'Vegan',
      meal: 'Lunch',
      activity: 'Low',
      goal: 'Weight Loss',
      caloriesLevel: 'Low',
      healthCondition: 'Diabetes',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Good',
      calories: '300 kcal',
      protein: '18g',
      image:
        'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
    },

    {
      id: '12',
      name: 'Paneer Protein Bowl',
      type: 'Vegetarian',
      meal: 'Lunch',
      activity: 'High',
      goal: 'Muscle Gain',
      caloriesLevel: 'High',
      healthCondition: 'PCOS',
      allergies: 'Milk',
      waterLevel: 'High',
      sleepLevel: 'Excellent',
      calories: '470 kcal',
      protein: '32g',
      image:
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    },

    {
      id: '13',
      name: 'Veg Burrito Bowl',
      type: 'Vegan',
      meal: 'Lunch',
      activity: 'Moderate',
      goal: 'Maintenance',
      caloriesLevel: 'Medium',
      healthCondition: 'Heart Care',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Good',
      calories: '390 kcal',
      protein: '20g',
      image:
        'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    },

    {
      id: '14',
      name: 'South Indian Meals',
      type: 'Vegetarian',
      meal: 'Lunch',
      activity: 'Moderate',
      goal: 'Maintenance',
      caloriesLevel: 'Medium',
      healthCondition: 'None',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Average',
      calories: '510 kcal',
      protein: '19g',
      image:
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    },

    /* ================= DINNER ================= */

    {
      id: '15',
      name: 'Grilled Salmon',
      type: 'Non-Vegetarian',
      meal: 'Dinner',
      activity: 'High',
      goal: 'Muscle Gain',
      caloriesLevel: 'High',
      healthCondition: 'Heart Care',
      allergies: 'Seafood',
      waterLevel: 'High',
      sleepLevel: 'Excellent',
      calories: '410 kcal',
      protein: '45g',
      image:
        'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg',
    },

    {
      id: '16',
      name: 'Veg Soup Bowl',
      type: 'Vegan',
      meal: 'Dinner',
      activity: 'Low',
      goal: 'Weight Loss',
      caloriesLevel: 'Low',
      healthCondition: 'Diabetes',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Poor',
      calories: '240 kcal',
      protein: '12g',
      image:
        'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    },

    {
      id: '17',
      name: 'Paneer Tikka Plate',
      type: 'Vegetarian',
      meal: 'Dinner',
      activity: 'Moderate',
      goal: 'Maintenance',
      caloriesLevel: 'Medium',
      healthCondition: 'PCOS',
      allergies: 'Milk',
      waterLevel: 'Medium',
      sleepLevel: 'Good',
      calories: '420 kcal',
      protein: '30g',
      image:
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    },

    {
      id: '18',
      name: 'Chicken Salad',
      type: 'Non-Vegetarian',
      meal: 'Dinner',
      activity: 'Low',
      goal: 'Weight Loss',
      caloriesLevel: 'Low',
      healthCondition: 'Heart Care',
      allergies: 'None',
      waterLevel: 'High',
      sleepLevel: 'Good',
      calories: '320 kcal',
      protein: '35g',
      image:
        'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    },

    {
      id: '19',
      name: 'Brown Rice Veg Bowl',
      type: 'Vegan',
      meal: 'Dinner',
      activity: 'Moderate',
      goal: 'Maintenance',
      caloriesLevel: 'Medium',
      healthCondition: 'None',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Average',
      calories: '350 kcal',
      protein: '16g',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    },

    /* ================= SNACKS ================= */

    {
      id: '20',
      name: 'Protein Smoothie',
      type: 'Vegetarian',
      meal: 'Snacks',
      activity: 'High',
      goal: 'Muscle Gain',
      caloriesLevel: 'High',
      healthCondition: 'None',
      allergies: 'Milk',
      waterLevel: 'High',
      sleepLevel: 'Excellent',
      calories: '310 kcal',
      protein: '22g',
      image:
        'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg',
    },

    {
      id: '21',
      name: 'Fruit Nut Mix',
      type: 'Vegan',
      meal: 'Snacks',
      activity: 'Low',
      goal: 'Maintenance',
      caloriesLevel: 'Medium',
      healthCondition: 'Heart Care',
      allergies: 'Nuts',
      waterLevel: 'Low',
      sleepLevel: 'Average',
      calories: '220 kcal',
      protein: '8g',
      image:
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    },

    {
      id: '22',
      name: 'Roasted Chickpeas',
      type: 'Vegan',
      meal: 'Snacks',
      activity: 'Moderate',
      goal: 'Weight Loss',
      caloriesLevel: 'Low',
      healthCondition: 'Diabetes',
      allergies: 'None',
      waterLevel: 'Medium',
      sleepLevel: 'Good',
      calories: '230 kcal',
      protein: '14g',
      image:
        'https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg',
    },
    {
  id: '23',
  name: 'Masala Dosa',
  type: 'Vegetarian',
  meal: 'Breakfast',
  activity: 'Moderate',
  goal: 'Maintenance',
  caloriesLevel: 'Medium',
  healthCondition: 'None',
  allergies: 'None',
  waterLevel: 'Medium',
  sleepLevel: 'Average',
  calories: '340 kcal',
  protein: '9g',
  image:
    'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
},

{
  id: '24',
  name: 'Peanut Butter Toast',
  type: 'Vegan',
  meal: 'Breakfast',
  activity: 'High',
  goal: 'Weight Gain',
  caloriesLevel: 'High',
  healthCondition: 'None',
  allergies: 'Nuts',
  waterLevel: 'High',
  sleepLevel: 'Good',
  calories: '410 kcal',
  protein: '15g',
  image:
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
},

{
  id: '25',
  name: 'Sprouts Salad',
  type: 'Vegan',
  meal: 'Brunch',
  activity: 'Low',
  goal: 'Weight Loss',
  caloriesLevel: 'Low',
  healthCondition: 'Diabetes',
  allergies: 'None',
  waterLevel: 'Medium',
  sleepLevel: 'Good',
  calories: '210 kcal',
  protein: '16g',
  image:
    'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
},

{
  id: '26',
  name: 'Veg Fried Rice',
  type: 'Vegetarian',
  meal: 'Lunch',
  activity: 'Moderate',
  goal: 'Maintenance',
  caloriesLevel: 'Medium',
  healthCondition: 'None',
  allergies: 'None',
  waterLevel: 'Medium',
  sleepLevel: 'Average',
  calories: '430 kcal',
  protein: '14g',
  image:
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
},

{
  id: '27',
  name: 'Dal Rice Combo',
  type: 'Vegetarian',
  meal: 'Lunch',
  activity: 'Moderate',
  goal: 'Weight Loss',
  caloriesLevel: 'Medium',
  healthCondition: 'Heart Care',
  allergies: 'None',
  waterLevel: 'High',
  sleepLevel: 'Good',
  calories: '390 kcal',
  protein: '18g',
  image:
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
},

{
  id: '28',
  name: 'Grilled Chicken',
  type: 'Non-Vegetarian',
  meal: 'Dinner',
  activity: 'High',
  goal: 'Muscle Gain',
  caloriesLevel: 'High',
  healthCondition: 'None',
  allergies: 'None',
  waterLevel: 'High',
  sleepLevel: 'Excellent',
  calories: '520 kcal',
  protein: '48g',
  image:
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
},

{
  id: '29',
  name: 'Ragi Porridge',
  type: 'Vegan',
  meal: 'Breakfast',
  activity: 'Low',
  goal: 'Weight Loss',
  caloriesLevel: 'Low',
  healthCondition: 'Diabetes',
  allergies: 'None',
  waterLevel: 'Medium',
  sleepLevel: 'Poor',
  calories: '180 kcal',
  protein: '8g',
  image:
    'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
},

{
  id: '30',
  name: 'Mixed Fruit Bowl',
  type: 'Vegan',
  meal: 'Snacks',
  activity: 'Low',
  goal: 'Maintenance',
  caloriesLevel: 'Low',
  healthCondition: 'Heart Care',
  allergies: 'None',
  waterLevel: 'High',
  sleepLevel: 'Good',
  calories: '170 kcal',
  protein: '5g',
  image:
    'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
},

  ];

  /* =========================================================
      SMART FILTER SYSTEM
  ========================================================= */
const filteredFoods = foods.filter((item) => {

  /* REQUIRED */

  const mealMatch =
    item.meal === mealTime;

  const typeMatch =
    item.type === foodType;

  /* SMART SCORING */

  let score = 0;

  if (
    item.activity === activity
  ) {
    score++;
  }

  if (
    item.goal === goal
  ) {
    score++;
  }

  if (
    caloriesLevel &&
    item.caloriesLevel === caloriesLevel
  ) {
    score++;
  }

  if (
    healthCondition &&
    (
      item.healthCondition ===
        healthCondition ||
      item.healthCondition === 'None'
    )
  ) {
    score++;
  }

  if (
    waterLevel &&
    item.waterLevel === waterLevel
  ) {
    score++;
  }

  if (
    sleepLevel &&
    item.sleepLevel === sleepLevel
  ) {
    score++;
  }

  /* ALLERGY CHECK */

  const allergySafe =
    !allergies ||
    allergies === 'None' ||
    item.allergies !== allergies;

  /* FINAL RETURN */

  return (
    mealMatch &&
    typeMatch &&
    allergySafe &&
    score >= 1
  );

});

/* FALLBACK */

const finalFoods =
  filteredFoods.length > 0
    ? filteredFoods
    : foods.filter(
        (item) =>
          item.meal === mealTime &&
          item.type === foodType
      );
  /* =========================================================
      FOOD CARD
  ========================================================= */

  const renderFood = ({ item }) => (

    <View style={styles.card}>

      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>

        <Text style={styles.foodName}>
          {item.name}
        </Text>

        <View style={styles.row}>

          <Text style={styles.info}>
            🔥 {item.calories}
          </Text>

          <Text style={styles.info}>
            💪 {item.protein}
          </Text>

        </View>

        <Text style={styles.type}>
          {item.type}
        </Text>

        <Text style={styles.smallText}>
          Activity: {item.activity}
        </Text>

        <Text style={styles.smallText}>
          Goal: {item.goal}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              'CompanySelection',
              {
                food: item,
              }
            )
          }
        >

          <Text style={styles.buttonText}>
            Add to Cart
          </Text>

        </TouchableOpacity>

      </View>

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
              size={26}
              color="#222"
            />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Smart Meal Suggestions
          </Text>

        </View>

        {/* USER DETAILS */}

        <View style={styles.goalCard}>

          <Text style={styles.goalTitle}>
            Personalized Suggestions
          </Text>

          <Text style={styles.goalText}>
            {mealTime} • {foodType}
          </Text>

          <Text style={styles.goalSub}>
            Activity: {activity}
          </Text>

          <Text style={styles.goalSub}>
            Goal: {goal}
          </Text>

          <Text style={styles.goalSub}>
            Calories: {caloriesLevel}
          </Text>

          <Text style={styles.goalSub}>
            Health: {healthCondition}
          </Text>

          <Text style={styles.goalSub}>
            Water Intake: {waterLevel}
          </Text>

          <Text style={styles.goalSub}>
            Sleep: {sleepLevel}
          </Text>

        </View>

        {/* FOOD LIST */}

        <FlatList
          data={finalFoods}
          keyExtractor={(item) =>
            item.id
          }
          renderItem={renderFood}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          ListEmptyComponent={

            <View style={styles.emptyBox}>

              <Text style={styles.emptyText}>
               Showing best available meals for your preferences.
              </Text>

            </View>

          }
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
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 16,
    color: '#222',
  },

  goalCard: {
    backgroundColor: '#16b39a',
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,
  },

  goalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  goalText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
  },

  goalSub: {
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 24,
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 220,
  },

  content: {
    padding: 18,
  },

  foodName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  info: {
    color: '#666',
    fontSize: 14,
  },

  type: {
    marginTop: 10,
    color: '#16b39a',
    fontWeight: '700',
  },

  smallText: {
    marginTop: 4,
    color: '#666',
    fontSize: 13,
  },

  button: {
    backgroundColor: '#16b39a',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

  emptyBox: {
    alignItems: 'center',
    marginTop: 80,
  },

  emptyText: {
    color: '#777',
    fontSize: 16,
  },

});