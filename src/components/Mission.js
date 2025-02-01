import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const RedType = styled(Typography)`
  color: #98abc4;
  font-weight: bold;
  margin-bottom: 2vh;
`;

export default function Mission() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  var sizes = isMobile ? {marginLeft: '10vw', marginRight: '10vw', textAlign: "justify"}:{marginLeft: '15vw', marginRight: '15vw', textAlign: "justify"}

  return (
    <Container component="main" maxWidth="xl" style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', paddingBottom: '1%', backgroundColor: "white", borderRadius: "10px"}}>
      <Box
        sx={{
          marginTop: 4,
          paddingTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      {//<RedType variant="h4">Research Vision</RedType>
      }
      <Typography variant="subtitle1" style={sizes}>
        Mindspace Matters Research Foundation is a NGO <i>(Section 8,___)</i> Our Mission is to create an awareness about the mind & space impact, through our interdisciplinary research (<i>socio-legal</i>).We advocate the need for communal public spaces for women. Our focus is on the preservation and restoration of the vanishing "<i>ashwatt kattes</i>".
        <Box
          component="img"
          src="/katte.jpeg"
          style={{
            zIndex: '-1',
            display: 'block',
            margin: '0 auto',
            maxWidth: '80vw',
            marginTop: '10px',
            marginBottom: '10px',
            borderRadius: '10px',
          }}
        >
        </Box>
        Through our research we endeavor to highlight its significance as spaces where women feel safe to sit in solace in the urban public domain. The space facilitates organic formation of support groups with other women, outside their family ties and build a strong community bond that enables maintaining optimal mental health through the strain of emotional labour expected of women on a daily basis.
      </Typography>
      </Box>
    </Container>
  );
}
