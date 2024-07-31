import tkinter as tk
from PIL import Image,ImageTk
window=tk.Tk()
window.title("Imag move")
window.geometry("700x600")
frame = tk .Frame(window,width=400,height=500,)
frame.pack()

canvas= tk .Canvas(frame,width=500,height=500, )
canvas.pack()
getImgfil =Image.open("preview.png")
img= ImageTk.PhotoImage(getImgfil)
label =tk.Label(frame,image=img)
label.pack()
rect_id = canvas.create_oval(10,10,50,50, tags="preview.png")

def moveUp():
   if canvas.coords(rect_id)[1] >0:
        canvas.move(rect_id, 0, -10)
def moveDown():
    if canvas.coords(rect_id)[3]< 500:
        canvas.move(rect_id, 0, 10)
def moveLeft():
    if canvas.coords(rect_id)[0]>0:
        canvas.move(rect_id, -10,0 )
def moveRight():
    if canvas.coords(rect_id)[2] <500:
        canvas.move(rect_id, 10, 0 )


def move(event):
    if event.keysym =="Up":
        moveUp()
    elif event.keysym =="Down":
        moveDown()
    elif event.keysym =="Left":
        moveLeft()
    elif event.keysym =="Right":
        moveRight()

window.bind("<Key>",move)
window.mainloop()