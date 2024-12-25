import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack, useNavigation } from "expo-router";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      // navigation.dispatch(StackActions.pop()); // Genera error
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ canGoBack }) => (
          <Pressable onPressIn={() => onHeaderLeftClick(canGoBack)}>
            <Ionicons
              name={canGoBack ? "arrow-back-outline" : "grid-outline"}
              className="mr-5"
              size={20}
            />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes Pantalla",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
