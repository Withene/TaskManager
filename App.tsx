import React from "react";
import {ColorMode, StorageManager, NativeBaseProvider,} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Routers from "./router/RoutersComponent";

import Customtheme from "./themes/theme";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContainerComponent from "./pages/Container/ContainerComponent";


const colorModeManager: StorageManager = {
    get: async () => {
        try {
            let val = await AsyncStorage.getItem('@color-mode');
            return val === 'dark' ? 'dark' : 'light';
        } catch (e) {
            return 'dark';
        }
    },
    set: async (value: ColorMode) => {
        try {
            // @ts-ignore
            await AsyncStorage.setItem('@color-mode', value);
        } catch (e) {
            console.log(e);
        }
    },
};

const Tab = createBottomTabNavigator();
export default function App() {

    return (
        <NativeBaseProvider theme={Customtheme} colorModeManager={colorModeManager} >

                <NavigationContainer>
                    <ContainerComponent>
                        <Routers/>
                    </ContainerComponent>
                </NavigationContainer>

        </NativeBaseProvider>
    );
}
