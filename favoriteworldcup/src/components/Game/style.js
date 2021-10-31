import styled from "styled-components";

export const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
height: 100vh;

.flex-1{
    flex:1;
    min-width: 500px;
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
    background-color: white;
    padding : 0px 30px;
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
    color: white;
    bottom:10%;
    font-size: 70px;
    left:50%;
    transform: translateX(-50%);

}

`
