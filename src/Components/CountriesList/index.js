import {
  CountriesListItems,
  CountriesListContainer,
  NameAndButtonCon,
  CountryName,
  CustomButton,
  CustomLine,
  VisitedButton,
} from './styledComponents'

const CountriesList = props => {
  const {countriesListDetails, toggleVisitStatus} = props
  const {name, isVisited, id} = countriesListDetails

  const onClickButton = () => {
    toggleVisitStatus(id)
  }

  return (
    <CountriesListItems>
      <CountriesListContainer>
        <NameAndButtonCon>
          <CountryName>{name}</CountryName>
          {isVisited ? (
            <VisitedButton>Visited</VisitedButton>
          ) : (
            <CustomButton type="button" onClick={onClickButton}>
              Visit
            </CustomButton>
          )}
        </NameAndButtonCon>
        <CustomLine />
      </CountriesListContainer>
    </CountriesListItems>
  )
}

export default CountriesList
