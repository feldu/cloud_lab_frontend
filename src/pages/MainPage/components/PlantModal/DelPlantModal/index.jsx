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

export default function DelPlantModal({isOpen, onClose}) {
    const [id, setId] = useState('');
    const dispatch = useDispatch();

    const deleteHandler = (e) => {
        e.preventDefault()
        dispatch(thunks.deletePlant(id));
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Delete your plant</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <TextControl isRequired={true} label="Id" value={id} setValue={setId}/>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" onClick={deleteHandler} colorScheme='blue' mr={3}>
                        OK
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}