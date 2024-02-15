
import './App.scss';
import Button from '@mui/material/Button';
import { Card, TextField, Checkbox, FormGrou, RadioGroup, FormControlLabel, Radio, FormLabel, Slider, Container, Box, Grid, Typography } from '@mui/material';
function App() {
  return (
    <>
      {/* <div className="form-wrapper" > */}
      {/* <Card sx={{ width: 600, height: 'fit-content', marginTop: '50px', padding: "40px" }}>
          <form>
            <TextField variant='outlined' size='small' label="First Name" sx={{ marginBottom: '20px' }} />
            <TextField variant='outlined' size='small' label="Last Name" sx={{ marginLeft: '30px', marginBottom: '20px' }} />
            <TextField variant='outlined' size='small' label="Email" sx={{ marginBottom: '20px' }} />
            <TextField variant='outlined' size='small' label="Mobile" sx={{ marginLeft: '30px', marginBottom: '20px' }} />

            <div style={{marginBottom:"15px"}}>
              <FormLabel>Course</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                row="row"
              >
                <FormControlLabel value="BTech" control={<Radio />} label="BTech" />
                <FormControlLabel value="MTech" control={<Radio />} label="MTech" />
                <FormControlLabel value="BCA" control={<Radio />} label="BCA" />
              </RadioGroup>
            </div>

            <div style={{marginBottom:"15px"}}>
              <FormLabel>FE Frameworks</FormLabel>
              <FormGroup row="row">
                <FormControlLabel control={<Checkbox />} label="Angular" />
                <FormControlLabel control={<Checkbox />} label="React" />
                <FormControlLabel control={<Checkbox />} label="Vue" />
                <FormControlLabel control={<Checkbox />} label="NextJS" />
              </FormGroup>
            </div>

            <div style={{marginBottom:"15px"}}>
              <FormLabel>English Proficiency Range</FormLabel>
              <Slider
                size="small"
                defaultValue={12}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </div>
          </form>
        </Card> */}
      <Grid container >
        <Grid item md={4} sm={6} xs={12} lg={3}  padding={2}>
          <Card >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis leo ac velit varius facilisis nec eu odio. Vivamus aliquam velit at velit convallis tristique. Nulla tincidunt vitae mi vitae aliquet. Nulla facilisi. Sed varius felis sit amet libero rhoncus scelerisque.
            </Typography>
          </Card>
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={3} padding={2}>
          <Card>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis leo ac velit varius facilisis nec eu odio. Vivamus aliquam velit at velit convallis tristique. Nulla tincidunt vitae mi vitae aliquet. Nulla facilisi. Sed varius felis sit amet libero rhoncus scelerisque.
            </Typography>
          </Card>
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={3} padding={2}>
          <Card>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis leo ac velit varius facilisis nec eu odio. Vivamus aliquam velit at velit convallis tristique. Nulla tincidunt vitae mi vitae aliquet. Nulla facilisi. Sed varius felis sit amet libero rhoncus scelerisque.
            </Typography>
          </Card>
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={3} padding={2}>
          <Card>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis leo ac velit varius facilisis nec eu odio. Vivamus aliquam velit at velit convallis tristique. Nulla tincidunt vitae mi vitae aliquet. Nulla facilisi. Sed varius felis sit amet libero rhoncus scelerisque.
            </Typography>
          </Card>
        </Grid>
      </Grid>


      {/* </div> */}
    </>
  );
}

export default App;
