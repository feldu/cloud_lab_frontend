import React from "react";

import {Flex} from "@chakra-ui/react";
import AuthHeader from "../components/AuthHeader";
import SignInForm from "./components/SignInForm";



export default function SignInPage() {
    return (
        <Flex direction="column" height="100%">
            <AuthHeader buttonText={"Sign Up"} path={'/auth/signup'}/>
            <SignInForm/>
        </Flex>
    );
}