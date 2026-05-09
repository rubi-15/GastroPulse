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

import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

export default function HomeCookRegister() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [foodType, setFoodType] = useState('South Indian');

  const [documentName, setDocumentName] = useState('');
  const [startupProof, setStartupProof] = useState('');
  const [kitchenPhoto, setKitchenPhoto] = useState('');

  const [availableTime, setAvailableTime] = useState('');
  const [mealCapacity, setMealCapacity] = useState('');
  const [experience, setExperience] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [deliveryAvailable, setDeliveryAvailable] =
    useState('Yes');

  const [bankAccountName, setBankAccountName] =
    useState('');
  const [bankAccountNumber, setBankAccountNumber] =
    useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const [hygieneChecked, setHygieneChecked] =
    useState(false);

  // -----------------------------
  // ID Proof Upload
  // -----------------------------
  const pickDocument = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: '*/*',
          copyToCacheDirectory: true,
        });

      if (!result.canceled) {
        setDocumentName(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to upload ID proof'
      );
    }
  };

  // -----------------------------
  // StartupTN Proof Upload
  // -----------------------------
  const pickStartupProof = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: '*/*',
          copyToCacheDirectory: true,
        });

      if (!result.canceled) {
        setStartupProof(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to upload StartupTN proof'
      );
    }
  };

  // -----------------------------
  // Kitchen Photo Upload
  // -----------------------------
  const pickKitchenPhoto = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: 'image/*',
          copyToCacheDirectory: true,
        });

      if (!result.canceled) {
        setKitchenPhoto(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to upload kitchen photo'
      );
    }
  };

  // -----------------------------
  // Submit
  // -----------------------------
  const handleSubmit = () => {
    if (
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !availableTime ||
      !mealCapacity ||
      !experience ||
      !foodDescription ||
      !bankAccountName ||
      !bankAccountNumber ||
      !bankName ||
      !ifscCode
    ) {
      Alert.alert(
        'Validation',
        'Please fill all required fields'
      );
      return;
    }

    if (!hygieneChecked) {
      Alert.alert(
        'Confirmation Required',
        'Please confirm hygiene declaration'
      );
      return;
    }

    Alert.alert(
      'Success',
      'Home Cook Registration Successful'
    );

    console.log({
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
      documentName,
      startupProof,
      kitchenPhoto,
      bankAccountName,
      bankAccountNumber,
      bankName,
      ifscCode,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        

        <Text style={styles.headerTitle}>
          Home Cook Registration
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>

        <TextInput
          placeholder="Enter your full name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          placeholder="your@example.com"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Phone */}
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

        {/* Address */}
        <Text style={styles.label}>
          Kitchen Address
        </Text>

        <TextInput
          placeholder="Street, City, State, Zip Code"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        {/* Food Type */}
        <Text style={styles.label}>
          Food Type Specialization
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

        {/* Cooking Time */}
        <Text style={styles.label}>
          Cooking Available Time
        </Text>

        <TextInput
          placeholder="Example: 6 AM - 2 PM"
          style={styles.input}
          value={availableTime}
          onChangeText={setAvailableTime}
        />

        {/* Meal Capacity */}
        <Text style={styles.label}>
          Daily Meal Capacity
        </Text>

        <TextInput
          placeholder="Example: 50 meals/day"
          style={styles.input}
          value={mealCapacity}
          onChangeText={setMealCapacity}
        />

        {/* Experience */}
        <Text style={styles.label}>
          Cooking Experience
        </Text>

        <TextInput
          placeholder="Example: 5 Years"
          style={styles.input}
          value={experience}
          onChangeText={setExperience}
        />

        {/* Food Description */}
        <Text style={styles.label}>
          Special Food Description
        </Text>

        <TextInput
          placeholder="Describe your signature dishes"
          style={[
            styles.input,
            {
              height: 100,
              textAlignVertical: 'top',
              paddingTop: 15,
            },
          ]}
          multiline
          value={foodDescription}
          onChangeText={setFoodDescription}
        />

        {/* Delivery Availability */}
        <Text style={styles.label}>
          Delivery Available
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={deliveryAvailable}
            onValueChange={(itemValue) =>
              setDeliveryAvailable(itemValue)
            }
          >
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
        </View>

        {/* ID Proof */}
        <View style={styles.uploadCard}>
          <Text style={styles.uploadTitle}>
            Government ID Proof
          </Text>

          <Text style={styles.uploadDescription}>
            Upload Aadhaar, Driving License,
            Passport, or Voter ID for
            verification.
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

            <Text style={styles.uploadButtonText}>
              {documentName
                ? documentName
                : 'Upload ID Proof'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* StartupTN Proof */}
        <View style={styles.uploadCard}>
          <Text style={styles.uploadTitle}>
            StartupTN Registration Proof
          </Text>

          <Text style={styles.uploadDescription}>
            Upload StartupTN registration
            certificate or startup verification
            proof issued by Tamil Nadu Startup
            Portal.
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={pickStartupProof}
          >
            <Ionicons
              name="document-attach-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadButtonText}>
              {startupProof
                ? startupProof
                : 'Upload StartupTN Proof'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Kitchen Photo */}
        <View style={styles.uploadCard}>
          <Text style={styles.uploadTitle}>
            Kitchen Photo Proof
          </Text>

          <Text style={styles.uploadDescription}>
            Upload kitchen photos for hygiene
            and cooking quality verification.
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

            <Text style={styles.uploadButtonText}>
              {kitchenPhoto
                ? kitchenPhoto
                : 'Upload Kitchen Photo'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bank Details */}
        <Text style={styles.sectionTitle}>
          Bank Details
        </Text>

        <Text style={styles.label}>
          Bank Account Name
        </Text>

        <TextInput
          placeholder="John Doe"
          style={styles.input}
          value={bankAccountName}
          onChangeText={setBankAccountName}
        />

        <Text style={styles.label}>
          Bank Account Number
        </Text>

        <TextInput
          placeholder="1234567890"
          style={styles.input}
          keyboardType="numeric"
          value={bankAccountNumber}
          onChangeText={setBankAccountNumber}
        />

        <Text style={styles.label}>Bank Name</Text>

        <TextInput
          placeholder="Example Bank"
          style={styles.input}
          value={bankName}
          onChangeText={setBankName}
        />

        <Text style={styles.label}>IFSC Code</Text>

        <TextInput
          placeholder="SBIN0001234"
          style={styles.input}
          value={ifscCode}
          onChangeText={setIfscCode}
        />

        {/* Hygiene Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() =>
            setHygieneChecked(!hygieneChecked)
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
            I confirm that all food is prepared
            in a clean, hygienic, and safe
            cooking environment.
          </Text>
        </TouchableOpacity>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Your personal and banking
            information is securely encrypted
            and used only for verification and
            payment processing purposes.
          </Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            Submit & Login
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
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    color: '#222',
  },

  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 10,
    color: '#222',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 55,
    fontSize: 14,
    color: '#000',
  },

  pickerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 14,
    overflow: 'hidden',
  },

  uploadCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 16,
    padding: 15,
    marginTop: 20,
  },

  uploadTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },

  uploadDescription: {
    fontSize: 12,
    color: '#777',
    lineHeight: 18,
    marginBottom: 15,
  },

  uploadButton: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  uploadButtonText: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 13,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    gap: 10,
  },

  checkboxText: {
    flex: 1,
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },

  infoBox: {
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    padding: 14,
    marginTop: 20,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#666',
  },

  submitButton: {
    backgroundColor: '#16b39a',
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});