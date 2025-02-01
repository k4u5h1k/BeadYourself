import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getMediumData } from "../medium.js";
import { useState, useEffect } from 'react';

var theme = createTheme();
theme = responsiveFontSizes(theme);

const getTextToCard = async () => {
    const posts = await getMediumData();
    return posts;
    // for (let post of posts.items){
    //     const newItem = document.createElement('col');
    //     newItem.className = 'col';
        
    //     const title = post.title;
    //     const link = post.link;
    //     const thumbnail = post.thumbnail;
    //     const pubDate = post.pubDate;
    //     const author = post.author;

    //     newItem.innerHTML = `<div class="card">
    //     <img src="${thumbnail}" class="card-img-top" alt="Medium Text Thumbnail">
    //     <div class="card-body">
    //       <a href="${link}"><h5 class="card-title">${title.toUpperCase()}</h5></a>
    //       <p class="card-text">Published by ${author} in ${pubDate}</p>
    //     </div>
    //   </div>`;

    //     $cards.appendChild(newItem)

    // }
};

const getFeedTitle = async () => {
    const data = await getMediumData();
    return data.feed.title;
}

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(function(){
    getTextToCard().then(result => {
      setPosts(result)
    })
  }, []);
  
  var containerStyle={
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', 
    paddingBottom: '1%', 
    backgroundColor: "white",
    borderRadius: "10px"
  }
  var boxStyle={
    marginTop: 4,
    paddingTop: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  }

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const icon_box_width = isMobile? '80vw':'60vw';
  var sizes = isMobile? {marginLeft: '5vw', marginRight: '5vw', textAlign: "justify"}:{marginLeft: '15vw', marginRight: '15vw', textAlign: "justify"}

  return (
    <>
      <Box className="header"></Box>
      <Box className="cards"></Box>
      <Nav/>
      <Typography variant="h3" align="center" style={{"color": "#98abc4", marginTop:"5vh", fontWeight: "bold"}} >Bookclub Blog</Typography>
      <Container 
        component="main" 
        maxWidth="xl" 
        style={containerStyle}>
        <Box
          sx={boxStyle}
        >
          <Box
            component="img"
            src="/blog_banner.jpg"
            style={{
              zIndex: '1',
              width: '100%',
              height: '50vh',
              objectFit: 'cover',
              objectPosition: '40% 50%'
            }}
          >
          </Box>
          <Typography variant="subtitle1" style={{marginTop: '5vh', ...sizes}}>
            Our Blogs provide accounts of the interesting discussions that are conducted at our quarterly <b>Bookclub Meet Events</b>.
            We engage in Bibliotherapy as the principal element of these meets.
            Bibliotherapy is better understood as the process of reading, reflecting upon, and discussing literature (<i>personal narratives and stories</i>). This discussion of curated literature promotes cognitive shifts within the reader.
            It is crucial to note that bibliotherapy differs from self-help strategies as the reflection and discussions of literature take place in a structured setting .
            The reading material is also subjected to scrutiny and has a specific purpose or problem that it addresses.
            The use of books in a systematic clinical setting offers the possibility of improving mental health at a low cost.
            Email us at <a href="mailto:info@mindspacematters.com">info@mindspacematters.com</a> to receive more information about our next meet.
          </Typography>
            
          { 
            posts != null && posts.status == 'ok' ? (posts.items.map(function(post){
              console.log(post['title'])
              return <>
                <Link href={post['title']} color="#98abc4">
                  {/* <Box style={{display: 'inline-block', margin: '10px 0'}}> */}
                  {/* <Box */}
                  {/*   component="img" */}
                  {/*   src={post['thumbnail']} */}
                  {/*   style={{ */}
                  {/*     float: 'left', */}
                  {/*     width: '30%' */}
                  {/*   }} */}
                  {/* /> */}
                  <Typography variant="h4" style={{"color": "#98abc4", textDecoration: 'none', fontWeight: "bold"}} >{post['title']}</Typography>
                  {/* </Box> */}
                </Link>
                <br/>
                <Divider variant="middle" />
                <br/>
              </>
            })):<></>
          }
        </Box>
      </Container>
    </>
  );
}
