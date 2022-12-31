import {Calendar} from "react-native-calendars";
import {Text, useColorModeValue} from "native-base";
import {useCallback, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CalenderComponent() {
    const [cor, setColor] = useState({}as any);

    let ligth = useColorModeValue("#000000", "#FFFFFF")
    const workout = {key: 'vacation', color: 'red', selectedDotColor: 'red'};
    const academics = {key: 'workout', color: 'yellow'};

    return (
                <Calendar
                    theme={{
                        calendarBackground: "transparent",
                        backgroundColor: ligth,
                        dayTextColor: ligth,
                        arrowColor: ligth,
                        selectedDayBackgroundColor:"#7dd3fc",
                        monthTextColor: ligth
                    }}
                    style={{backgroundColor: "transparent"}}
                    hideExtraDays={true}
                    markingType={'multi-dot'}

                    markedDates={{
                        '2022-12-28':  {selected: false, marked: true, dots:[workout]},
                        '2022-12-27':  {selected: false, marked: true, dots:[academics,workout]},
                    }}
                    firstDay={0}
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    onPressArrowRight={addMonth => addMonth()}

                />
    )
}