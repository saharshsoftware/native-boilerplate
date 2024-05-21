import { StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useCallback, useRef, useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import TextField from "@/components/TextField";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import ActionButton from "@/components/ActionButton";
import { useFocusEffect } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string().required("Password is required").label("Password"),
});

const LoginForm = () => {
  const formRef = useRef<any>(null);
  const theme = useColorScheme() ?? "light";

  const [showPassword, setShowPassword] = useState(true);
  const [respError, setRespError] = useState("");
  useFocusEffect(
    useCallback(() => {
      console.log("Login Screen is focused");

      // Cleanup function or additional logic when screen is unfocused
      return () => {
        formRef.current?.resetForm?.();
        setRespError("");
      };
    }, [])
  );
  return (
    <Formik
      innerRef={(f) => (formRef.current = f)}
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ handleSubmit }: any) => (
        <ThemedView
          style={[
            {
              justifyContent: "space-between",
              rowGap: 80,
            },
          ]}
        >
          <ThemedView
            style={{
              rowGap: 10,
            }}
          >
            <Field
              component={TextField}
              name="email"
              placeholder="Email Address"
              leftIcon={
                <MaterialIcons
                  size={19}
                  name={"mail-outline"}
                  color={Colors[theme].text}
                />
              }
            />
            <Field
              component={TextField}
              name="password"
              secureTextEntry={showPassword}
              placeholder="Password"
              leftIcon={
                <MaterialIcons
                  size={20}
                  name={"lock-outline"}
                  color={Colors[theme].text}
                />
              }
              rightIcon={
                <Entypo
                  size={20}
                  name={showPassword ? "eye-with-line" : "eye"}
                  color={Colors[theme].text}
                />
              }
              onRightIconClick={() => setShowPassword((prev) => !prev)}
            />
            {respError ? (
              <ThemedText
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                }}
              >
                {respError}
              </ThemedText>
            ) : null}
          </ThemedView>
          <ThemedView
            style={{
              rowGap: 15,
            }}
          >
            <ActionButton buttonLabel={"Log In"} onPress={handleSubmit} />
          </ThemedView>
        </ThemedView>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
