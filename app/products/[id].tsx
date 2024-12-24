import { View, Text } from "react-native";
import React from "react";
import { Redirect, useLocalSearchParams } from "expo-router";
import { products } from "@/store/products.store";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);
  if (!product) return <Redirect href="/" />;
  return (
    <View>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
