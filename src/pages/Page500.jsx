import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// material
import { Box, Button, Typography, Container } from '@mui/material';
// components
import Page from '../shared/components/Page';
import { SeverErrorIllustration } from '../shared/assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <RootStyle title="Технические работы">
      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Технические работы
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Пожалуйста, попробуйте позднее.</Typography>

          <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Домой
          </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
