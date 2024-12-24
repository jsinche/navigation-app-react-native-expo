import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        <CustomButton className="mb-2" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/profile")}
          color="secondary"
        >
          Perfil
        </CustomButton>
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/settings")}
          color="tertiary"
        >
          Ajustes
        </CustomButton>
        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-10">
            Products
          </CustomButton>
        </Link>
        {/* <Link href="/products" className="mb-5">
          Productos
        </Link>
        <Link href="/profile" className="mb-5">
          Perfil
        </Link>
        <Link href="/settings" className="mb-5">
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
