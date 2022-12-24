import React from "react";
import {
    Box,
    Center,
    Checkbox,
    HStack,
    Icon,
    IconButton,
    Input,
    useToast,
    VStack,
    Text,
    useColorModeValue
} from "native-base";
import {Entypo, Feather} from "@expo/vector-icons";

export const TodoListComponent = () => {
    const instState = [{
        title: "Code",
        isCompleted: true
    }, {
        title: "Meeting with team at 9",
        isCompleted: false
    }, {
        title: "Check Emails",
        isCompleted: false
    }, {
        title: "Write an article",
        isCompleted: false
    }];
    const [list, setList] = React.useState(instState);
    const [inputValue, setInputValue] = React.useState("");
    const toast = useToast();

    const addItem = (title: string) => {
        if (title === "") {
            toast.show({
                title: "Please Enter Text"
            });
            return;
        }

        setList(prevList => {
            return [...prevList, {
                title: title,
                isCompleted: false
            }];
        });
    };

    const bg = useColorModeValue("warmGray.50", "coolGray.800");

    return <Box h={"100%"} bg={bg} w="100%" safeArea={true}>
                <VStack space={4}>
                    <HStack space={2}>
                        <Input accessibilityLabel={"Add Task"} flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Adicionar uma nova Tarefa" />
                        <IconButton  borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="lg" color="warmGray.50" />} onPress={() => {
                            addItem(inputValue);
                            setInputValue("");
                        }} />
                    </HStack>
                    <VStack space={2}>

                    </VStack>
                </VStack>
        </Box>;

}