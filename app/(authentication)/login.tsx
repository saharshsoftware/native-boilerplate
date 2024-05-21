import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import LoginForm from "@/components/Forms/LoginForm";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
const Page = () => {
  return (
    <>
      <ThemedView
        style={{
          flex: 1,
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              rowGap: 15,
              padding: 25,
            }}
          >
            <LoginForm />
          </ScrollView>
        </GestureHandlerRootView>
      </ThemedView>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
    marginVertical: 20,
  },
  containerform: {
    paddingVertical: 8,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
