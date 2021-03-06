import { Td, Tr, Text, Box, Button, Icon, Image } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { Product } from "../../services/hooks/useProducts";

interface TableLineProps {
  product: Product | undefined;
  isWideVersion: boolean | undefined;
}

export function ProductTableLine({
  product,
  isWideVersion = true,
}: TableLineProps) {
  if (!product) {
    return <></>;
  }

  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Text fontWeight="bold">{product.category?.name}</Text>
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{product.name}</Text>
        </Box>
      </Td>
      {isWideVersion && (
        <Td>
          <Image
            borderRadius={'4px'}
            border="1px"
            borderColor={"gray.900"}
            src={product.image}
            alt={product.name}
            boxSize="150px"
            objectFit="cover"
          ></Image>{" "}
        </Td>
      )}
      <Td>
        <Box>
          <Text fontWeight="bold">
            {product.quantityValue} {product.quantityUnit}
          </Text>
        </Box>
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{product.value}</Text>
        </Box>
      </Td>
      <Td>
        <Button
          size="sm"
          fontSize={"sm"}
          colorScheme="purple"
          p={!isWideVersion ? "0" : "3"}
          margin="0"
        >
          <Icon as={RiPencilLine} fontSize="16" />
          {isWideVersion && <p>&nbsp; Editar</p>}
        </Button>
      </Td>
    </Tr>
  );
}
