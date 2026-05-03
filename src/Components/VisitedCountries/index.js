import {
  VisitedCountriesList,
  CountyFlag,
  UnderContainer,
  CountryName,
  CustomButton,
} from './styledComponents'

const VisitedCountries = props => {
  const {visitedCountriesDetails, toggleVisitStatus} = props
  const {id, imageUrl, name} = visitedCountriesDetails

  const onClickRemoveButton = () => {
    toggleVisitStatus(id)
  }

  return (
    <VisitedCountriesList>
      <CountyFlag src={imageUrl} alt="thumbnail" />
      <UnderContainer>
        <CountryName>{name}</CountryName>
        <CustomButton type="button" onClick={onClickRemoveButton}>
          Remove
        </CustomButton>
      </UnderContainer>
    </VisitedCountriesList>
  )
}

export default VisitedCountries
