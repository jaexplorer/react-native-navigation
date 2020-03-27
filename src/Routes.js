import React, { Fragment, useState, useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, Button, ActivityIndicator, AsyncStorage } from "react-native";
import Center from "./Center.styles";
import { AuthContext } from "./AuthProvider";
import AppTabs from "./AppTabs";

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title='login'
        onPress={() => {
          login();
        }}
      />
    </Center>
  );
};

const Register = ({ navigation }) => {
  return (
    <Center>
      <Text>I am a register screen</Text>
      <Button
        title='go to login'
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Center>
  );
};

const Routes = () => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(user => {
        if (user) {
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Center>
          <ActivityIndicator size='large' />
        </Center>
      ) : (
        <NavigationContainer>
          {user ? (
            <AppTabs />
          ) : (
            <Stack.Navigator initialRouteName='Register'>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen
                name='Register'
                options={{
                  // ctrl space
                  header: () => null
                }}
                component={Register}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      )}
    </Fragment>
  );
};

export default Routes;
