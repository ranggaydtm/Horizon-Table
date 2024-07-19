import { Box, SimpleGrid } from "@chakra-ui/react";
import TableDevelopment from "./components/TableDevelopment";
import TableCheck from "./components/TableCheck";
import TableColumn from "./components/TableColumns";
import TableComplex from "./components/TableComplex";

export default function DataTable() {
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid mb="20px" columns={{ sm: 1, md: 2 }} spacing={{ base: "20px", xl: "20px" }}>
          <TableDevelopment />
          <TableCheck />
          <TableColumn />
          <TableComplex />
        </SimpleGrid>
      </Box>
    </>
  );
}
