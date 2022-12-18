import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import TextControl from "../../../../../components/common/TextControl";
import * as thunks from "../../../../../redux/thunks";
import {useState} from "react";
import {useDispatch} from "react-redux";
import NumberControl from "../../../../../components/common/NumberControl";

export default function UpdPlantModal({isOpen, onClose}) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [groundHumidityBorder, setGroundHumidityBorder] = useState('');
    const [brightnessBorder, setBrightnessBorder] = useState('');
    const [dayLong, setDayLong] = useState('');
    const [rvalue, setRValue] = useState('');
    const [gvalue, setGValue] = useState('');
    const [bvalue, setBValue] = useState('');
    const dispatch = useDispatch();

    const updateHandler = (e) => {
        e.preventDefault()
        dispatch(thunks.updatePlant({id, name}));
        onClose();
    }

    const updateSettingsHandler = (e) => {
        e.preventDefault()
        dispatch(thunks.updatePlantSettings({id, groundHumidityBorder, brightnessBorder, dayLong, rvalue, gvalue, bvalue}));
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Update your plant</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <TextControl isRequired={true} label="Id" value={id} setValue={setId}/>
                    <TextControl isRequired={true} label="Name" value={name} setValue={setName}/>
                    <Box align="center" mt={5}>
                        <Button type="submit" onClick={updateHandler} colorScheme='blue' mr={3}>
                            Change name
                        </Button>
                    </Box>
                </ModalBody>
                <ModalBody pb={6}>
                    <NumberControl min={0} max={1023} label={"Ground humidity border"} value={groundHumidityBorder}
                                   setValue={setGroundHumidityBorder}/>
                    <NumberControl min={0} max={1023} label={"Brightness border"} value={brightnessBorder}
                                   setValue={setBrightnessBorder}/>
                    <NumberControl min={1} max={23} label={"Day long (in horus)"} value={dayLong}
                                   setValue={setDayLong}/>
                    <Text><u>Spectre:</u></Text>
                    <NumberControl min={0} max={255} label={"Red value"} value={rvalue} setValue={setRValue}/>
                    <NumberControl min={0} max={255} label={"Green value"} value={gvalue} setValue={setGValue}/>
                    <NumberControl min={0} max={255} label={"Blue value"} value={bvalue} setValue={setBValue}/>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" onClick={updateSettingsHandler} colorScheme='blue' mr={3}>
                        Change Settings
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}