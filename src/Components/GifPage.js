import React from 'react'
import './GifPage.css'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import html2canvas from 'html2canvas'
import axios from 'axios';

import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";


function GifPage() {
    const [isloading, setIsloading] = React.useState(true)
    window.onload = () => {
        setIsloading(false)
    }
    let width = window.screen.width
    let height = window.screen.height
    const refMy = React.createRef();

    const [screenShot, setScreenShot] = React.useState(false)

    const handleClickTakeScreenShot = async () => {

        await axios.get('api').then(res => {
            console.log("Response " + res)
        }).catch(err => {
            console.log("Error " + err)
        })

        /*
        setScreenShot(true)
        document.getElementById('downloadButton').style.display = 'none';
        const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
            cropPositionTop: 0,
            cropPositionLeft: 0,


            cropWidth: width,
            cropHeigth: height,
        };

        setTimeout(() => {

            html2canvas(
                document.getElementById('rootDivId')
            ).then(canvas => {
                let croppedCanvas = document.createElement("canvas");
                let croppedCanvasContext = croppedCanvas.getContext("2d");

                croppedCanvas.width = cropWidth;
                croppedCanvas.height = cropHeigth;
               
                croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

                const a = document.createElement("a");
                a.href = canvas.toDataURL()
                // croppedCanvas.toDataURL();
                a.download = "image2.png";
                a.click();
            });
            document.getElementById('downloadButton').style.display = 'block';
            setScreenShot(false)
        }, 100)
        */
    };

    let location = useLocation('/Gif')

    let name = location.state.name
    // window.sessionStorage.getItem("name")
    let no = location.state.no
    // window.sessionStorage.getItem("description")
    // console.log("name " + name + " des " + description)
    console.log('len ' + name + no)

    let des = [];
    let increament = 0
    let desBool = false


    // ('rootDivId')

    // let nameSpace1 = '';
    // let descriptionSpace = ''

    // if (description.length > 25) {
    // for (let i = 0; i < description.length; i++) {
    // if (i % 18 === 0) {
    // des[i + 1] = '</br>'
    // increament = increament + 1
    // }
    // des[i + increament] = description.charAt(i)
    // 
    // }
    // desBool = true
    // }
    // else {
    // desBool = false
    // des = description.split("")
    // }
    console.log("des arr " + des)

    setTimeout(() => {
        document.getElementById("nameId").innerHTML = name
        // if (desBool) {
            // document.getElementById("descriptionId").innerHTML = des.join('')
        // }
        // else 
        {
            document.getElementById("descriptionId").innerHTML = no
        }

    }, 100)


    return (
        <div>
            {/* {!isloading ? (): (<div>is Loading</div>)}*/}
            <div className='mainBackGround' >

                <div id="rootDivId" className={("imageBG vh-100  ")}
                // style={{ background: `url("https://lit-mountain-07918.herokuapp.com/oreo_generate_gif?name=${name}&phone_number=${no}") no-repeat center` }}
                >
                    {/* {screenShot ? ("gifOut vh-100 container ") : */}
                    <div className='downloadButtonDiv'>

                        {/* <button id="downloadButton" className='downloadButton' onClick={handleClickTakeScreenShot}><i class="fa" style={{ fontSize: "30px" }}>&#xf019;</i></button> */}
                        <a href={`https://lit-mountain-07918.herokuapp.com/oreo_generate_gif?name=${name}&phone_number=${no}&is_download=true`} ><i className="fa" style={{ fontSize: "30px", color: '#fff' }}>&#xf019;</i></a>
                    </div>
                    {/* col-12  col-md-12 */}

                    {/* <i class="bi bi-box-arrow-in-down" onClick={handleClickTakeScreenShot}>fdsf</i> */}
                    {/* <i style="font-size:24px" class="fa">&#xf019;</i> */}
                    {/* <button id="downloadButton" onClick={handleClickTakeScreenShot}>V</button> */}
                    <div className=" ">
                        {/* <button >Download</button> */}
                        {/* <!-- style="background-image: url('Image/Oreo.PNG'); --> */}
                        {/* <!-- height: 100vh; width: 100vw;"> d-flex align-items-center justify-content-center h-100--> */}
                        <div className="    ">


                            <div className=" position">

                                <p readOnly className='available' id="ava">
                                    AVAILABLE NOW
                                </p>

                                <p readOnly className='name' id="nameId"></p>

                                <p readOnly maxLength="100"
                                    className='des'
                                    id="descriptionId">
                                </p>

                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GifPage