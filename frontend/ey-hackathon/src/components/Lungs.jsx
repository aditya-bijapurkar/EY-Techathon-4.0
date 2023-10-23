import React, { useState } from "react";
import { Instructions } from ".";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { UploadButton, RemoveButton } from "./Buttons";

const Lungs = () => {
    const [image, setImage] = useState(null);
    const [isPicked, setIsPicked] = useState(false);
    const [preview, setPreview] = useState(null);
    const [response, setResponse] = useState(null);

    const changeHandler = async (e) => {
        setImage(e.target.files[0]);

        const imageURL = URL.createObjectURL(image);
        setPreview(imageURL);
        setResponse(null);
        setIsPicked(true);

        return () => URL.revokeObjectURL(imageURL);
    };

    const onhandleSubmit = async (e) => {
        e.preventDefault();

        if (!isPicked) {
            alert("Please upload an X-ray image first");
        } else {
            const formData = new FormData();
            formData.append("file", image, image.name);

            const requestOptions = {
                method: "POST",
                body: formData,
            };

            const response = await fetch(
                "http://127.0.0.1:8000/pneumonia",
                requestOptions,
            );
            const res = await response.json();
            setResponse(res);
            console.log(res);
        }
    };

    return (
        <>
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "60vh",
                    flexDirection: "column",
                    paddingTop: "50px",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={900}
                    color="white"
                    mb={3}
                    display="flex"
                    justifyContent="center"
                >
                    Upload an X-ray image
                </Typography>
                <Paper
                    component="form"
                    onSubmit={onhandleSubmit}
                    sx={{
                        boxShadow: "none",
                        border: "1px solid #e3e3e3",
                        pl: 2,
                        background: "none",
                        border: "none",
                    }}
                >
                    <Box
                        style={{
                            display: "flex",
                            height: "30vh",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <fieldset>
                            <input
                                name="image"
                                id="image-in"
                                type="file"
                                onChange={changeHandler}
                                style={{ color: "white" }}
                                accept=".jpeg, .png, .jpg"
                            />
                        </fieldset>

                        <Box
                            style={{
                                color: "white",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            {isPicked && preview ? (
                                <img
                                    style={{ height: "100px", width: "100px" }}
                                    src={preview}
                                    alt="uploaded-image"
                                />
                            ) : (
                                <Instructions />
                            )}
                            <Box
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {response ? (
                                    <p>Prediction: {response.prediction}</p>
                                ) : null}
                                {response ? (
                                    <p>
                                        Chance of infection: {response.result}%
                                    </p>
                                ) : null}
                            </Box>
                        </Box>
                    </Box>
                    <br />
                    <UploadButton />
                    <RemoveButton
                        setSelectedImage={setImage}
                        setIfPicked={setIsPicked}
                        setResponse={setResponse}
                    />
                </Paper>
            </Box>
        </>
    );
};

export default Lungs;
