import React from 'react'
import PropTypes from 'prop-types'

function LanguagesNav ({ selected, onUpdateLanguage }) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {languages.map((language, index) => (
        <li key={index}>
          <button
            className='btn-clear nav-link'
            style={language === selected ? {color:'blue'} : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render() {
    const { selectedLanguage } = this.state

    return (
      <React.Fragment>
        <LanguagesNav
          selected = {selectedLanguage}
          onUpdateLanguage = {this.updateLanguage}
        />
      </React.Fragment>
    )
  }
}
