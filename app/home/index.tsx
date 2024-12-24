import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        <Link href="/products" className="mb-5">
          Productos
        </Link>
        <Link href="/profile" className="mb-5">
          Perfil
        </Link>
        <Link href="/settings" className="mb-5">
          Ajustes
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
