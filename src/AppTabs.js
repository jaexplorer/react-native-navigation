import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";
import Center from "./Center.styles";
import { AuthContext } from "./AuthProvider";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Center>
      <Text>Home</Text>
      <Button
        title='logout'
        onPress={() => {
          logout();
        }}
      />
    </Center>
  );
};

const Search = () => {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
};

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === "Search") {
            return <EvilIcons name={"search"} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        style: { height: 100, paddingTop: 10 }
      }}
    >
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Search' component={Search} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
