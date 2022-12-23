import { NativeBaseProvider, extendTheme } from "native-base";

 const customTheme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,

});
export default  customTheme ;