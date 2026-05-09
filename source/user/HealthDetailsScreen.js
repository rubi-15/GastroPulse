// ======================================================
// FILE: source/user/components/DailyHealthProgress.js
// ======================================================

import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DailyHealthProgress({ navigation }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Daily Health Progress
      </Text>

      <View style={styles.row}>
        <Text style={styles.value}>
          1200
        </Text>

        <Text style={styles.target}>
          / 1800 kcal
        </Text>
      </View>

      {/* PROGRESS BAR */}
      <View style={styles.progressBg}>
        <View style={styles.progressFill} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('HealthDetails')
        }
      >
        <Text style={styles.buttonText}>
          View Details →
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DDF5F1',
    borderRadius: 20,
    padding: 18,
    marginBottom: 24,
  },

  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
    marginBottom: 14,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  value: {
    fontSize: 42,
    fontWeight: '800',
    color: '#111',
  },

  target: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
    marginBottom: 8,
  },

  progressBg: {
    height: 8,
    backgroundColor: '#BDE7DE',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 14,
  },

  progressFill: {
    width: '65%',
    height: 8,
    backgroundColor: '#16b39a',
    borderRadius: 20,
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: 15,
  },

  buttonText: {
    color: '#16b39a',
    fontWeight: '700',
    fontSize: 13,
  },
});