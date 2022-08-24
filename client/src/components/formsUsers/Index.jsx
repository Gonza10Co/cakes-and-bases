/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/actions/index';
import Login from './SignIn';
import Signup from './RegistrationForm';

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme();

const SignInUp=()=>{
	const dispatch = useDispatch();
	const { redData } = useSelector(state => state);
  const [value,setValue]=useState(0)
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

  const arrayImg = [];
  for (const product of redData) arrayImg.push(product.img_home.secure_url);
  const randomImg = Math.floor(Math.random() * 20);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

    return (
      <ThemeProvider theme={theme}>
        <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: `url(${arrayImg[randomImg]})`,
						backgroundRepeat: 'no-repeat',
						backgroundColor: t =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Sign In" />

            <Tab label="Sign Up" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Login handleChange={handleChange}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup/>
          </TabPanel>
          <Copyright sx={{ mt: 5 }} />
          </Grid>
        </Grid>
      </ThemeProvider>
    )
};

export default SignInUp;