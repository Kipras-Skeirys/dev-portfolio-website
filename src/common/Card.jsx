function Card(props) {

    const {title, description, upperTags, lowerTags, gitHubURL, liveDemoURL} = props

    return (
        <div className="Card">
            <div className="project-cont" onClick={() => { window.location.href = liveDemoURL ? liveDemoURL : gitHubURL }}>
                <div className="upper-tag-cont">
                    {
                        upperTags.map((tag, i) => {
                            return <div className="upper-tag" key={i}>{tag}</div>
                        })
                    }
                </div>
                <div className="gitHub-button-cont">
                    <a className="gitHub-button" href={gitHubURL} target="_blank" onClick={ (e) => e.stopPropagation() }>
                        <svg className="gitHub-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39.01"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path id="Octicons-mark-github" fillRule="evenodd" d="M20 0a20 20 0 0 0-6.32 39c1 .17 1.37-.43 1.37-.95v-3.73c-5 .93-6.33-1.22-6.73-2.35a7.16 7.16 0 0 0-2.05-2.82c-.7-.38-1.7-1.3 0-1.33s2.7 1.45 3.07 2.05a4.27 4.27 0 0 0 5.82 1.66 4.2 4.2 0 0 1 1.27-2.67C12 28.32 7.3 26.59 7.3 19a7.8 7.8 0 0 1 2.05-5.38 7.2 7.2 0 0 1 .2-5.3s1.68-.52 5.5 2.05a18.86 18.86 0 0 1 10 0c3.82-2.6 5.5-2.05 5.5-2.05a7.2 7.2 0 0 1 .2 5.3 7.75 7.75 0 0 1 2 5.38c0 7.67-4.68 9.37-9.13 9.87A4.72 4.72 0 0 1 25 32.52v5.5c0 .52.37 1.15 1.37.95A20 20 0 0 0 20 0" ></path> </g> </g> </svg>
                    </a>
                </div>
                <div className="project-text-cont">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </div>
                <div className="lower-tag-cont">
                    {
                        lowerTags.map((tag, i) => {
                            return <div className="lower-tag" key={i}>{tag}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card