import styled from "styled-components";


export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #BABABA; 
        
    }
`;


export const Data = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;

    margin-top: 28px;
   
`;

export const HabitosDiv = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const HabitosDivList = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
   
`;

export const HabitosText = styled.div`
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        color: #666666;     

    h1 {
        font-size: 20px;
        line-height: 25px;
        
    }

    p {
        font-size: 13px;
        line-height: 16px;
    }
     
`;

export const HabitosTextList = styled.div`
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        color: #666666;    
        
        display: flex;
        justify-content: space-between;
        

    h1 {
        font-size: 20px;
        line-height: 25px;        
    }

    img {
        width: 13px;
        height: 15px;
    }
    
     
`;
export const CheckDiv = styled.div`
    width: 69px;
    height: 69px;
    background: ${(props) => props.status === true ? "#8FC549" : "#EBEBEB"};  
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {

    }
`;

