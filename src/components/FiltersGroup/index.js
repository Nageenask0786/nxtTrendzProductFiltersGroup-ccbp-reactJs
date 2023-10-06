import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    changeCategory,
    changeRating,
    ratingsList,
    changeSearchInput,
    clearFilters,
    onEnterSearchInput,
  } = props
  const OnChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onKeyEnter = event => {
    if (event.target.value === 'Enter') {
      onEnterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="input-search">
        <input
          type="search"
          onChange={OnChangeSearchInput}
          onKeyDown={onKeyEnter}
        />
      </div>
      <div>
        <h1>Category</h1>
      </div>
      <div>
        <h1>Rating</h1>
      </div>
      <ul>
        {categoryOptions.map(each => (
          <li key={each.categoryId}>
            <p type="button" onClick={() => changeCategory(each.categoryId)}>
              {each.name}
            </p>
          </li>
        ))}
      </ul>
      <ul>
        {ratingsList.map(each => (
          <li key={each.ratingId}>
            <button type="button" onClick={() => changeRating(each.ratingId)}>
              <img src={each.imageUrl} alt={`rating ${each.ratingId}`} />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => clearFilters()}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
