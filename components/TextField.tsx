import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

interface ITextField {
  placeholder?: string;
  field: {
    name: string;
    onBlur: (e: any) => void;
    onChange: (e: any) => any;
    value: any;
  };
  form: {
    errors: any;
    touched: any;
    setFieldTouched: (name: string, value?: boolean) => void;
  };
  onRightIconClick: () => void;
  leftIcon: any;
  rightIcon: any;
  secureTextEntry?: boolean;
  disabled?: boolean;
}

const TextField = (props: ITextField) => {
  const theme = useColorScheme() ?? "light";
  const ColorsInput = {
    light: {
      background: "#F6F6F6",
      text: "#000",
    },
    dark: {
      background: "#27282B",
      text: "#fff",
    },
  };
  //   const { themeBackgroundStyle, themeTextStyle } = useThemeHook(isDarkMode, {
  //     backgroundColor: isDarkMode ? "#27282B" : "#F6F6F6",
  //   });
  const {
    placeholder,
    field: { name, onBlur, onChange = () => {}, value },
    form: { errors, touched, setFieldTouched },
    leftIcon,
    rightIcon,
    secureTextEntry = false,
    disabled = false,
    onRightIconClick = () => {},
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={[
          styles.inputContainer,
          { backgroundColor: ColorsInput[theme].background },
        ]}
      >
        {leftIcon && (
          <ThemedView
            lightColor={ColorsInput.light.background}
            darkColor={ColorsInput.dark.background}
            style={styles.iconContainer}
          >
            {leftIcon}
          </ThemedView>
        )}
        <TextInput
          style={[styles.input, { color: ColorsInput[theme].text }]}
          placeholder={placeholder}
          placeholderTextColor={ColorsInput[theme].text}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          editable={!disabled}
          {...inputProps}
        />
        {rightIcon && (
          <ThemedView
            lightColor={ColorsInput.light.background}
            darkColor={ColorsInput.dark.background}
            style={styles.iconContainer}
          >
            <TouchableOpacity
              onPress={onRightIconClick}
              style={styles.iconContainer}
            >
              {rightIcon}
            </TouchableOpacity>
          </ThemedView>
        )}
      </ThemedView>
      {hasError && (
        <ThemedText style={styles.errorText}>{errors[name]}</ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: "100%",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  iconContainer: {
    paddingHorizontal: 6,
  },
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});

export default TextField;
