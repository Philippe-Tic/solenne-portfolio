import { Welcome } from "@/src/components/Welcome";
import { Box } from "@chakra-ui/react";

export const metadata = {
  title: {
    default: 'Solenne Dauriac | Welcome',
    template: 'Portfolio de Solenne Dauriac',
  },
}

export default function Home() {
  return (
    <Box>
      <Welcome />
    </Box>
  )
}
