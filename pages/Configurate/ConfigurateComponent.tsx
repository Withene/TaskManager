// import {Checkbox, HStack, Icon, IconButton, Text} from "native-base";
// import {Entypo} from "@expo/vector-icons";
// import React from "react";
//
// {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
//     <Checkbox accessibilityLabel={"checkd"} isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
//     <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
//         color: item.isCompleted ? "gray.400" : "coolGray.800"
//     }} _dark={{
//         color: item.isCompleted ? "gray.400" : "coolGray.50"
//     }} onPress={() => handleStatusChange(itemI)}>
//         {item.title}
//     </Text>
//     <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
// </HStack>)}