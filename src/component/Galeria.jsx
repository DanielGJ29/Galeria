import React from "react";

//STYLE
import "../styles/Galeria.css";

const Galeria = (props)=>{
    //const [title, item, className] = props;

    //Logica
    let data =  [
        {
          image: 'https://picsum.photos/200/300',
          title: 'Titulo1',
          subtitle: 'Subtitle1'
        },
        {
          image: 'https://picsum.photos/204',
          title: 'Titulo2',
          subtitle: 'Subtitle2'
        },
        {
            image: 'https://picsum.photos/205/300',
            title: 'Titulo1',
            subtitle: 'Subtitle1'
        },
        {
            image: 'https://picsum.photos/205',
            title: 'Titulo2',
            subtitle: 'Subtitle2'
        }, 
        {
            image: 'https://picsum.photos/204',
            title: 'Titulo2',
            subtitle: 'Subtitle2'
          },
          {
            image: 'https://picsum.photos/206/309',
            title: 'Titulo2',
            subtitle: 'Subtitle2'
          },
          {
            image: 'https://picsum.photos/207',
            title: 'Titulo1',
            subtitle: 'Subtitle1'
          },
          {
            image: 'https://picsum.photos/208/306',
            title: 'Titulo2',
            subtitle: 'Subtitle2'
          },
          {
            image: 'https://picsum.photos/204',
            title: 'Titulo2',
            subtitle: 'Subtitle2'
          },
          {
            image: 'https://picsum.photos/206/309',
            title: 'Titulo2',
            subtitle: 'Subtitle2'
          },
          {
            image: 'https://picsum.photos/207',
            title: 'Titulo1',
            subtitle: 'Subtitle1'
          },
          {
            image: 'https://picsum.photos/208/306',
            title: 'Titulo2',
            subtitle: 'Subtitle2'
          }
        ]

    return(
        <>
        {/* <h1 className="title">{data[0].image}</h1> */}
        <div className="container">
        { data.map((item, index) =>{
            return (
                <div key={index} className={"container-info item-"+index}> 
                    <img src={item.image} alt="img"/>
                    <h2 className="title">{item.title}</h2>
                    <p>{item.subtitle}</p>
                </div>
            )
        })
        }
        </div>

        </>
    );
};

export default Galeria;