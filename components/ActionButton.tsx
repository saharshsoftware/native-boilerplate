import {
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

interface IActionButton {
  loading?: boolean;
  customTitleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  buttonLabel: string;
  customStyle?: object; // Allow custom styles to be passed from parent
}

const ActionButton = (props: IActionButton) => {
  const {
    loading = false,
    onPress = () => {},
    buttonLabel = "",
    customStyle = {},
    customTitleStyle,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.defaultButtonStyle, customStyle]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <ThemedText style={[styles.defaultTitleStyle, customTitleStyle]}>
          {buttonLabel}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    backgroundColor: Colors.brand.background,
    borderRadius: 16,
    minHeight: 50,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultTitleStyle: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ActionButton;
