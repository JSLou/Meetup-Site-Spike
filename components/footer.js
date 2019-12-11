import styled from '@emotion/styled';
import { Box, Flex } from '@theme-ui/components';

const Container = styled(Flex)({
  width: '100%',
});

const Footer = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: 'muted',
          width: '50%',
          borderRight: '1px solid red',
        }}>
        Footer-Left
      </Box>
      <Box
        sx={{
          backgroundColor: 'muted',
          width: '50%',
        }}>
        Footer-Right
      </Box>
    </Container>
  );
};

export default Footer;
