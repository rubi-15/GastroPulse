import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen() {

  const [notifications, setNotifications] =
    useState([

      {
        id: '1',
        title: 'Order Preparing',
        desc:
          'Your healthy meal is preparing 🍲',
      },

      {
        id: '2',
        title: 'Order Shipped',
        desc:
          'Delivery partner is on the way 🚚',
      },

      {
        id: '3',
        title: 'Special Offer',
        desc:
          'Get 30% off on salads 🥗',
      },

    ]);

  const removeNotification = (id) => {

    setNotifications(
      notifications.filter(
        item => item.id !== id
      )
    );
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Notifications
      </Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (

          <View style={styles.card}>

            <View style={styles.left}>

              <Ionicons
                name="notifications"
                size={24}
                color="#16b39a"
              />

              <View style={{ marginLeft: 12 }}>

                <Text style={styles.heading}>
                  {item.title}
                </Text>

                <Text style={styles.desc}>
                  {item.desc}
                </Text>

              </View>

            </View>

            <TouchableOpacity
              onPress={() =>
                removeNotification(
                  item.id
                )
              }
            >

              <Ionicons
                name="close"
                size={22}
                color="#999"
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

  card: {
    backgroundColor: '#F5F5F5',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  desc: {
    color: '#666',
    marginTop: 4,
    width: 220,
  },

});