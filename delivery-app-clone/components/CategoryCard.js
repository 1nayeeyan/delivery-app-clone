import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">

        <Text className="absolute bottom-1 left-1 font-bold text-white">
          {title}
        </Text>

    </TouchableOpacity>
  );
};

export default CategoryCard;