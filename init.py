#!/usr/bin/python3
# -*- coding: utf-8 -*-

import os
import json
import glob
import time

carpeta = "/var/www/html/"
path = carpeta+"imagenes/tv/*.png"
image_list = sorted(os.path.basename(filename) for filename in glob.glob(path))
maximo = len(image_list)
actualinx = 0

while True:
    actual = {"imagen": image_list[actualinx]}
    print(actual)

    with open(carpeta+"actualimg.json", "w") as actualimg:
        json.dump(actual, actualimg, indent=2, separators=(',', ': '))

    actualinx = (actualinx + 1) % maximo
    time.sleep(30)
