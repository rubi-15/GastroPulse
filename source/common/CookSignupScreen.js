// ======================================================
// FILE: source/cook/HomeCookRegister.js
// FULLY UPDATED REAL-TIME VERSION
// ======================================================

import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Picker } from '@react-native-picker/picker';

import * as DocumentPicker from 'expo-document-picker';

import { Ionicons } from '@expo/vector-icons';

export default function HomeCookRegister({
  navigation,
}) {

  // ======================================================
  // LOGIN DETAILS
  // ======================================================

  const [username, setUsername] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [confirmPassword, setConfirmPassword] =
    useState('');

  // ======================================================
  // BASIC DETAILS
  // ======================================================

  const [fullName, setFullName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [phone, setPhone] =
    useState('');

  const [address, setAddress] =
    useState('');

  const [foodType, setFoodType] =
    useState('South Indian');

  // ======================================================
  // FILES
  // ======================================================

  const [documentName, setDocumentName] =
    useState('');

  const [startupProof, setStartupProof] =
    useState('');

  const [kitchenPhoto, setKitchenPhoto] =
    useState('');

  // ======================================================
  // COOK DETAILS
  // ======================================================

  const [availableTime, setAvailableTime] =
    useState('');

  const [mealCapacity, setMealCapacity] =
    useState('');

  const [experience, setExperience] =
    useState('');

  const [foodDescription, setFoodDescription] =
    useState('');

  const [
    deliveryAvailable,
    setDeliveryAvailable,
  ] = useState('Yes');

  // ======================================================
  // BANK DETAILS
  // ======================================================

  const [
    bankAccountName,
    setBankAccountName,
  ] = useState('');

  const [
    bankAccountNumber,
    setBankAccountNumber,
  ] = useState('');

  const [bankName, setBankName] =
    useState('');

  const [ifscCode, setIfscCode] =
    useState('');

  // ======================================================
  // HYGIENE
  // ======================================================

  const [
    hygieneChecked,
    setHygieneChecked,
  ] = useState(false);

  // ======================================================
  // PICK DOCUMENT
  // ======================================================

  const pickDocument = async () => {

    const result =
      await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

    if (!result.canceled) {

      setDocumentName(
        result.assets[0].name
      );

    }
  };

  // ======================================================
  // PICK STARTUP PROOF
  // ======================================================

  const pickStartupProof = async () => {

    const result =
      await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

    if (!result.canceled) {

      setStartupProof(
        result.assets[0].name
      );

    }
  };

  // ======================================================
  // PICK KITCHEN PHOTO
  // ======================================================

  const pickKitchenPhoto = async () => {

    const result =
      await DocumentPicker.getDocumentAsync({
        type: 'image/*',
      });

    if (!result.canceled) {

      setKitchenPhoto(
        result.assets[0].name
      );

    }
  };

  // ======================================================
  // SUBMIT
  // ======================================================

  const handleSubmit = async () => {

    // VALIDATION

    if (
      !username ||
      !password ||
      !confirmPassword ||
      !fullName ||
      !email ||
      !phone ||
      !address
    ) {

      Alert.alert(
        'Validation Error',
        'Please fill all required fields'
      );

      return;
    }

    if (password !== confirmPassword) {

      Alert.alert(
        'Password Error',
        'Passwords do not match'
      );

      return;
    }

    if (!hygieneChecked) {

      Alert.alert(
        'Declaration Required',
        'Please accept hygiene declaration'
      );

      return;
    }

    // ======================================================
    // SAVE USER DATA GLOBALLY
    // ======================================================

    const cookData = {
      username,
      password,
      fullName,
      email,
      phone,
      address,
      foodType,
      availableTime,
      mealCapacity,
      experience,
      foodDescription,
      deliveryAvailable,
      bankAccountName,
      bankAccountNumber,
      bankName,
      ifscCode,
      documentName,
      startupProof,
      kitchenPhoto,
      role: 'cook',
    };

    try {

      // SAVE FULL COOK DATA

      await AsyncStorage.setItem(
        'cookData',
        JSON.stringify(cookData)
      );

      // SAVE CURRENT USER

      await AsyncStorage.setItem(
        'currentUser',
        JSON.stringify(cookData)
      );

      Alert.alert(
        'Registration Successful',
        `Welcome Chef ${fullName}`,
        [
          {
            text: 'Continue',

            onPress: () =>

              navigation.replace(
                'CookHome'
              ),
          },
        ]
      );

    } catch (error) {

      Alert.alert(
        'Error',
        'Something went wrong'
      );

    }
  };

  // ======================================================
  // UI
  // ======================================================

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}

      <View style={styles.headerContainer}>

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
          Home Cook Registration
        </Text>

      </View>

      {/* FORM */}

      <View style={styles.formContainer}>

        {/* LOGIN DETAILS */}

        <Text style={styles.sectionTitle}>
          Login Credentials
        </Text>

        <Text style={styles.label}>
          Username
        </Text>

        <TextInput
          placeholder="Enter username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>
          Confirm Password
        </Text>

        <TextInput
          placeholder="Confirm password"
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
          onChangeText={
            setConfirmPassword
          }
        />

        {/* PERSONAL DETAILS */}

        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          placeholder="Enter full name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>
          Email Address
        </Text>

        <TextInput
          placeholder="example@gmail.com"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>
          Phone Number
        </Text>

        <TextInput
          placeholder="+91 9876543210"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>
          Kitchen Address
        </Text>

        <TextInput
          placeholder="Street, Area, City"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        {/* FOOD TYPE */}

        <Text style={styles.label}>
          Food Specialization
        </Text>

        <View style={styles.pickerContainer}>

          <Picker
            selectedValue={foodType}
            onValueChange={(itemValue) =>
              setFoodType(itemValue)
            }
          >

            <Picker.Item
              label="South Indian"
              value="South Indian"
            />

            <Picker.Item
              label="North Indian"
              value="North Indian"
            />

            <Picker.Item
              label="Chinese"
              value="Chinese"
            />

            <Picker.Item
              label="Arabic"
              value="Arabic"
            />

            <Picker.Item
              label="Italian"
              value="Italian"
            />

            <Picker.Item
              label="Healthy Diet Food"
              value="Healthy Diet Food"
            />

          </Picker>

        </View>

        {/* AVAILABLE TIME */}

        <Text style={styles.label}>
          Available Cooking Time
        </Text>

        <TextInput
          placeholder="6 AM - 2 PM"
          style={styles.input}
          value={availableTime}
          onChangeText={setAvailableTime}
        />

        {/* MEAL CAPACITY */}

        <Text style={styles.label}>
          Daily Meal Capacity
        </Text>

        <TextInput
          placeholder="50 meals/day"
          style={styles.input}
          value={mealCapacity}
          onChangeText={setMealCapacity}
        />

        {/* EXPERIENCE */}

        <Text style={styles.label}>
          Cooking Experience
        </Text>

        <TextInput
          placeholder="5 Years"
          style={styles.input}
          value={experience}
          onChangeText={setExperience}
        />

        {/* DESCRIPTION */}

        <Text style={styles.label}>
          Signature Dishes
        </Text>

        <TextInput
          placeholder="Describe your dishes"
          multiline
          value={foodDescription}
          onChangeText={
            setFoodDescription
          }
          style={[
            styles.input,
            styles.textArea,
          ]}
        />

        {/* DELIVERY */}

        <Text style={styles.label}>
          Delivery Available
        </Text>

        <View style={styles.pickerContainer}>

          <Picker
            selectedValue={
              deliveryAvailable
            }
            onValueChange={(itemValue) =>
              setDeliveryAvailable(
                itemValue
              )
            }
          >

            <Picker.Item
              label="Yes"
              value="Yes"
            />

            <Picker.Item
              label="No"
              value="No"
            />

          </Picker>

        </View>

        {/* ID PROOF */}

        <View style={styles.uploadCard}>

          <Text style={styles.uploadTitle}>
            Government ID Proof
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={pickDocument}
          >

            <Ionicons
              name="cloud-upload-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {documentName ||
                'Upload ID Proof'}
            </Text>

          </TouchableOpacity>

        </View>

        {/* STARTUP */}

        <View style={styles.uploadCard}>

          <Text style={styles.uploadTitle}>
            StartupTN Proof
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={pickStartupProof}
          >

            <Ionicons
              name="document-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {startupProof ||
                'Upload Startup Proof'}
            </Text>

          </TouchableOpacity>

        </View>

        {/* KITCHEN PHOTO */}

        <View style={styles.uploadCard}>

          <Text style={styles.uploadTitle}>
            Kitchen Photo
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={pickKitchenPhoto}
          >

            <Ionicons
              name="camera-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {kitchenPhoto ||
                'Upload Kitchen Photo'}
            </Text>

          </TouchableOpacity>

        </View>

        {/* BANK DETAILS */}

        <Text style={styles.sectionTitle}>
          Bank Details
        </Text>

        <TextInput
          placeholder="Account Holder Name"
          style={styles.input}
          value={bankAccountName}
          onChangeText={
            setBankAccountName
          }
        />

        <TextInput
          placeholder="Account Number"
          style={styles.input}
          keyboardType="numeric"
          value={bankAccountNumber}
          onChangeText={
            setBankAccountNumber
          }
        />

        <TextInput
          placeholder="Bank Name"
          style={styles.input}
          value={bankName}
          onChangeText={setBankName}
        />

        <TextInput
          placeholder="IFSC Code"
          style={styles.input}
          value={ifscCode}
          onChangeText={setIfscCode}
        />

        {/* HYGIENE */}

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() =>
            setHygieneChecked(
              !hygieneChecked
            )
          }
        >

          <Ionicons
            name={
              hygieneChecked
                ? 'checkbox'
                : 'square-outline'
            }
            size={22}
            color="#16b39a"
          />

          <Text style={styles.checkboxText}>
            I confirm all meals are prepared
            hygienically and safely.
          </Text>

        </TouchableOpacity>

        {/* SUBMIT */}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >

          <Text style={styles.submitText}>
            Register & Continue
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 15,
    color: '#222',
  },

  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
    marginTop: 25,
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    paddingHorizontal: 15,
    height: 55,
    fontSize: 14,
    color: '#000',
    marginBottom: 14,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },

  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    overflow: 'hidden',
    marginBottom: 10,
  },

  uploadCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },

  uploadTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },

  uploadButton: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingVertical: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadText: {
    marginLeft: 10,
    color: '#16b39a',
    fontWeight: '700',
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 22,
    alignItems: 'flex-start',
  },

  checkboxText: {
    flex: 1,
    marginLeft: 10,
    color: '#555',
    fontSize: 13,
    lineHeight: 20,
  },

  submitButton: {
    backgroundColor: '#16b39a',
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

});
