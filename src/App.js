import './App.css';
import {Heading, Text} from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <Heading as="h1" size="lg" textAlign="center" letterSpacing={"tighter"}>
                <Text>Oh shit, here we go again...</Text>
            </Heading>
        </div>
    );
}

export default App;
