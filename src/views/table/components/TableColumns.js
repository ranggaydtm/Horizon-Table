import moment from "moment";
import Card from "../../../components/card/Card";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  SimpleGrid,
  Flex,
  Text,
  IconButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IconSquareRoundedPlus, IconPencil, IconTrash } from "@tabler/icons-react";

const ColumnsData = [
  {
    id: 1,
    name: "Marketplace",
    progress: 75.5,
    quantity: 2458,
    date: "2021-01-10",
  },
  {
    id: 2,
    name: "Venus DB PRO",
    progress: 35.4,
    quantity: 1485,
    date: "2021-02-21",
  },
  {
    id: 3,
    name: "Venus DS",
    progress: 75.5,
    quantity: 1024,
    date: "2021-01-10",
  },
  {
    id: 4,
    name: "Venus DB Asset",
    progress: 35.4,
    quantity: 858,
    date: "2021-02-21",
  },
];

function TableColumn() {
  const [datas, setDatas] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const [payload, setPayload] = useState({
    name: "",
    progress: "",
    quantity: "",
    date: "",
  });

  const handleOpen = (item = null) => {
    if (item) {
      setPayload(item);
      setCurrentValue(item);
    } else {
      setPayload({
        name: "",
        progress: "",
        quantity: "",
        date: "",
      });
      setCurrentValue(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = () => {
    if (currentValue) {
      setDatas(datas.map((item) => (item.id === currentValue.id ? payload : item)));
    } else {
      setDatas([...datas, { ...payload, id: datas.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setDatas(datas.filter((item) => item.id !== id));
  };

  const handleSearch = (e) => {
    const filterSearch = ColumnsData.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setDatas(filterSearch);
  };

  useEffect(() => {
    setDatas(ColumnsData);
  }, []);

  return (
    <>
      {open && (
        <Modal isOpen={open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{currentValue ? "Edit Data" : "Add Data"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SimpleGrid spacing={4}>
                <FormControl>
                  <FormLabel px="5px">Name</FormLabel>
                  <Input type="text" placeholder="Input Name" value={payload.name} onChange={handleChange} />
                </FormControl>
                <FormControl>
                  <FormLabel px="5px">Progress</FormLabel>
                  <Input type="number" placeholder="Input Progress" value={payload.progress} onChange={handleChange} />
                </FormControl>
                <FormControl>
                  <FormLabel px="5px">Quantity</FormLabel>
                  <Input type="text" placeholder="Input Quantity" value={payload.quantity} onChange={handleChange} />
                </FormControl>
                <FormControl>
                  <FormLabel px="5px">Date</FormLabel>
                  <Input type="date" placeholder="Input Date" value={payload.date} onChange={handleChange} />
                </FormControl>
              </SimpleGrid>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit}>{currentValue ? "Update" : "Submit"}</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      <Card direction="column" w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700">
            4-Column Table
          </Text>
          <Flex direction="row">
            <Input type="search" w="200px" placeholder="Search" borderRadius="30px" fontWeight="500" fontSize="small" onChange={handleSearch} />
            <IconButton onClick={() => handleOpen()}>
              <IconSquareRoundedPlus />
            </IconButton>
          </Flex>
        </Flex>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Progress</Th>
              <Th>Quantity</Th>
              <Th>Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {datas.map((item) => (
              <Tr key={item.id}>
                <Td fontSize="14px">{item.name}</Td>
                <Td fontSize="14px">{item.progress}%</Td>
                <Td fontSize="14px">{item.quantity}%</Td>
                <Td fontSize="14px">{moment(item.date).format("D MMMM YYYY")}</Td>
                <Td>
                  <Flex direction="row" alignContent="start" alignItems="start">
                    <IconButton onClick={() => handleOpen(item)}>
                      <IconPencil />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)}>
                      <IconTrash color="red" />
                    </IconButton>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </>
  );
}

export default TableColumn;
