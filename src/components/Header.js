import { React, useState} from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Grid, makeStyles } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import red from "@material-ui/core/colors/red";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    color: 'white'
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleDateChange = (date) => {
    props.setSelectedDate(date);
  };

  let channels = props.data ? Object.keys(props.data) : ["Loading"];
  if (channels.length === 0) {
    channels = ["No data available"]
  }

  const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: red,
    },
  });

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChannelChange = (event, newValue) => {
    props.setChannel(channels[newValue]);
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h6">
              Channels:
            </Typography>
            <Tabs value={value} onChange={handleChannelChange} aria-label="simple tabs example">
              <Tab label={channels[0]} {...a11yProps(0)} />
              <Tab label={channels[1]} {...a11yProps(1)} />
              <Tab label={channels[2]} {...a11yProps(2)} />
              <Tab label={channels[3]} {...a11yProps(3)} />
              <Tab label={channels[4]} {...a11yProps(4)} />
            </Tabs>
            <ThemeProvider theme={defaultMaterialTheme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  id="date-picker-inline"
                  label=""
                  value={props.selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                    className: classes.input
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                  InputLabelProps={{
                    className: classes.input
                  }}
                />
              </MuiPickersUtilsProvider>
            </ThemeProvider>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;