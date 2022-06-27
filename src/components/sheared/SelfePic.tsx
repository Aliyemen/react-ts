import  { useEffect, useRef } from "react";
import { FaCameraRetro } from '@react-icons/all-files/fa/FaCameraRetro';
import { FaTrashAlt } from '@react-icons/all-files/fa/FaTrashAlt';

import "bootstrap/dist/css/bootstrap.min.css";

function SelfePic() {
  let videoRef = useRef(null);

  let photoRef = useRef(null)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePicture = () => {
    const width = 400
    const height = width / (16 / 9)
    
    let video = videoRef.current

    let photo = photoRef.current

    photo.width = width

    photo.height = height
    let ctx = photo.getContext('2d')
    ctx.drawImage(video, 0, 0, width, height)
    
  }

  const clearImage = () => {
    let photo = photoRef.current

    let ctx = photo.getContext('2d')

    ctx.clearRect(0,0,photo.width,photo.height)
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="" style={{backgroundColor:'#f0f4f5'}}>
      <h5 className="text-center text-success ">Tire uma selfie segurando o documento de identifcação</h5>
      <div className="d-flex">
          <div className="p-2">
              <button onClick={takePicture} className="btn btn-success"> <FaCameraRetro/> Tirar Foto</button>
          </div>
        <div className="ml-auto p-2">
            <button onClick={clearImage} className="btn btn-outline-dark "> <FaTrashAlt/> Excluir Foto</button>
        </div>
      </div>
      <div className="col-md-12">
          <video ref={videoRef} className="container"></video>
          <canvas  style={{width:250}} ref={photoRef}></canvas>
        </div>
      </div>
  );
}

export default SelfePic;