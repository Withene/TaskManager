import {Container} from "native-base";
import React, {ReactChild, ReactChildren} from "react";


export default function ContainerComponent(props: any) {
    return (
        // <Container p={10} backgroundColor={"transparent"}>
        <>
            {props.children}
        </>
        // </Container>
    )
}