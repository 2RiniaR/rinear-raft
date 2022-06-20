import subprocess
import os

path = "./"
files = os.listdir(path)
files_file = [f for f in files if os.path.isfile(os.path.join(path, f)) and f.split(".")[-1] in ["jpg", "png"]]
for file in files_file:
    print(f"Processing: {file}")
    basename = "".join(file.split(".")[0:-1])
    command = f"magick convert -define wepb:method=6 -define webp:image-hint=photo -define webp:sns-strength=100 -define webp:auto-filter=true -define webp:alpha-filtering=2 -define webp:alpha-quality=50 -define webp:thread-level=1 -quality 100 {file} {basename}.webp"
    subprocess.Popen(command, shell=True)
