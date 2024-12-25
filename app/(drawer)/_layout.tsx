import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer drawerContent={CustomDrawer}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
