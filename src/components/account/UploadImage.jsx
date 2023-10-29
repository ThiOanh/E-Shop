import camera from "assets/account/camera.png";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
function UploadImage({ image, callback }) {
  const [file, setFile] = useState();
  useEffect(() => {
    setFile(image);
  }, [image]);

  function handleChange(e) {
    const url = URL.createObjectURL(e.target.files[0]);
    setFile(url);
    callback(url);
  }

  return (
    <>
      {file ? (
        <img
          src={file}
          alt="avatar"
          width={150}
          height={150}
          className="p-2 rounded-circle shadow-sm mt-5 mb-4"
        />
      ) : (
        <label
          for="uploadImage"
          className="rounded-circle shadow-sm mt-5 mb-4 mx-auto d-flex justify-content-center align-items-center"
          style={{
            width: 150,
            height: 150,
            cursor: "pointer",
            background: "#e1e1e1",
            border: "8px solid #ecebe8",
          }}
        >
          <div>
            <img
              src={camera}
              alt="camera"
              width={30}
              height="auto"
              className="opacity-50"
            />
            <div>
              <small className="text-black-50 opacity-75">Upload photo</small>
              <input
                id="uploadImage"
                type="file"
                onChange={handleChange}
                hidden
              />
            </div>
          </div>
        </label>
      )}
    </>
  );
}
UploadImage.propTypes = {
  src: PropTypes.string,
  callback: PropTypes.func,
};
export default UploadImage;
