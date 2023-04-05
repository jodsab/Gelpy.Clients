import { View, Text, FlatList } from "react-native";
import React from "react";
import GInput from "../../atoms/GInput";
import GText from "../../atoms/GText";
import GCategoriesView from "../../molecules/GCategoriesView";
import * as t from "../../../../core/constants/translations";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../../../shared/colors";

const HomeTemplate = ({ navigation, categories }) => {
  const renderItem = ({ item }) => <GCategoriesView item={item} />;

  const m = t?.default?.home;
  return (
    <View style={styles.container}>
      <View style={styles.spaceBetween}>
        <View style={styles.flex}>
          <FontAwesome5 name="location-arrow" size={14} color={colors.ORANGE} />
          <Text style={styles.location}>La molina</Text>
        </View>

        <View style={styles.searcherIcon}>
          <FontAwesome name="search" size={20} color="white" />
        </View>
      </View>
      <GText style={styles.header} bold>
        {m?.header}
      </GText>
      <GInput
        icon={<FontAwesome name="search" size={12} color={colors.GRAY} />}
        inputStyles={{ height: 50, paddingRight: 10 }}
        placeholder={m?.searcher}
      />
      <View style={styles.list}>
        <FlatList
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          maxToRenderPerBatch={9}
          data={categories?.categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.order}
        />
      </View>
    </View>
  );
};

export default HomeTemplate;
