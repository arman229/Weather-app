import React from "react";
import { Typography } from '@mui/material';
import { Container, Grid, Link   } from '@mui/material';
const Footer = () => {


    const styles = {
        color:"white",

        fontFamily: "Open Sans",
        fontStyle: 'italic',

        src: "local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(http://themes.googleusercontent.com/static/fonts/opensans/v8/PRmiXeptR36kaC0GEAetxjqR_3kx9_hJXbbyU8S6IN0.woff) format('woff')",
    };
    return (
        <footer style={{ backgroundColor: 'gray', color:"white", padding: '20px 0' }}>
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between">
                    <Grid item sm={6} xs={12}>
                        <Typography variant="body2" textAlign={{ xs: 'center', sm: 'left'  }}   >
                            &copy; {new Date().getFullYear()} Weather Web App. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography variant="body2" textAlign={{ xs: 'center', sm: 'right'  }} >
                            Designed and developed by{' '}
                            <Link   href="https://portfolio-arman.netlify.app"  style={styles}    target="_blank" rel="noopener" >
                                ARMAN
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;


export  { Footer};
