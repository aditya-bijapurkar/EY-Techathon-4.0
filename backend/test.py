import uvicorn
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request, Response
import uuid
import os

import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np


# ####### MODEL ########
model_path = "final_chest_xray_model.h5"
model = tf.keras.models.load_model(model_path, compile=False)


def predict(img):
    result = model.predict(img)
    prediction = "Pneumonia" if result[0][0] >= 0.5 else "Normal"

    result *= 100
    result = format(result[0][0], '.2f')
    result = str(result)

    return [prediction, result]


# ####### APP ########
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def home():
    return {"user": "welcome"}


def image_preprocess(orignal_image):
    img = image.load_img(orignal_image, target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 225.0

    return img


@app.post("/pneumonia")
async def upload_image(file: UploadFile = File(...)):
    file.filename = f"{uuid.uuid4()}.jpg"
    data = await file.read()

    path = f"pics/{file.filename}"
    with open(path, "wb") as f:
        f.write(data)

    img = image_preprocess(path)

    [prediction, result] = predict(img)

    os.remove(path)

    return {"prediction": prediction, "result": result}
