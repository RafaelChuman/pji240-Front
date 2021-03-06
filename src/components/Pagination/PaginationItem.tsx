import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageClick: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageClick
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        
        size={"sm"}
        fontSize="xs"
        width="4"
        colorScheme={"pink"}
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => onPageClick(number)}
        size={"sm"}
        fontSize="xs"
        width="4"
        bgColor="gray.700"
        _hover={{
          bgColor: "gray.500",
        }}
      >
        {number}
      </Button>
    );
  }
}
