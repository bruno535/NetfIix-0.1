import React from 'react';
import styled from 'styled-components';

export function Movie(video){
    return(
        <DivMovie>
            <ButtonVideo onClick={()=>{
                location.reload();
            }}>
                {'<< Voltar'}
            </ButtonVideo>
            
            
            <IframeVideo className='iframe' src={`https://www.youtube-nocookie.com/embed/${video}`} title="YouTube video player"allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;'} allowFullScreen={true}></IframeVideo>
        </DivMovie>
    )
}
const ButtonVideo = styled.button`
    position: absolute;
    top: 60px;
    color: white;
    background-color: black;
    font-size: 28px;
    margin-left: 2vw;
`;
const DivMovie = styled.div`
    position:absolute;
    top:0px;
    bottom:0;
    left:0;
    right:0;
    background-color:black;
`;
const IframeVideo = styled.iframe`
    width:100vw; 
    height:100vh;
    margin:auto;
    border: none;
`;