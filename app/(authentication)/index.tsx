import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import SignupForm from "@/components/Forms/SignupForm";

const Page = () => {
  return (
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
          <SignupForm />
        </ScrollView>
      </GestureHandlerRootView>
    </ThemedView>
  );
};

export default Page;
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
