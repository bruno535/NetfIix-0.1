import React, { useState, useEffect } from 'react';
import { categories, getMovies } from '../api.js';
import styled from 'styled-components';

export function Banner(){
    const [movie, setMovie] = useState({});

    const fetchBannerRandom = async () =>{
        const netflixOriginals = categories.find((category)=>category.name === 'popular')
        const data = await getMovies(netflixOriginals.path);
        const movies = data.results;
        const randomIndex = Math.floor(Math.random()* movies.length)
        const movieId = movies[randomIndex]
        
        setMovie(movieId)
    }
    useEffect(()=>{
        fetchBannerRandom();
    },[])

    return(
        <div className="bannerImage" style={{
            marginBottom:'-100px',
            height:'75vh',
            backgroundSize:'cover',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}>
            <DivGradiente>
                <H1Name>{movie.title == null ? movie.name : movie.title}</H1Name>
                <H2Overview>{movie.overview}</H2Overview>
                <div>
                    <Button1>Assistir</Button1>
                    <Button2>Mais Informações</Button2>
                </div>
            </DivGradiente>              
        </div>
    )
}
const H1Name = styled.h1`
    padding:12vh 2vw;
    font-size:3vw;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
`;
const H2Overview = styled.h2`
    padding: 0 2vw 5vh 2vw; 
    width:50vw;
    height:25vh;
`;

const Button1 = styled.button`
    font-size:30px;
    border:none;
    border-radius:5px;
    margin-left:2vw;
    padding:5px 30px;
    cursor:pointer;

    &: hover{
        background-color:#bbbabacc;
    }
`;
const Button2 = styled.button`
    font-size:30px;
    color:white;
    background-color:#787878db;
    border:none;
    border-radius:5px;
    margin-left:5px;
    padding:5px 30px;
    cursor:pointer;

    &:hover{
        background-color:#7878789c;
    }
`;
const DivGradiente = styled.div`
    padding-bottom:200px;
    background: rgb(0,0,0);
    background: linear-gradient(65deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8309698879551821) 6%, rgba(0,212,255,0) 100%);
`;