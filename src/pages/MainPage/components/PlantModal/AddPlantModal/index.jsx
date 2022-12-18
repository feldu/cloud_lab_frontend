import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import TextControl from "../../../../../components/common/TextControl";
import * as thunks from "../../../../../redux/thunks";
import {useState} from "react";
import {useDispatch} from "react-redux";

export default function AddPlantModal({isOpen, onClose}) {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const addHandler = (e) => {
        e.preventDefault()
        dispatch(thunks.addPlant({name}));
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Add your plant</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <TextControl isRequired={true} label="Name" value={name} setValue={setName}/>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" onClick={addHandler} colorScheme='blue' mr={3}>
                        OK
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}