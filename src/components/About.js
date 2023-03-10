import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:"white"
    // })
    let myStyle = {
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
    }
    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                           <strong> Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta repellendus quae odio, maxime vitae natus corrupti! Nesciunt rerum optio accusantium totam aspernatur?
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                           <strong>Free to Use</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis rerum delectus iure sunt, amet soluta illum culpa autem? Fugit similique perspiciatis ducimus vel? 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Browser Compatible</strong>
                        </button >
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque nemo aut alias aperiam voluptatem dolorem magni. Enim molestiae rerum cupiditate ratione aut.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
