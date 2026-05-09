import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

export default function HealthCentricSuggestionsScreen({
  route,
  navigation,
}) {
  const {
    mealTime,
    foodType,
  } = route.params;

  /* COMPLETE HEALTH FOOD DATABASE */
  const foods = [

    /* BREAKFAST */

    {
      id: '1',
      name: 'Protein Oats Bowl',
      meal: 'Breakfast',
      type: 'Vegetarian',
      calories: '300 kcal',
      protein: '20g',
      carbs: '38g',
      fats: '9g',
      image:
        'https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '2',
      name: 'Egg White Sandwich',
      meal: 'Breakfast',
      type: 'Non-Vegetarian',
      calories: '340 kcal',
      protein: '28g',
      carbs: '26g',
      fats: '10g',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '3',
      name: 'Avocado Toast',
      meal: 'Breakfast',
      type: 'Vegan',
      calories: '250 kcal',
      protein: '10g',
      carbs: '20g',
      fats: '12g',
      image:
        'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '4',
      name: 'Greek Yogurt Bowl',
      meal: 'Breakfast',
      type: 'Vegetarian',
      calories: '280 kcal',
      protein: '18g',
      carbs: '22g',
      fats: '8g',
      image:
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '5',
      name: 'Tofu Veg Wrap',
      meal: 'Breakfast',
      type: 'Vegan',
      calories: '310 kcal',
      protein: '16g',
      carbs: '30g',
      fats: '11g',
      image:
        'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1200&auto=format&fit=crop',
    },

    /* LUNCH */

    {
      id: '6',
      name: 'Lean Chicken & Veggies',
      meal: 'Lunch',
      type: 'Non-Vegetarian',
      calories: '320 kcal',
      protein: '40g',
      carbs: '15g',
      fats: '12g',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '7',
      name: 'Kidney-Friendly Stir Fry',
      meal: 'Lunch',
      type: 'Vegan',
      calories: '280 kcal',
      protein: '18g',
      carbs: '30g',
      fats: '10g',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '8',
      name: 'Paneer Protein Bowl',
      meal: 'Lunch',
      type: 'Vegetarian',
      calories: '410 kcal',
      protein: '30g',
      carbs: '35g',
      fats: '14g',
      image:
        'https://images.unsplash.com/photo-1604908176997-4315d3b0b0a2?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '9',
      name: 'Grilled Fish Meal',
      meal: 'Lunch',
      type: 'Non-Vegetarian',
      calories: '470 kcal',
      protein: '42g',
      carbs: '22g',
      fats: '20g',
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '10',
      name: 'Veg Burrito Bowl',
      meal: 'Lunch',
      type: 'Vegan',
      calories: '390 kcal',
      protein: '20g',
      carbs: '40g',
      fats: '13g',
      image:
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop',
    },

    /* DINNER */

    {
      id: '11',
      name: 'Hearty Salmon Salad',
      meal: 'Dinner',
      type: 'Non-Vegetarian',
      calories: '450 kcal',
      protein: '35g',
      carbs: '20g',
      fats: '25g',
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '12',
      name: 'Low Sodium Lentil Soup',
      meal: 'Dinner',
      type: 'Vegetarian',
      calories: '250 kcal',
      protein: '16g',
      carbs: '35g',
      fats: '6g',
      image:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '13',
      name: 'Brown Rice Veg Bowl',
      meal: 'Dinner',
      type: 'Vegan',
      calories: '340 kcal',
      protein: '16g',
      carbs: '42g',
      fats: '10g',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '14',
      name: 'Chicken Salad',
      meal: 'Dinner',
      type: 'Non-Vegetarian',
      calories: '350 kcal',
      protein: '38g',
      carbs: '18g',
      fats: '15g',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '15',
      name: 'Paneer Tikka Plate',
      meal: 'Dinner',
      type: 'Vegetarian',
      calories: '430 kcal',
      protein: '32g',
      carbs: '24g',
      fats: '22g',
      image:
        'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop',
    },

    /* SNACKS */

    {
      id: '16',
      name: 'Fruit Nut Mix',
      meal: 'Snacks',
      type: 'Vegan',
      calories: '210 kcal',
      protein: '8g',
      carbs: '20g',
      fats: '10g',
      image:
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '17',
      name: 'Protein Smoothie',
      meal: 'Snacks',
      type: 'Vegetarian',
      calories: '290 kcal',
      protein: '20g',
      carbs: '28g',
      fats: '11g',
      image:
        'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '18',
      name: 'Boiled Egg Snack',
      meal: 'Snacks',
      type: 'Non-Vegetarian',
      calories: '180 kcal',
      protein: '16g',
      carbs: '4g',
      fats: '9g',
      image:
        'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '19',
      name: 'Roasted Chickpeas',
      meal: 'Snacks',
      type: 'Vegan',
      calories: '230 kcal',
      protein: '14g',
      carbs: '26g',
      fats: '7g',
      image:
        'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: '20',
      name: 'Paneer Cubes',
      meal: 'Snacks',
      type: 'Vegetarian',
      calories: '270 kcal',
      protein: '22g',
      carbs: '8g',
      fats: '18g',
      image:
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  /* FILTER */
  const filteredFoods = foods.filter(
    (item) =>
      item.meal === mealTime &&
      item.type === foodType
  );

  const renderFood = ({ item }) => (
    <View style={styles.card}>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.name}>
        {item.name}
      </Text>

      <Text style={styles.serving}>
        1 serving
      </Text>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>
            Calories
          </Text>

          <Text style={styles.value}>
            {item.calories}
          </Text>
        </View>

        <View>
          <Text style={styles.label}>
            Protein
          </Text>

          <Text style={styles.value}>
            {item.protein}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>
            Carbs
          </Text>

          <Text style={styles.value}>
            {item.carbs}
          </Text>
        </View>

        <View>
          <Text style={styles.label}>
            Fats
          </Text>

          <Text style={styles.value}>
            {item.fats}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'HealthCompanySelection',
            {
              food: item,
            }
          )
        }
      >
        <Text style={styles.btnText}>
          Add to Cart
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderFood}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No meals available
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 12,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    flex: 1,
    margin: 8,
  },

  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    color: '#222',
  },

  serving: {
    color: '#666',
    marginTop: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  label: {
    fontSize: 12,
    color: '#666',
  },

  value: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  button: {
    backgroundColor: '#16b39a',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
  },

  empty: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 18,
    color: '#666',
  },

});