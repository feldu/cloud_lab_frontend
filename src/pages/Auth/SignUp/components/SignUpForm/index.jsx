import {Box, Button, Flex} from "@chakra-ui/react"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import TextControl from "../../../../../components/common/TextControl";
import PasswordControl from "../../../../../components/common/PasswordControl";
import AlertMessage from "../../../../../components/AlertMessage";
import * as thunks from "../../../../../redux/thunks"


export default function SignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authInfo = useSelector(state => state.message.messageInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (authInfo.message !== null && authInfo.isError === false) navigate("/auth/signin");

    const signUp = async e => {
        e.preventDefault();
        dispatch(thunks.signUpUser({username, password}));
    };

    return (
        <Flex width="full" align="center" justifyContent="center" alignItems="center" direction="vertical" flex={1}>
            <Box p={2} px={5} borderWidth={1} borderRadius={14} boxShadow="lg" w={400}>
                <Box my={4} textAlign="left">
                    <form>
                        <TextControl value={username} setValue={setUsername} label="Username" isRequired={true}/>
                        <PasswordControl value={password} setValue={setPassword} label="Password"/>
                        <Button width="full" mt={4} type="submit" onClick={signUp}>Sign Up</Button>
                    </form>
                    {authInfo.message &&
                        <AlertMessage message={authInfo.message} status={authInfo.isError ? "error" : "success"}/>}
                </Box>
            </Box>
        </Flex>
    );
}
















