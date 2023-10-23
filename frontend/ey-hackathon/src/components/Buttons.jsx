import React from "react";
import { Typography, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadButton = () => {
    return (
        <IconButton
            type="submit"
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
        >
            <Typography>
                <pre>Upload </pre>
            </Typography>
            <SendIcon />
        </IconButton>
    );
};

const RemoveButton = ({ setSelectedImage, setIfPicked, setResponse }) => {
    return (
        <IconButton
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
            onClick={() => {
                setSelectedImage(null);
                setIfPicked(false);
                setResponse(null);
                document.getElementById("image-in").value = null;
            }}
        >
            <Typography>
                <pre>Remove </pre>
            </Typography>
            <DeleteForeverIcon />
        </IconButton>
    );
};

export { UploadButton, RemoveButton };
