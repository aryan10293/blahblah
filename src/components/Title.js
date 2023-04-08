import { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.css";
function Title(){
    const style = {
        width: '18rem'
    }
    const Movie = (props) => {
        return (
            <>
                <div className="card p-2" style={style}>
                    <img src={props.imgSrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.description}</p>
                        <button className="btn btn-primary">Leave review</button>
                        {/* <a href="#" className="btn btn-primary">Up vote</a>
                        <a href="#" className="btn btn-primary">Down Vote</a> */}
                    </div>
                </div>
            </>
        )
    }

    return  (
        <>
            <div className='d-flex flex-row mb-3'>
                <Movie  
                imgSrc='https://th.bing.com/th/id/R.f54d589f7c8c608b70fcfe61ff9ed24e?rik=cXPu79IDvnjF8g&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2015%2f04%2fDope-Poster-2.jpg&ehk=BDDJTZ1rOf7OKBuAPxcAvVNfmccRKrm%2f%2fFeu0EuZ%2b28%3d&risl=&pid=ImgRaw&r=0'
                title= 'Dope'
                description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae earum perspiciatis expedita quia nisi? Natus fugi'
                />
                <Movie  
                imgSrc='https://th.bing.com/th/id/R.4060aa4d7126352405c653aa1b0a9cd4?rik=PPGiBeQcM%2f8Dhw&pid=ImgRaw&r=0'
                title= '22 Jump street'
                description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae earum perspiciatis expedita quia nisi? Natus fugi'
                />
                <Movie 
                imgSrc='https://th.bing.com/th/id/R.5cf2e360df0326fbc10e3e1916557e35?rik=E9i6QTzf%2bCyHZA&pid=ImgRaw&r=0'
                title='up'
                description='snookabut'
                />
            </div>

        </>
    )
}


export  default Title