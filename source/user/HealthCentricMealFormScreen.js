import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

export default function HealthCentricMealFormScreen({
  navigation,
}) {

  const [age, setAge] = useState('');
  const [weight, setWeight] =
    useState('');
  const [notes, setNotes] =
    useState('');

  const [mealTime, setMealTime] =
    useState('');

  const [foodType, setFoodType] =
    useState('');

  const [conditions, setConditions] =
    useState([]);

  /* HEALTH CONDITIONS */

  const conditionList = [
    'Diabetes',
    'High Blood Pressure',
    'Heart Disease',
    'Kidney Issues',
    'Thyroid Disorder',
    'Food Allergies',
    'Digestive Issues',
    'Other',
  ];

  /* TOGGLE CONDITION */

  const toggleCondition = (
    condition
  ) => {

    if (
      conditions.includes(condition)
    ) {

      setConditions(
        conditions.filter(
          (item) =>
            item !== condition
        )
      );

    } else {

      setConditions([
        ...conditions,
        condition,
      ]);

    }
  };

  /* SUBMIT */

  const handleSubmit = () => {

    /* VALIDATION */

    if (!mealTime) {

      Alert.alert(
        'Meal Timing Required',
        'Please select meal timing'
      );

      return;
    }

    if (!foodType) {

      Alert.alert(
        'Food Preference Required',
        'Please select food preference'
      );

      return;
    }

    navigation.navigate(
      'HealthCentricSuggestions',
      {
        age,
        weight,
        notes,
        mealTime,
        foodType,
        conditions,
      }
    );
  };

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
            Health Centric Meals
          </Text>

        </View>

        {/* BASIC DETAILS */}

        <Text style={styles.sectionTitle}>
          Basic Patient Details
        </Text>

        <Text style={styles.desc}>
          Provide your age and weight
          to help us tailor meal
          recommendations.
        </Text>

        {/* AGE */}

        <Text style={styles.label}>
          Age
        </Text>

        <TextInput
          placeholder="e.g. 30"
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        {/* WEIGHT */}

        <Text style={styles.label}>
          Weight (kg)
        </Text>

        <TextInput
          placeholder="e.g. 70"
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        {/* MEAL TIME */}

        <Text style={styles.sectionTitle}>
          Meal Timing
        </Text>

        <View style={styles.optionRow}>

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
                styles.optionBtn,

                mealTime === item &&
                  styles.activeBtn,
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

        <Text style={styles.sectionTitle}>
          Food Preference
        </Text>

        <View style={styles.optionRow}>

          {[
            'Vegan',
            'Vegetarian',
            'Non-Vegetarian',
          ].map((item) => (

            <TouchableOpacity
              key={item}
              style={[
                styles.optionBtn,

                foodType === item &&
                  styles.activeBtn,
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

        {/* CONDITIONS */}

        <Text style={styles.sectionTitle}>
          Health Conditions
        </Text>

        <Text style={styles.desc}>
          Select any conditions that
          apply to you for specialized
          meal plans.
        </Text>

        <View
          style={
            styles.checkboxContainer
          }
        >

          {conditionList.map(
            (condition) => (

              <TouchableOpacity
                key={condition}
                style={
                  styles.checkboxRow
                }
                onPress={() =>
                  toggleCondition(
                    condition
                  )
                }
              >

                <View
                  style={[
                    styles.checkbox,

                    conditions.includes(
                      condition
                    ) &&
                      styles.checkedBox,
                  ]}
                />

                <Text
                  style={
                    styles.checkboxText
                  }
                >
                  {condition}
                </Text>

              </TouchableOpacity>

            )
          )}
        </View>

        {/* NOTES */}

        <Text style={styles.sectionTitle}>
          Doctor's Notes
        </Text>

        <Text style={styles.desc}>
          Enter dietary notes or
          recommendations from your
          doctor.
        </Text>

        <TextInput
          placeholder="e.g. Low sodium, high fiber..."
          multiline
          numberOfLines={5}
          style={styles.notesInput}
          value={notes}
          onChangeText={setNotes}
        />

        {/* BUTTON */}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >

          <Text style={styles.buttonText}>
            Get Condition-Based Meals
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
    backgroundColor: '#F5F5F5',
  },

  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 15,
    color: '#222',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
    marginTop: 10,
  },

  desc: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 18,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#222',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 18,
  },

  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },

  optionBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  activeBtn: {
    backgroundColor: '#16b39a',
    borderColor: '#16b39a',
  },

  optionText: {
    color: '#222',
    fontWeight: '600',
  },

  activeText: {
    color: '#fff',
  },

  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:
      'space-between',
  },

  checkboxRow: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    marginRight: 10,
  },

  checkedBox: {
    backgroundColor: '#16b39a',
    borderColor: '#16b39a',
  },

  checkboxText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },

  notesInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#16b39a',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 30,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

});