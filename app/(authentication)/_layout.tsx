import { Appearance, Image, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
const Layout = () => {
  const theme = useColorScheme() ?? "light";
  const toggle = () => {
    if (theme === "light") {
      Appearance.setColorScheme("dark");
      return;
    }
    Appearance.setColorScheme("light");
  };
  return (
    <SafeAreaView style={[styles.safeContainer]}>
      <Image
        resizeMode="cover"
        source={require("@/assets/images/partial-react-logo.png")}
        style={styles.reactLogo}
      />
      <ThemedView style={[styles.authContainer]}>
        <MaterialTopTabs
          screenOptions={{
            tabBarActiveTintColor: Colors[theme].tint,
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
              textTransform: "capitalize",
            },
            tabBarIndicatorStyle: {
              backgroundColor: Colors.brand.background,
              height: 2,
            },
            tabBarStyle: {
              backgroundColor: Colors[theme].background,
              shadowColor: "transparent",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            },
          }}
        >
          <MaterialTopTabs.Screen
            name="index"
            options={{ title: "Create Account" }}
          />
          <MaterialTopTabs.Screen name="login" options={{ title: "Log In" }} />
        </MaterialTopTabs>
        <StatusBar style={"auto"} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  reactLogo: {
    height: "25%",
  },
  image: {
    width: 110,
    height: 80,
    alignSelf: "center",
  },
  brandContainer: {
    paddingVertical: 40,
    justifyContent: "center",
  },
  authContainer: {
    flex: 1,
    flexGrow: 1,
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
