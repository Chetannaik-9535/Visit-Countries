import styled from 'styled-components'

export const VisitedCountriesList = styled.li`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color : #1f1f2f;
    background-size : cover;
    height : 200px;
    width : 250px;
    margin : 1px;
`
export const CountyFlag = styled.img`
    height : 200px;
    width : 250px;
`

export const UnderContainer = styled.div`
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`
export const CountryName = styled.p`
    font-family : 'Roboto';
     font-size : 14px;
     color : #ffffff;
     font-weight : bold;
     margin: 10px;
`
export const CustomButton = styled.button`
    font-family : 'Roboto';
     font-size : 11px;
     color : #ffffff;
     background-color: transparent;
     font-weight : bold;
     height: 22px;
     width: 50px;
     border: 1px solid #cbd5e1;
     border-radius : 3px;
     margin: 10px;
     cursor : pointer;

`
