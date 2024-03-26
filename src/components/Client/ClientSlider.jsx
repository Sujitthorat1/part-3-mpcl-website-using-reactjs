import React from 'react';
import './client.scss';
import img1 from '../../assets/img/clients/1.jpg';
import img2 from '../../assets/img/clients/2.jpg';
import img3 from '../../assets/img/clients/3.jpg';


const Client = () => {
    const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/a2b3c3709ffedce2a22a.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/7ae42bac3b34999c0db3.png",

    ];
    const row2 = [
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/6c585c33ca6c71c79bb7.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/35e044b3354aaa0caed5.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/0384060dcbf73b6a707c.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/52d8f54e445899c1e716.png",
    ];

    const row3 = [
        // "https://i.ibb.co/xF125Gb/28.png",
        // "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/35e044b3354aaa0caed5.png",
        // "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/0384060dcbf73b6a707c.png",
        // "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/9dd55e54b5a28658bf4e.png",
        img1,img2,img3,
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/52d8f54e445899c1e716.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/52d8f54e445899c1e716.png",
    ];

    return (
        <div className="app-container">
            <div className="wrapper">
                <div className="text" data-aos="slide-right">With Greatest Customers</div>
                <div className="note " data-aos="slide-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className="marquee">
                    <div className="marquee-group">
                        {row1.map((el, index) => (
                            <div className="image-group" key={index}>
                                <img className="clientIcons" src={el} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="marquee-group">
                        {row1.map((el, index) => (
                            <div className="image-group" key={index}>
                                <img className="clientIcons" src={el} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="marquee">
                    <div className="marquee-group2">
                        {row2.map((el, index) => (
                            <div className="image-group" key={index}>
                                <img className='clientIcons' src={el} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="marquee-group2">
                        {row2.map((el, index) => (
                            <div className="image-group" key={index}>
                                <img className="clientIcons" src={el} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="marquee">
                    <div className="marquee-group">
                        {row3.map((el, index) => (
                            <div className="image-group" key={index}>
                                <img className='clientIcons' src={el} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="marquee-group">
                        {row3.map((el, index) => (
                            <div className="image-group" key={index}>
                                <img className='clientIcons' src={el} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Client;






/*import React from 'react';
import styled, { keyframes, css } from 'styled-components'

// Import your images
import img1 from '../../assets/img/mpcl/HPC.jpg'
import img from '../../assets/img/mpcl/HPC.jpg'
import img2 from '../../assets/img/mpcl/AI.jpg'
import img3 from '../../assets/img/mpcl/dataScience.jpg'
import img4 from '../../assets/img/mpcl/data_protection.jpg'
import img5 from '../../assets/img/mpcl/dataCenter.jpg'
import img6 from '../../assets/img/mpcl/encryption.jpg'

// Add more images as needed

const Client = () => {
    const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/a2b3c3709ffedce2a22a.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/3cd767dea94a85078ca4.png",
        // "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/7ae42bac3b34999c0db3.png",
    ]
    const row2 = [
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/6c585c33ca6c71c79bb7.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/35e044b3354aaa0caed5.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/0384060dcbf73b6a707c.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/gdd78299e67-prod/dist/images/52d8f54e445899c1e716.png",
    ]
    return <AppContainer>
        <Wrapper>
            <Text>With Greatest Customers</Text>
            <Note>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Note>
            <Marquee>
                <MarqueeGroup>
                    {
                        row1.map(el => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup>
                <MarqueeGroup>
                    {
                        row1.map(el => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup>
            </Marquee>

            <Marquee>
                <MarqueeGroup2>
                    {
                        row2.map(el => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup2>
                <MarqueeGroup2>
                    {
                        row2.map(el => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup2>
            </Marquee>

            <Marquee>
                <MarqueeGroup3>
                    {
                        row2.map(el => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup3>
                <MarqueeGroup3>
                    {
                        row2.map(el => (
                            <ImageGroup>
                                <Image src={el} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup3>
            </Marquee>
        </Wrapper>
    </AppContainer>
};

export default Client;


const AppContainer = styled.div`
width:100vw;
height: 100vh;
color:#000000;
position:relative;
display:flex;
align-items:center;
justify-content:center; `;


const Wrapper = styled.div`
width:100%;
margin:12px;
height:fit-content;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #0220c;
`

const Note = styled.div`
font-size:18px;
font-weight:200;
margin-bottom:40px;
color:#7c8e9a;
`

const Marquee = styled.div`
display:flex;
width:1200px;
overflow:hidden; 
user-select:none;
mask-image:linear-gradient(to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
    );
`

const scrollX = keyframes`
from{
    left:translateX(0);
}
to{
    transform: translateX(-100%)
}

`

const common = css`
flex-shrink:0;
display:flex;
align-items:center;
justify-content:space-around;
white-space:nowrap;
width:100%;
animation:${scrollX} 20s linear infinite;
`

const MarqueeGroup = styled.div`
${common}
`
const MarqueeGroup2 = styled.div`
${common}
animation-direction:reverse;
animation-delay: -20s;
`
const MarqueeGroup3 = styled.div`
${common}
`


const ImageGroup = styled.div`
display:grid;
place-items:center;
width:clamp(10rem, 3rem + 40vmin, 30rem);
padding:calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)
`


const Image = styled.img`
object-fit:contain;
width:100%;
height:100%;
border-radius:0.5rem;
aspect-ratio:16/9;
padding:5px 20px;
box-shadow:rgba(99,99,99,0.2) 0px 2px 8px 0px; 
`
*/
