import React from "react";
import "./Home.css";
import Hero from '../../Components/Hero/Hero'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from'react';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div>
            <Hero/>
            <div data-aos="fade-up" id="about">
              <div className="aboutHeader">
                <h1>About:</h1>
              </div>
              <div className="aboutSection" >
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-w-3Vvxwe4BKf2yRMN0bt19f83qvRDFu2g&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-w-3Vvxwe4BKf2yRMN0bt19f83qvRDFu2g&usqp=CAU"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-w-3Vvxwe4BKf2yRMN0bt19f83qvRDFu2g&usqp=CAU"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
              </div>
            
            </div>
          </div>;
};

export default Home;
