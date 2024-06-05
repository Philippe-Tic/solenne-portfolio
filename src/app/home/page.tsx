import { Homepage as HomepageComponent } from "@/src/components/Homepage";
import { Box } from "@chakra-ui/react";

export const metadata = {
  title: {
    default: 'Solenne Dauriac | Portfolio',
    template: 'Portfolio de Solenne Dauriac',
  },
}

const Homepage = () => {
  return (
    <Box minH="100vh"
      background="#DEF0F7"
    >
      <HomepageComponent />
    </Box>
  )
}

export default Homepage;
