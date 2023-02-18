
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Button,
    Flex,
} from "@chakra-ui/react";
// import { CloseIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { ChakraProvider } from "@chakra-ui/provider";


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return (
        <>
            <Button bg="transparent" size="lg" p={1} leftIcon={<FontAwesomeIcon icon={faBars} />} variant="solid" onClick={onOpen}></Button>
            <Drawer isFullHeight={true} closeOnOverlayClick={true} closeOnEsc={true} size="md" isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent maxW="300px">
                    <Flex justifyContent="center" alignItems="center">
                    <DrawerCloseButton size="lg" />
                    <DrawerHeader fontSize="2xl" fontWeight="bold" color="teal">Navigation</DrawerHeader>
                    </Flex>
                    <DrawerBody pb="4">
                        <Flex mt={10} gap={10} flexDirection="column">
                            <Button as={Link} to="/">Home</Button>
                            <Button as={Link} to="/translate">Translate</Button>
                            <Button as={Link} to="/currency">Currency</Button>
                            <Button as={Link} to="/landmarks">Landmarks</Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Sidebar;