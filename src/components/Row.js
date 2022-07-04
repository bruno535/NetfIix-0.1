import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Movie } from './Movie.js'
import { 
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { getMovies, getMovieVideo } from '../api';

const imageBaseurl = 'https://image.tmdb.org/t/p/original/';

export function Row({title, path}) {
    const [movies, setMovie] = useState([]);
    const [video, setVideo] = useState();
    const [show, setShow] = useState(false);

    const fetchMovies = async (path) =>{
        const data = await getMovies(path);
        setMovie(data.results);
        
    }

    useEffect(()=>{
        fetchMovies(path)
    },[path])

    const settings = {
        accessiblity: true,
        arrows: false,
        fade:false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
    };
    return (
        <>
            {show ? Movie(video) : null}
            <div>
                <H2Title>{title}</H2Title>

                <DivSlider>
                    <Slider {...settings}>
                        {movies.map((movie)=>{
                            const fetchVideo = async (movie) => {
                                const data = await getMovieVideo(movie);
                                const key = data.results[0].key;
                                setVideo(key);    
                            }
                            
                            return( 
                                <div 
                                    key={movie.title}
                                    onClick={()=>{
                                        fetchVideo(movie.id);
                                        setShow(old => !old)
                                    }}
                                >
                                    <ImgMovie src={`${imageBaseurl}${movie.poster_path}`}/>
                                </div>
                            )
                        })}
                    </Slider>
                </DivSlider>
            </div>
        </>
        
    )   
}
const DivMain = styled.div`

`;
const DivSlider = styled.div`
    margin-left: 2vw;
    margin-right:2vw;
`;
const ImgMovie = styled.img`
    cursor:pointer;
    width:98%;
    height:20vh;
    border-radius:6px;
    object-fit:cover;
    object-position:center;
    filter: brightness(0.9);

    &:hover{
        filter: brightness(1);
    }
`
const H2Title = styled.h2`
    padding:0 2vw;
`;