
const FilterAndExplainText = ({ filterTech, setFilterTech, filterProjectType, setFilterProjectType }) => {

  return (
    <div className="wrapper-filter-and-explain-text">
    My versatile portfolio includes works in: 
    <span 
      className={`filter-link ${filterProjectType === 'data visualisation' && 'active'}`}
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterProjectType('data visualisation');
        setFilterTech('all') 
      }}>
      data visualisation
    </span>, 
    <span 
      className={`filter-link ${filterProjectType === 'data art' && 'active'}`}
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterProjectType('data art')
        setFilterTech('all')
      }}>
      data art
    </span>, 
    <span 
      className={`filter-link ${filterProjectType === 'creative coding' && 'active'}`}
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterProjectType('creative coding')
        setFilterTech('all')
      }}
    >
      creative coding
    </span>, 
    <span 
      className={`filter-link ${filterProjectType === 'front-end' && 'active'}`}
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterProjectType('front-end') 
        setFilterTech('all')
      }}>
      front-end
    </span> 
    <button onClick={() => { setFilterProjectType('all') }}>(reset)</button>


    <br></br>
    I often use JavaScript frameworks like 
    <span 
      className={`filter-link ${filterTech === 'Svelte' && 'active'}`}
      tabIndex={0} 
      role='button'
      onClick={() => { 
        setFilterTech('Svelte') 
        setFilterProjectType('all')
      }}
    >
      Svelte
    </span> and 
    <span 
      className={`filter-link ${filterTech === 'React' && 'active'}`} 
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterTech('React') 
        setFilterProjectType('all')
      }}
    >
      React
    </span>, 
    and libraries such as 
    <span 
      className={`filter-link ${filterTech === 'D3.js' && 'active'}`} 
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterTech('D3.js') 
        setFilterProjectType('all')
      }}>
      D3.js
    </span>, 
    <span 
      className={`filter-link ${filterTech === 'HTML5 Canvas' && 'active'}`}  
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterTech('HTML5 Canvas') 
        setFilterProjectType('all')
    }}>
      Canvas API
    </span>, 
    <span 
      className={`filter-link ${filterTech === 'p5.js' && 'active'}`}
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterTech('p5.js') 
        setFilterProjectType('all')
    }}>
      p5.js
    </span>, 
    <span 
      className={`filter-link ${filterTech === 'Three.js' && 'active'}`}
      tabIndex={0} 
      role='button' 
      onClick={() => { 
        setFilterTech('Three.js') 
        setFilterProjectType('all')
      }}>
      Three.js
    </span>
    <button onClick={() => { setFilterTech('all') }}>(reset)</button>

    <br></br>
    Larger image = project I did on my own or was a main contributor to. 
    Smaller image = project smaller in scope or in my involvement. 
    </div>
  )
}

export default FilterAndExplainText