import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  View,
  Text,
} from "react-native";

/* COMMON SCREENS */
import LandingScreen from "../common/LandingScreen";
import LoginScreen from "../common/LoginScreen";
import SocialLoginScreen from "../common/SocialLoginScreen";

/* SIGNUP SCREENS */
import SignupRoleScreen from "../common/SignupRoleScreen";
import UserSignupScreen from "../common/UserSignupScreen";
import CookSignupScreen from "../common/CookSignupScreen";
import DriverSignupScreen from "../common/DriverSignupScreen";

/* USER SCREENS */
import UserHomeScreen from "../user/UserHomeScreen";

import HealthDetailsScreen from "../user/HealthDetailsScreen";

import CasualCravingsScreen from "../user/CasualCravingsScreen";

import CartScreen from "../user/CartScreen";

import NutritionalMealFormScreen from "../user/NutritionalMealFormScreen";

import NutritionalSuggestionScreen from "../user/NutritionalSuggestionScreen";

import CompanySelectionScreen from "../user/CompanySelectionScreen";

import HealthCentricMealFormScreen from "../user/HealthCentricMealFormScreen";

import HealthCentricSuggestionsScreen from "../user/HealthCentricSuggestionsScreen";

import HealthCompanySelectionScreen from "../user/HealthCompanySelectionScreen";
import CheckoutScreen from "../user/CheckoutScreen";
import PaymentScreen from "../user/PaymentScreen";
import OrderConfirmationScreen from "../user/OrderConfirmationScreen";
import ProfileScreen from '../user/ProfileScreen';
import SavedAddressScreen from '../user/SavedAddressScreen';
import SettingsScreen from '../user/SettingsScreen';
import NotificationScreen from '../user/NotificationScreen';

/* Cook*/
import  CookHomeScreen from '../cook/CookHomeScreen';
import  CookMenuScreen from '../cook/CookMenuScreen';
import CookOrdersScreen from '../cook/CookOrdersScreen';
import CookProfileScreen from '../cook/CookProfileScreen';
import CookEarningsScreen from '../cook/CookEarningsScreen';

/* CONTEXT */
import {
  CartProvider,
} from "../context/CartContext";

const Stack =
  createNativeStackNavigator();

/* TEMP COOK HOME */
function CookHome() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Cook Home Page
      </Text>
    </View>
  );
}

/* TEMP DELIVERY HOME */
function DeliveryHome() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Delivery Home Page
      </Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* LANDING */}
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
          />

          {/* LOGIN */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />

          {/* SOCIAL LOGIN */}
          <Stack.Screen
            name="SocialLogin"
            component={SocialLoginScreen}
          />

          {/* SIGNUP ROLE */}
          <Stack.Screen
            name="SignupRole"
            component={SignupRoleScreen}
          />

          {/* USER SIGNUP */}
          <Stack.Screen
            name="UserSignup"
            component={UserSignupScreen}
          />

          {/* COOK SIGNUP */}
          <Stack.Screen
            name="CookSignup"
            component={CookSignupScreen}
          />

          {/* DRIVER SIGNUP */}
          <Stack.Screen
            name="DriverSignup"
            component={DriverSignupScreen}
          />

          {/* USER HOME */}
          <Stack.Screen
            name="UserHome"
            component={UserHomeScreen}
          />

          {/* HEALTH DETAILS */}
          <Stack.Screen
            name="HealthDetails"
            component={HealthDetailsScreen}
          />

          {/* CASUAL CRAVINGS */}
          <Stack.Screen
            name="CasualCravings"
            component={CasualCravingsScreen}
          />

          {/* CART */}
          <Stack.Screen
            name="Cart"
            component={CartScreen}
          />

          {/* NUTRITIONAL MEAL */}
          <Stack.Screen
            name="NutritionalMealForm"
            component={
              NutritionalMealFormScreen
            }
          />

          <Stack.Screen
            name="NutritionalSuggestions"
            component={
              NutritionalSuggestionScreen
            }
          />

          <Stack.Screen
            name="CompanySelection"
            component={
              CompanySelectionScreen
            }
          />

          {/* HEALTH CENTRIC */}
          <Stack.Screen
            name="HealthCentricMealForm"
            component={
              HealthCentricMealFormScreen
            }
          />

          <Stack.Screen
            name="HealthCentricSuggestions"
            component={
              HealthCentricSuggestionsScreen
            }
          />

          <Stack.Screen
            name="HealthCompanySelection"
            component={
              HealthCompanySelectionScreen
            }
          />
           {/* Checkout */}
           <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
          />
          {/* Payment */}
          <Stack.Screen
           name="Payment"
           component={PaymentScreen}
          />
          {/* confirmation */}
          <Stack.Screen
            name="OrderConfirmation"
            component={OrderConfirmationScreen}
          />
          {/* profile-user */}
          <Stack.Screen
           name="Profile"
           component={ProfileScreen}
           options={{ headerShown: false }}
          />
          {/* notification-user */}
          <Stack.Screen
          name = "Notifications"
          component={NotificationScreen}
          options={{headerShown: false}}
          />
          {/* SavedAddress */}
          <Stack.Screen
          name = "SavedAddress"
          component ={SavedAddressScreen}
          options={{headerShown: false}}
          />
          {/* SettingsScreen */}
          <Stack.Screen
          name = "Settings"
          component = {SettingsScreen}
          option={{headeShown: false}}
        />


          {/* COOK MODULE */}
          <Stack.Screen
           name="CookHome"
           component={CookHomeScreen}
           options={{ headerShown: false }}
          />
          <Stack.Screen
           name="CookMenu"
           component={CookMenuScreen}
           options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CookOrders"
            component={CookOrdersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
           name="CookProfile"
           component={CookProfileScreen}
           options={{ headerShown: false }}
          />
          <Stack.Screen
           name="CookEarnings"
           component={CookEarningsScreen}
           options={{ headerShown: false }}
          />


          {/* DELIVERY HOME */}
          <Stack.Screen
            name="DeliveryHome"
            component={DeliveryHome}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
