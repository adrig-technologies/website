import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import ReactTypingEffect from 'react-typing-effect';

export default function Index() {
  return (
    <>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <Container sx={{ height: 'inherit' }}>
        <Grid
          container
          justifyContent='stretch'
          alignItems='center'
          sx={{ height: '100%' }}
        >
          <Grid item xs={12} textAlign='center'>
            <Box
              sx={{
                //p: 0.5,
                px: 0.3,
                my: 1,
                //borderRadius: 8,
                bgcolor: 'secondary.contrastText',
                color: 'secondary.main',
                display: 'inline-block',
              }}
            >
              <Typography fontWeight='bold' variant='subtitle1'>
                AI TECHNOLOGIES
              </Typography>
            </Box>
            <div>ADRIG</div>
            <Typography fontWeight='normal' color='text.primary' variant='h5'>
              <ReactTypingEffect
                text={[
                  'solving real-world problems',
                ]}
                speed={50}
                staticText='We'
              />
            </Typography>
            <Button
              sx={{ fontWeight: 'bold', mt: 2 }}
              variant='contained'
              color='secondary'
            >
              Go to Blog
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}