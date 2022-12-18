import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MainHeader from "./components/MainHeader";
import {Button, Flex, useDisclosure} from "@chakra-ui/react";
import AddPlantModal from "./components/PlantModal/AddPlantModal";
import UpdPlantModal from "./components/PlantModal/UpdPlantModal";
import DelPlantModal from "./components/PlantModal/DelPlantModal";
import PlantsBox from "./components/PlantsBox";
import * as thunks from "../../redux/thunks"
import AlertMessage from "../../components/AlertMessage";

export default function MainPage() {
    const dispatch = useDispatch();
    const {isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose} = useDisclosure();
    const {isOpen: isUpdOpen, onOpen: onUpdOpen, onClose: onUpdClose} = useDisclosure();
    const {isOpen: isDelOpen, onOpen: onDelOpen, onClose: onDelClose} = useDisclosure();
    const messageInfo = useSelector(state => state.message.messageInfo);
    useEffect(() => {
        dispatch(thunks.getUserPlants());
    }, [dispatch]);

    const plants = useSelector(state => state.plant.plants);

    return (
        <Flex direction="column">
            <MainHeader/>
            <Flex w="full" align="center" justifyContent="left" alignItems="stretch" flex={1}
                  p={5}>
                <Flex direction="column" width="25%" alignItems="stretch">
                    <Button onClick={onAddOpen} colorScheme="green" my="5px">Add plant</Button>
                    <Button onClick={onUpdOpen} colorScheme="orange" my="5px">Update plant</Button>
                    <Button onClick={onDelOpen} colorScheme="red" my="5px">Delete plant</Button>
                    <AddPlantModal isOpen={isAddOpen} onClose={onAddClose}/>
                    <UpdPlantModal isOpen={isUpdOpen} onClose={onUpdClose}/>
                    <DelPlantModal isOpen={isDelOpen} onClose={onDelClose}/>
                    {messageInfo.message &&
                        <AlertMessage message={messageInfo.message}
                                      status={messageInfo.isError ? "error" : "success"}/>}
                </Flex>
                <Flex direction="column" w="100%" ml={5}>
                    <PlantsBox plants={plants}/>
                </Flex>
            </Flex>
        </Flex>
    );
}