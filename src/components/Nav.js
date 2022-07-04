import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 
export function Nav(){
    const [back, setBack] = useState(0);
    

    useEffect(()=>{
        const interval = setInterval(() => {
            const wdH = window.scrollY;
            wdH < 5 ? setBack('black') : setBack('tranparent')
        }, 1000);
        return () => clearInterval(interval)
    },[])

    return(
        <NavBar style={{backgroundColor:back}}>
            <ImgNetflix src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'/>
            <div>
                <Link style={{color:'white', padding:'1vw'}} to='/'>Inicio</Link>
                <Link style={{color:'white', padding:'1vw'}} to='/series'>Series</Link>    
                <Link style={{color:'white', padding:'1vw'}} to='/movies'>Filmes</Link>    
                <Link style={{color:'white', padding:'1vw'}} to='/toprated'>Mais Assistidos</Link>
            </div>
        </NavBar>
    )
   
}
const NavBar = styled.nav`
    position:fixed;
    height:50px;
    width:100vw;
    align-items:center;
    display:flex;
`;

const ImgNetflix = styled.img`
    height:40px;
    padding: 5px 2vw;
`;