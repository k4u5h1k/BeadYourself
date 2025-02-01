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

export default function Portfolio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  var sizes = isMobile? {marginLeft: '5vw', marginRight: '5vw', textAlign: "justify"}:{marginLeft: '15vw', marginRight: '15vw', textAlign: "justify"}
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
      {/*<RedType variant="h4">Research Vision</RedType>*/}
      <Typography variant="subtitle1" style={sizes}>
        We face the need to think more deeply about the emotional qualities of our Urban spaces and how lack of these ‘<i>inspiring spaces</i>’ may mostly block the capacity to experience & contribute to care . 
        <br/>
        Through a close exploration of our urban spaces built mostly for commuting we contend
        that care work, particularly mothering, remains an essential though invisible, unacknowledged
        and unaccounted aspect of the economy.
        <br/>

        We note with concern how mothering  is often essentialized to women &  how the emotions of mothering and care leveraged have not yet been taken into account while planning urban spaces. 
        To us care is as much an emotion as it is a practice. 
        Emotionally we understand care as commitment but needs to be considered as <b>Emotional labour</b>.
        <br/>

        Our methodology involved drawing upon our deeply reflexive autobiographical exchanges that are ongoing dialogues over emails that are informal,
        spontaneous, emotional and extremely insightful exchanges on this topic that would have otherwise remained outside the ambit of formal knowledge making.
        In these interviews we take turns to discuss and frame our positions by interpreting our experiences together. 
        In this sense therefore, our methodology transcends a conventional interview. 
        It goes well beyond what Ellis <i>(2004)</i> terms ‘<i>reflexive dyadic interview</i>’, to include more inputs and blur the lines of power between interviewer and participant to give an equal voice to both of us while also relying on existing publications wherever necessary.
        <br/>

        We aim to create awareness and advocate inclusion for women in planning urban spaces while recognizing their emotional labour and its impact on their mental health thereby seeking <i>#gender justice</i>.
        Participants are from different generations and dissimilar cultural contexts and at distinct stages of their lives.
        We find that silences around balancing the professional and the personal in the
        praxis of geography are telling and that the subconscious notion about the utility of public space for leisure and not just as a means of commuting for errands needs to be challenged.
      </Typography>
      </Box>
    </Container>
  );
}
