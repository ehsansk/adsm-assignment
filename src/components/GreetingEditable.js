import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ZoomImage from "./ZoomImage";
function GreetingEditable() {
  const [editdata, setEditdata] = useState("-edit text");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPhoto, setIsEditPhoto] = useState(false);
  const [download, setDownload] = useState(false);
  const editData = () => {
    console.log("edit mode on");
    setIsEdit(!isEdit);
  };

  const changeMode = () => {
    setIsEdit(false);
    setIsEditPhoto(true);
  };
  const editPhoto = () => {
    setIsEditPhoto(true);
    setDownload(true);
  };
  
  return (
    <>
      {!download ? (
        <div className="py-5 px-4 position-relative">
          {!isEditPhoto ? (
            <>
              <ZoomImage
                editdata={editdata}
              />
              {!isEdit ? (
                <div className="edit-text-name" onClick={editData}>
                  {editdata}
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    className="form-control edit-input"
                    onChange={(e) => setEditdata(e.target.value)}
                    placeholder="enter text"
                  />
                </div>
              )}

              <div className="d-flex justify-content-around">
                <Link to="/">
                  <button className="btn btn-warning d-flex justify-content-around align-items-center rounded-pill">
                    <img className="w-25" src="./Home_Icon.png" alt="home" />
                    Home
                  </button>
                </Link>
                <button
                  onClick={changeMode}
                  className="btn btn-warning d-flex justify-content-around align-items-center rounded-pill"
                >
                  <img className="w-25" src="./save_icon.png" alt="home" />
                  <span>Save</span>
                </button>
              </div>
            </>
          ) : (
            <div>
              <ZoomImage editdata={editdata} editData={editData} />
              <button
                onClick={editPhoto}
                className="btn btn-warning rounded-pill"
              >
                <img
                  className="w-25 px-1"
                  src="./editphoto_icon.png"
                  alt="home"
                />
                {!isEdit ? (
                  <div className="edit-text-name" onClick={editData}>
                    {editdata}
                  </div>
                ) : (
                  ""
                )}
                <span>edit photo</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="py-5 px-4 position-relative">
          <ZoomImage editdata={editdata} download={download}>
            <div className="download-text">{editdata}</div>
          </ZoomImage>
          <div className="d-flex justify-content-between">
            <Link
              to="/"
              className="btn btn-warning d-flex justify-content-around align-items-center rounded-pill"
            >
              <img className="w-25" src="./Home_Icon.png" alt="home" />
              Home
            </Link>
            <a href="./BG.png" download="BG.png">
              <button className="btn btn-warning d-flex justify-content-around align-items-center rounded-pill">
                <img
                  className="w-25"
                  src="./download_icon.png"
                  alt="download"
                />
                download
              </button>
            </a>

            <button className="btn btn-warning d-flex justify-content-around align-items-center rounded-pill">
              <img className="w-25" src="./share_icon.png" alt="share" />
              share
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default GreetingEditable;
