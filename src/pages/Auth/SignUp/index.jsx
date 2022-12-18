import AuthHeader from "../components/AuthHeader";
import {Flex} from "@chakra-ui/react";
import SignUpForm from "./components/SignUpForm";

export default function SignUpPage() {
    return (
        <Flex direction="column" height="100%">
            <AuthHeader buttonText={"Sign In"} path={'/auth/signin'}/>
            <SignUpForm/>
        </Flex>
    );
}