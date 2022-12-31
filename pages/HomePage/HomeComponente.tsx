import {
    Box,
    Button,
    Checkbox,
    Divider,
    Heading,
    Text,
    HStack, Icon,
    IconButton,
    useColorMode,
    useColorModeValue, useToast,
    VStack
} from "native-base";
import {useEffect, useRef, useState} from "react";
import {Calendar} from "react-native-calendars";
import CalenderComponent from "../../components/Calender";
import {Entypo} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
    const {
        toggleColorMode
    } = useColorMode();
    const bg = useColorModeValue("warmGray.50", "coolGray.800");



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
    const [list, setList] = useState(instState);
    const [inputValue, setInputValue] = useState("");
    const toast = useToast();


    const addItem = title => {
        if (title === "") {
            toast.show({
                title: "Please Enter Text",
                status: "warning"
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

    const handleDelete = index => {
        setList(prevList => {
            const temp = prevList.filter((_, itemI) => itemI !== index);
            return temp;
        });
    };

    const handleStatusChange = index => {
        setList(prevList => {
            const newList = [...prevList];
            newList[index].isCompleted = !newList[index].isCompleted;
            return newList;
        });
    };
    return (
        <Box h={"100%"} bg={bg} w="100%" safeArea={true} p={5}>
            <CalenderComponent/>
            <Divider thickness={2} mt={5}/>
            <HStack h={"40%"}>
                <Box w={"50%"} >
                    <Heading mx={"auto"} size={"sm"} mt={3}  mb={5} fontWeight="300" >
                        Tarefas do dia
                    </Heading>

                    <VStack space={2}>
                        {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                            <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
                            <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                                color: item.isCompleted ? "gray.400" : "coolGray.800"
                            }} _dark={{
                                color: item.isCompleted ? "gray.400" : "coolGray.50"
                            }} onPress={() => handleStatusChange(itemI)}>
                                {item.title}
                            </Text>
                            <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
                        </HStack>)}
                    </VStack>
                </Box>
                <Divider orientation={"vertical"} mt={2} />
                <Box w={"50%"}>
                    <Heading mx={"auto"} size={"sm"} mt={3} mb={5} fontWeight="300" >
                        Notas importantes
                    </Heading>
                    <Button onPress={toggleColorMode} m={3}>Tema</Button>
                </Box>
            </HStack>

        </Box>
    );
}