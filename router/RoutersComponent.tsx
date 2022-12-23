import {Ionicons} from "@expo/vector-icons";
import React, {useEffect, useRef} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon, Text, View, NativeBaseProvider, Box, useColorMode, Button, Center, useColorModeValue} from "native-base";
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';


const Tab = createBottomTabNavigator();

function HomeScreen() {
    const {
        toggleColorMode
    } = useColorMode();
    const bg = useColorModeValue("warmGray.50", "coolGray.800");
    return (
                        <Center bg={bg} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} safeArea>
                            <Text>Home!!</Text>
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
    { route: 'Like', label: 'Like',  activeIcon: 'list', inActiveIcon: 'list-outline', component: HomeScreen2 },
    { route: 'Search', label: 'Search',  activeIcon: 'settings', inActiveIcon: 'settings-outline', component: HomeScreen },

];


const TabButton = (props:any) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null) as any;

    useEffect(() => {
        if (focused) {
            viewRef.current.animate( { 0: { scale: .5, translateY: 0 }, .20: { translateY: -7 }, 1: { scale: 1.2, translateY: 0 } });
        } else {
            viewRef.current.animate({ 0: { scale: 1.2, translateY: 0 }, 1: { scale: 1, translateY: 0 } });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                ref={viewRef}
                duration={1000}
                style={styles.container}>
                {/*<Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primary : Colors.primaryLite} />*/}
                <Ionicons name={focused ? item.activeIcon : item.inActiveIcon} size={24} color={"black"}/>
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
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: 16,
                    backgroundColor: '#fafaf9'
                }

            })}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                                options={{
                                    tabBarShowLabel: false,
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
    }
})