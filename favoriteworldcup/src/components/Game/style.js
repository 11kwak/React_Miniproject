import styled from "styled-components";

export const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
height: 100vh;

.flex-1{
    flex:1;
    min-width: 400px;
    overflow: hidden;
    background-color: black;
    position: relative;
}

.title{
    position: absolute;
    z-index: 2;
    top:0;
    left:50%;
    transform: translateX(-50%);
    
    background-color:wheat;
    padding : 0px 10px;
    padding-bottom: 10px;
    text-transform: uppercase;

}

.food-img{
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
}

.food-img:hover{
    transform: scale(1.1);
    opacity: 0.8;

}

.name{
    position: absolute;
    z-index: 3;
    background-color: wheat;
    color: black;
    bottom:10%;
    font-size: 30px;
    left:50%;
    transform: translateX(-50%);

}

`
