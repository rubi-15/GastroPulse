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

export default function DeliveryPartnerRegister() {
  // -----------------------------------
  // Personal Details
  // -----------------------------------
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // -----------------------------------
  // Vehicle Details
  // -----------------------------------
  const [vehicleType, setVehicleType] =
    useState('Bike');

  const [vehicleNumber, setVehicleNumber] =
    useState('');

  const [deliveryTime, setDeliveryTime] =
    useState('');

  const [experience, setExperience] =
    useState('');

  const [deliveryArea, setDeliveryArea] =
    useState('');

  const [availableDays, setAvailableDays] =
    useState('');

  // -----------------------------------
  // Documents
  // -----------------------------------
  const [licenseProof, setLicenseProof] =
    useState('');

  const [idProof, setIdProof] = useState('');

  const [vehicleProof, setVehicleProof] =
    useState('');

  const [vehicleImage, setVehicleImage] =
    useState('');

  const [startupProof, setStartupProof] =
    useState('');

  // -----------------------------------
  // Extra
  // -----------------------------------
  const [helmetChecked, setHelmetChecked] =
    useState(false);

  const [termsAccepted, setTermsAccepted] =
    useState(false);

  // -----------------------------------
  // Upload Functions
  // -----------------------------------

  const uploadLicense = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: '*/*',
          copyToCacheDirectory: true,
        });

      if (!result.canceled) {
        setLicenseProof(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to upload license'
      );
    }
  };

  const uploadIdProof = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: '*/*',
          copyToCacheDirectory: true,
        });

      if (!result.canceled) {
        setIdProof(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to upload ID proof'
      );
    }
  };

  const uploadVehicleProof = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: '*/*',
          copyToCacheDirectory: true,
        });

      if (!result.canceled) {
        setVehicleProof(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to upload RC proof'
      );
    }
  };

  const uploadVehicleImage = async () => {
    try {
      const result =
        await DocumentPicker.getDocumentAsync({
          type: 'image/*',
          copyToCacheDirectory: true,
        });

      if (!result.canceled) {
        setVehicleImage(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to upload vehicle image'
      );
    }
  };

  const uploadStartupProof = async () => {
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

  // -----------------------------------
  // Submit
  // -----------------------------------
  const handleSubmit = () => {
    if (
      !fullName ||
      !phone ||
      !email ||
      !address ||
      !vehicleNumber ||
      !deliveryTime ||
      !experience ||
      !deliveryArea ||
      !availableDays
    ) {
      Alert.alert(
        'Validation',
        'Please fill all required fields'
      );
      return;
    }

    if (!helmetChecked || !termsAccepted) {
      Alert.alert(
        'Confirmation Required',
        'Please accept all declarations'
      );
      return;
    }

    Alert.alert(
      'Success',
      'Delivery Partner Registered Successfully'
    );

    console.log({
      fullName,
      phone,
      email,
      address,
      vehicleType,
      vehicleNumber,
      deliveryTime,
      experience,
      deliveryArea,
      availableDays,
      licenseProof,
      idProof,
      vehicleProof,
      vehicleImage,
      startupProof,
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
          Delivery Partner Registration
        </Text>
      </View>

      <View style={styles.formContainer}>
        {/* Personal Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Personal Details
          </Text>

          <Text style={styles.label}>Name</Text>

          <TextInput
            placeholder="John Doe"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
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

          <Text style={styles.label}>Email</Text>

          <TextInput
            placeholder="your@email.com"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Address</Text>

          <TextInput
            placeholder="Street, City, Area"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Vehicle Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Vehicle Information
          </Text>

          <Text style={styles.label}>
            Vehicle Type
          </Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={vehicleType}
              onValueChange={(itemValue) =>
                setVehicleType(itemValue)
              }
            >
              <Picker.Item
                label="Bike"
                value="Bike"
              />

              <Picker.Item
                label="Scooter"
                value="Scooter"
              />

              <Picker.Item
                label="Bicycle"
                value="Bicycle"
              />

              <Picker.Item
                label="Electric Vehicle"
                value="Electric Vehicle"
              />
            </Picker>
          </View>

          <Text style={styles.label}>
            Vehicle Number
          </Text>

          <TextInput
            placeholder="TN 01 AB 1234"
            style={styles.input}
            value={vehicleNumber}
            onChangeText={setVehicleNumber}
          />

          <Text style={styles.label}>
            Available Delivery Time
          </Text>

          <TextInput
            placeholder="Example: 9 AM - 10 PM"
            style={styles.input}
            value={deliveryTime}
            onChangeText={setDeliveryTime}
          />

          <Text style={styles.label}>
            Delivery Experience
          </Text>

          <TextInput
            placeholder="Example: 2 Years"
            style={styles.input}
            value={experience}
            onChangeText={setExperience}
          />

          <Text style={styles.label}>
            Preferred Delivery Area
          </Text>

          <TextInput
            placeholder="Anna Nagar, Tambaram..."
            style={styles.input}
            value={deliveryArea}
            onChangeText={setDeliveryArea}
          />

          <Text style={styles.label}>
            Available Working Days
          </Text>

          <TextInput
            placeholder="Monday - Saturday"
            style={styles.input}
            value={availableDays}
            onChangeText={setAvailableDays}
          />
        </View>

        {/* Document Uploads */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Document Uploads
          </Text>

          {/* License Upload */}
          <Text style={styles.label}>
            Driving License Upload
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={uploadLicense}
          >
            <Ionicons
              name="cloud-upload-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {licenseProof
                ? licenseProof
                : 'Upload License'}
            </Text>
          </TouchableOpacity>

          {/* ID Upload */}
          <Text style={styles.label}>
            Government ID Proof
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={uploadIdProof}
          >
            <Ionicons
              name="document-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {idProof
                ? idProof
                : 'Upload ID Proof'}
            </Text>
          </TouchableOpacity>

          {/* RC Upload */}
          <Text style={styles.label}>
            Vehicle Registration Proof
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={uploadVehicleProof}
          >
            <Ionicons
              name="car-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {vehicleProof
                ? vehicleProof
                : 'Upload RC Book'}
            </Text>
          </TouchableOpacity>

          {/* Vehicle Image */}
          <Text style={styles.label}>
            Vehicle Image Upload
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={uploadVehicleImage}
          >
            <Ionicons
              name="camera-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {vehicleImage
                ? vehicleImage
                : 'Upload Vehicle Image'}
            </Text>
          </TouchableOpacity>

          {/* StartupTN */}
          <Text style={styles.label}>
            StartupTN Proof
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={uploadStartupProof}
          >
            <Ionicons
              name="business-outline"
              size={20}
              color="#16b39a"
            />

            <Text style={styles.uploadText}>
              {startupProof
                ? startupProof
                : 'Upload StartupTN Proof'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Safety Declaration */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() =>
            setHelmetChecked(!helmetChecked)
          }
        >
          <Ionicons
            name={
              helmetChecked
                ? 'checkbox'
                : 'square-outline'
            }
            size={22}
            color="#16b39a"
          />

          <Text style={styles.checkboxText}>
            I confirm that I always follow
            traffic rules and wear safety gear
            during delivery.
          </Text>
        </TouchableOpacity>

        {/* Terms */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() =>
            setTermsAccepted(!termsAccepted)
          }
        >
          <Ionicons
            name={
              termsAccepted
                ? 'checkbox'
                : 'square-outline'
            }
            size={22}
            color="#16b39a"
          />

          <Text style={styles.checkboxText}>
            I agree to GastroPulse delivery
            policies and customer safety
            guidelines.
          </Text>
        </TouchableOpacity>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            All uploaded documents are securely
            encrypted and used only for
            verification and operational
            purposes.
          </Text>
        </View>

        {/* Submit */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            Submit & Open Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
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
    flex: 1,
  },

  formContainer: {
    padding: 16,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#ECECEC',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 14,
    color: '#444',
  },

  input: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000',
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F9F9F9',
  },

  uploadButton: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 12,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    gap: 8,
    backgroundColor: '#FAFAFA',
  },

  uploadText: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 13,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 10,
    marginBottom: 5,
  },

  checkboxText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: '#555',
  },

  infoBox: {
    backgroundColor: '#EFEFEF',
    padding: 15,
    borderRadius: 14,
    marginTop: 20,
  },

  infoText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },

  submitButton: {
    backgroundColor: '#16b39a',
    height: 58,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});