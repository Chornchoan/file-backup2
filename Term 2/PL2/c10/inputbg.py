import tkinter as tk
from PIL import Image,ImageTk

window = tk. Tk()
window.title("Image Viewer")
window.geometry("1024x600")

frame=tk.Frame(window, width=1024, height=600)
frame.pack()

getImagefile =Image.open("pt1.jpg")
img = ImageTk.PhotoImage(getImagefile)
# canvas
label =tk.Label(frame,image=img)
label.pack()

getImgfil =Image.open("preview.png")
img= ImageTk.PhotoImage(getImgfil)
label =tk.Label(frame,image=img)
label.pack()

window.resizable(0, 0)

window.mainloop()