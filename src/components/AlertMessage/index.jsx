import React from "react";
import {Alert, AlertDescription, AlertIcon, AlertTitle, Box} from "@chakra-ui/react";

export default function AlertMessage({message, status, title}) {
    return (
        <Box my={4} align="center">
            <Alert status={status} borderRadius={4}>
                <AlertIcon/>
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </Box>
    );
}