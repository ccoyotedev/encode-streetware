import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
}

export const Modal = ({ children, open, onClose, title }: Props) => {
  return (
    <ChakraModal onClose={onClose} isOpen={open} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontSize="2xl">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody padding="8">{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
