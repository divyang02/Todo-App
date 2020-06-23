import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Text,
} from "react-native";
import AppText from "./AppText";
import colors from "./colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
  renderLeftActions,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText>{title}</AppText>
            {subTitle && <AppText> {subTitle} </AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default ListItem;
