import {FormControl, FormLabel, Input} from "@chakra-ui/react";

export default function TextControl({label, placeholder, value, setValue, isRequired, isDisabled}) {
    return (
        <FormControl direction="column" w="full" isRequired={isRequired} justifyContent="center" alignItems="center"
                     flex={1} my={2}>
            {label && <FormLabel>{label}</FormLabel>}
            <Input type="text"
                   placeholder={placeholder}
                   value={value}
                   isDisabled={isDisabled}
                   onChange={e => {
                       setValue(e.target.value)
                   }}
            />
        </FormControl>
    );
}