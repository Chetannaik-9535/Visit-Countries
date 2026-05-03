import styled from 'styled-components'

export const CountriesListItems = styled.li`
     display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        list-style: none;
         list-style-type: none;
        margin : 1px;
`

export const CountriesListContainer = styled.div`
     display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
`
export const CustomLine = styled.hr`
     border: none;               
  height: 2px;                /* Sets how thick the line is */
  background-color: #334155;  /* Sets the color of the line */
  width: 75vw;                /* Ensures it stretches across its container */

`

export const NameAndButtonCon = styled.div`
          display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin : 1px;
`

export const CountryName = styled.p`
     font-family : 'Roboto';
     font-size : 17px;
     color : #ffffff;
     font-weight : bold;
     margin: 10px;
`

export const CustomButton = styled.button`
     font-family : 'Roboto';
     font-size : 11px;
     color : ${props => (props.isVisited ? '#94a3b8' : '#ffffff')};
     background-color: ${props =>
       props.isVisited ? 'transparent' : '#3b82f6'};
     font-weight : bold;
     height: 25px;
     width: 55px;
     border: none;
     border-radius : 3px;
     margin: 10px;
     cursor : pointer;
`
export const VisitedButton = styled.p``
