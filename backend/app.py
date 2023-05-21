from flask import Flask, jsonify, request, render_template, send_file
import os
from io import BytesIO
import base64

mb_photos_dir = 'mb_photos/'
api = Flask(__name__)


# Retrieve images from the directory that is passed as parameter
def retrieve_images(image_dir: str) -> list[str]:
    image_list = []

    image_paths = os.listdir(image_dir)

    for path in image_paths:
        image_list.append(mb_photos_dir + path)

    return image_list


# API that will retrieve images from a directory and respond to a front-end React request with a list of images
# Right now it will simply return one image, encoded as Base64
# Will need to be updated to provide all images in Base64 eventually - small steps!!!!
@api.route('/img_api', methods=['GET'])
def image_api():
    images = retrieve_images(mb_photos_dir)
    img_data = 0

    with open(images[0], 'rb') as image_file:
        img_data = base64.b64encode(image_file.read()).decode()
        image_file.close()

    return {'img': img_data}


if __name__ == '__main__':
    api.run()
