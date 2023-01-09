import {Box, Flex, Heading, Text} from "@chakra-ui/react";

export default function PlantsBox({plants}) {
    return (
        <Flex py={3} px={10} borderWidth={1} borderRadius={14} boxShadow="lg"
              align="center" justifyContent="center" flex={1} flexWrap="wrap">
            {
                plants.map((p, key) =>
                    <Box key={key} p={5} m={3} borderWidth={1} borderRadius={14} boxShadow="lg">
                        <Heading size="md">Plant №{p.id}</Heading>
                        <Text>Name: {p.name}</Text>
                        <Text>Temperature: {p.temperature ? p.temperature : <b>Sensor not available</b>}</Text>
                        <Text>Humidity: {p.humidity ? p.humidity : <b>Sensor not available</b>}</Text>
                        <Text>Ground humidity: {p.groundHumidity ? p.groundHumidity :
                            <b>Sensor not available</b>}</Text>
                        <Text>Brightness: {p.brightness ? p.brightness : <b>Sensor not available</b>}</Text>
                        <Text mt={2}><u>Settings:</u></Text>
                        <Text>Ground humidity border: {p.settings.groundHumidityBorder}</Text>
                        <Text>Brightness Border: {p.settings.brightnessBorder}</Text>
                        <Text>Day long: {p.settings.dayLong}</Text>
                        <Text>Spectre: r: {p.settings.spectre.rvalue}, g: {p.settings.spectre.gvalue},
                            b: {p.settings.spectre.bvalue}</Text>
                        <Text mt={2}><u>Photo analysis:</u><b>{p.condition}/10</b></Text>
                        {p.condition <= 3 && <Text>Wow! It looks like a shit...</Text>}
                        {p.condition > 3 && p.condition <= 6 && <Text>Your plant is fine!</Text>}
                        {p.condition > 6 && <Text>Awesome! Please donate to us.. :(</Text>}
                    </Box>)
            }
        </Flex>
    );
}