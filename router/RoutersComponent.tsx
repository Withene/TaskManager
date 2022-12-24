import {Ionicons} from "@expo/vector-icons";
import React, {useEffect, useRef} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon, Text, View, NativeBaseProvider, Box, useColorMode, Button, Center, useColorModeValue} from "native-base";
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import {TodoListComponent} from "../pages/TodoList/TodoListComponent";
import {Colors} from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    const {
        toggleColorMode
    } = useColorMode();
    const bg = useColorModeValue("warmGray.50", "coolGray.800");

    const viewRef = useRef(null);
    return (
                        <Center bg={bg} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} safeArea>
                            <Text>Home!!a</Text>
                            <Button onPress={toggleColorMode} h={10}>
                                Toggle
                            </Button>
                        </Center>


    );
}

function HomeScreen2() {
    const bg = useColorModeValue("warmGray.50", "coolGray.800");
    return (
        <View  bg={bg} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!2</Text>
        </View>
    );
}


const TabArr = [
    { route: 'Home', label: 'Home',  activeIcon: 'home', inActiveIcon: 'home-outline', component: HomeScreen },
    { route: 'Like', label: 'Lista',  activeIcon: 'list', inActiveIcon: 'list-outline', component: TodoListComponent },
    { route: 'Search', label: 'Search',  activeIcon: 'settings', inActiveIcon: 'settings-outline', component: HomeScreen2 },

];


const TabButton = (props:any) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null) as any;
    const textViewRef = useRef(null)  as any;

    useEffect(() => {
        if (focused) {
            viewRef.current.animate( { 0: { scale: .5, translateY: 0 }, .80: { translateY: -7 }, 1: { scale: 1.2, translateY: 0 } });
            textViewRef.current.animate("slideInUp");

        } else {
            viewRef.current.animate({ 0: { scale: 1.2, translateY: 0 }, 1: { scale: 1, translateY: 0 } });
            textViewRef.current.animate("slideOutDown");


        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>


            <Animatable.View
                ref={viewRef}
                easing={"ease-in"}
                duration={400}
                style={{
                    height: 30,
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
               >
                    <Ionicons name={focused ? item.activeIcon : item.inActiveIcon} size={20} color={"black"}/>
                    <Animatable.View
                        ref={textViewRef}
                        duration={400}
                        >
                        {focused && <Text  fontSize="xs" style={{
                            color: Colors.black, paddingHorizontal: 8
                        }}>{item.label}</Text>}
                    </Animatable.View>

            </Animatable.View>


        </TouchableOpacity>
    )
}

export default function Routers() {

    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                // unmountOnBlur: true,
                tabBarStyle: {
                    height: 50,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: 16,
                    // backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    // elevation: 0
                },
                tabBarHideOnKeyboard: true,


            })}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                                options={{
                                    // tabBarShowLabel: false,
                                    tabBarButton: (props) => <TabButton {...props} item={item} />
                                }}

                    />
                )
            })}

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',


    },


})