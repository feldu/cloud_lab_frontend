import React from "react";

import {Flex} from "@chakra-ui/react";
import AuthHeader from "../AuthHeader";
import SignInForm from "./SignInForm";



export default function SignInPage() {
    return (
        <Flex direction="column" height="100%">
            <AuthHeader buttonText={"Sign Up"} path={'/auth/signup'}/>
            <SignInForm/>
        </Flex>
    );
}