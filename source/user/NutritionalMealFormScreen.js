import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function NutritionalMealFormScreen({
  navigation,
}) {
  const [mealTime, setMealTime] =
    useState('');

  const [foodType, setFoodType] =
    useState('');

  const [activity, setActivity] =
    useState('');

  const [goal, setGoal] =
    useState('');

  const [healthCondition, setHealthCondition] =
    useState('');

  const [allergy, setAllergy] =
    useState('');

  const [waterIntake, setWaterIntake] =
    useState('');

  const [sleepHours, setSleepHours] =
    useState('');

  const [weightGoal, setWeightGoal] =
    useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={
          false
        }
      >
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
            Nutritional Meals
          </Text>
        </View>

        {/* TITLE */}
        <Text style={styles.title}>
          Personalized Meal Planner
        </Text>

        <Text style={styles.subtitle}>
          Answer a few questions to get
          healthy meal suggestions based
          on your lifestyle and goals.
        </Text>

        {/* MEAL TIME */}
        <Text style={styles.label}>
          Preferred Meal Timing
        </Text>

        <View style={styles.row}>
          {[
            'Breakfast',
            'Brunch',
            'Lunch',
            'Snacks',
            'Dinner',
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                mealTime === item &&
                  styles.active,
              ]}
              onPress={() =>
                setMealTime(item)
              }
            >
              <Text
                style={[
                  styles.optionText,
                  mealTime === item &&
                    styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* FOOD TYPE */}
        <Text style={styles.label}>
          Food Preference
        </Text>

        <View style={styles.row}>
          {[
            'Vegetarian',
            'Vegan',
            'Non-Vegetarian',
            'High Protein',
            'Low Carb',
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                foodType === item &&
                  styles.active,
              ]}
              onPress={() =>
                setFoodType(item)
              }
            >
              <Text
                style={[
                  styles.optionText,
                  foodType === item &&
                    styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ACTIVITY */}
        <Text style={styles.label}>
          Daily Activity Level
        </Text>

        <TextInput
          placeholder="Low / Moderate / High"
          placeholderTextColor="#999"
          style={styles.input}
          value={activity}
          onChangeText={setActivity}
        />

        {/* GOAL */}
        <Text style={styles.label}>
          Daily Calorie Goal
        </Text>

        <TextInput
          placeholder="Example: 2000 kcal"
          placeholderTextColor="#999"
          style={styles.input}
          value={goal}
          onChangeText={setGoal}
        />

        {/* HEALTH CONDITION */}
        <Text style={styles.label}>
          Health Condition
        </Text>

        <TextInput
          placeholder="Diabetes, BP, Thyroid, etc."
          placeholderTextColor="#999"
          style={styles.input}
          value={healthCondition}
          onChangeText={
            setHealthCondition
          }
        />

        {/* ALLERGIES */}
        <Text style={styles.label}>
          Food Allergies
        </Text>

        <TextInput
          placeholder="Nuts, Dairy, Gluten..."
          placeholderTextColor="#999"
          style={styles.input}
          value={allergy}
          onChangeText={setAllergy}
        />

        {/* WATER */}
        <Text style={styles.label}>
          Daily Water Intake
        </Text>

        <TextInput
          placeholder="Example: 3 Litres"
          placeholderTextColor="#999"
          style={styles.input}
          value={waterIntake}
          onChangeText={
            setWaterIntake
          }
        />

        {/* SLEEP */}
        <Text style={styles.label}>
          Average Sleep Hours
        </Text>

        <TextInput
          placeholder="Example: 7 Hours"
          placeholderTextColor="#999"
          style={styles.input}
          value={sleepHours}
          onChangeText={
            setSleepHours
          }
        />

        {/* WEIGHT GOAL */}
        <Text style={styles.label}>
          Fitness Goal
        </Text>

        <View style={styles.row}>
          {[
            'Weight Loss',
            'Weight Gain',
            'Muscle Building',
            'Maintain Fitness',
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                weightGoal === item &&
                  styles.active,
              ]}
              onPress={() =>
                setWeightGoal(item)
              }
            >
              <Text
                style={[
                  styles.optionText,
                  weightGoal === item &&
                    styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              'NutritionalSuggestions',
              {
                mealTime,
                foodType,
                activity,
                goal,
                healthCondition,
                allergy,
                waterIntake,
                sleepHours,
                weightGoal,
              }
            )
          }
        >
          <Text style={styles.buttonText}>
            Show Meal Suggestions
          </Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    color: '#222',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
    marginTop: 12,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },

  option: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginRight: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },

  active: {
    backgroundColor: '#16b39a',
    borderColor: '#16b39a',
  },

  optionText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 13,
  },

  activeText: {
    color: '#fff',
  },

  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 14,
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    fontSize: 14,
    color: '#222',
  },

  button: {
    backgroundColor: '#16b39a',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});