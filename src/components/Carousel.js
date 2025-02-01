import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const { innerWidth: width, innerHeight: height } = window;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  // const images = [
  //   {
  //     label: 'San Francisco – Oakland Bay Bridge, United States',
  //     imgPath:
  //       `https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=${width/2}&h=${height/2}&q=60`,
  //   },
  //   {
  //     label: 'Bird',
  //     imgPath:
  //       `https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=${width/2}&h=${height/2}&q=60`,
  //   },
  //   {
  //     label: 'Bali, Indonesia',
  //     imgPath:
  //       `https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=${width/2}&h=${height/2}&q=80`,
  //   },
  //   {
  //     label: 'Goč, Serbia',
  //     imgPath:
  //       `https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=${width/2}&h=${height/2}&q=60`,
  //   },
  // ];
  var images = [];
  for(var i=1;i<=10;i++){
    images[i-1] = {
      label: `image ${i}`,
      imgPath:`/img${i}.jpg`,
    };
  }
  console.log(images)

    // const images = [
    //   {
    //     label: 'San Francisco – Oakland Bay Bridge, United States',
    //     imgPath:
    //       `/img1.jpg`,
    //   },
    //   {
    //     label: 'Bird',
    //     imgPath:
    //       `/img2.jpg`,
    //   },
    //   {
    //     label: 'img3',
    //     imgPath:
    //       `/img3.jpg`,
    //   }
    // ];

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 , overflow: "hidden"}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx = {{
                  // maxHeight: "95vh",
                  maxHeight: "800px",
                  maxWidth: "2000px",
                  margin: "auto",
                  borderRadius: "10px",
                  marginTop: "10px",
                  overflow: "hidden",
                  // alignSelf: "center",
                  // justifySelf: "center"
                }}
              >
              <Box
                component="img"
                sx={{
                  display: 'block',
                  // position: "absolute",
                  // maxWidth: '100%',
                  // overflow: 'scroll',
                  // clipPath: "inset(200px 0px 200px 0px)",
                  // scrollbarWidth: 'none',
                  // scrollbarGutter: 'none',
                  marginTop: "-42%",
                  width: '100%',
                  // borderRadius: '20px',
                  alignSelf: 'center',
                  justifySelf: 'center'
                }}
                src={step.imgPath}
                alt={step.label}
                style={{'color': "#98abc4"}}
              />
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper */}
      {/*   steps={maxSteps} */}
      {/*   position="static" */}
      {/*   activeStep={activeStep} */}
      {/*   nextButton={ */}
      {/*     <Button */}
      {/*       size="small" */}
      {/*       onClick={handleNext} */}
      {/*       disabled={activeStep === maxSteps - 1} */}
      {/*       style={{'color': "#98abc4"}} */}
      {/*     > */}
      {/*       Next */}
      {/*       {theme.direction === 'rtl' ? ( */}
      {/*         <KeyboardArrowLeft /> */}
      {/*       ) : ( */}
      {/*         <KeyboardArrowRight /> */}
      {/*       )} */}
      {/*     </Button> */}
      {/*   } */}
      {/*   backButton={ */}
      {/*     <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{'color': "#98abc4"}} > */}
      {/*       {theme.direction === 'rtl' ? ( */}
      {/*         <KeyboardArrowRight /> */}
      {/*       ) : ( */}
      {/*         <KeyboardArrowLeft /> */}
      {/*       )} */}
      {/*       Back */}
      {/*     </Button> */}
      {/*   } */}
      {/*   style={{'color': "#98abc4"}} */}
      {/* /> */}
    </Box>
  );
}

export default Carousel;
