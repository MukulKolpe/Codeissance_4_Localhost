import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Hero />
      <div data-aos="fade-up" id="about" className="home-cards">
        <div className="aboutHeader">
          <span className="quote">
            <i>"The Future is decentralised"</i>
          </span>
        </div>
        <div className="aboutSection">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.pixabay.com/photo/2018/03/31/05/07/blockchain-3277336_960_720.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Secure your documents
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A blockchain is essentially a digital ledger of transactions
                that is duplicated and distributed across the entire network of
                computer systems on the blockchain.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Get verified faster
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A blockchain is essentially a digital ledger of transactions
                that is duplicated and distributed across the entire network of
                computer systems on the blockchain.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.pixabay.com/photo/2019/01/22/08/02/smartphone-3947607_960_720.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Create your digital identity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A blockchain is essentially a digital ledger of transactions
                that is duplicated and distributed across the entire network of
                computer systems on the blockchain.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
