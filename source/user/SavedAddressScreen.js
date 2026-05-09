import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function SavedAddressScreen() {

  const [addresses, setAddresses] =
    useState([

      {
        id: '1',
        type: 'Home',
        address:
          '12, Anna Nagar, Salem, Tamil Nadu',
      },

      {
        id: '2',
        type: 'Office',
        address:
          'Tidel Park, Chennai',
      },

    ]);

  const [newAddress, setNewAddress] =
    useState('');

  const addAddress = () => {

    if (!newAddress.trim()) {

      Alert.alert(
        'Error',
        'Please enter address'
      );

      return;
    }

    const newItem = {

      id: Date.now().toString(),

      type: 'New',

      address: newAddress,
    };

    setAddresses([
      ...addresses,
      newItem,
    ]);

    setNewAddress('');
  };

  const deleteAddress = (id) => {

    setAddresses(
      addresses.filter(
        item => item.id !== id
      )
    );
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Saved Addresses
      </Text>

      <View style={styles.inputRow}>

        <TextInput
          placeholder="Add new address"
          value={newAddress}
          onChangeText={setNewAddress}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.addBtn}
          onPress={addAddress}
        >

          <Ionicons
            name="add"
            size={24}
            color="#fff"
          />

        </TouchableOpacity>

      </View>

      <FlatList
        data={addresses}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (

          <View style={styles.card}>

            <View>

              <Text style={styles.type}>
                {item.type}
              </Text>

              <Text style={styles.address}>
                {item.address}
              </Text>

            </View>

            <TouchableOpacity
              onPress={() =>
                deleteAddress(item.id)
              }
            >

              <Ionicons
                name="trash-outline"
                size={22}
                color="red"
              />

            </TouchableOpacity>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
  },

  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    padding: 14,
    marginRight: 10,
  },

  addBtn: {
    backgroundColor: '#16b39a',
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },

  card: {
    backgroundColor: '#F5F5F5',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  type: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },

  address: {
    color: '#555',
    marginTop: 6,
    width: 250,
  },

});