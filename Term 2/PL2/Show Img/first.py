import tkinter as tk
from PIL import Image,ImageTk
window=tk.Tk()
window.title("Run Img")
window.geometry("700x600")
# window.configure(gb="black")
frame=tk.Frame(window,width=600, height=500)
frame.pack()
canvas=tk.Canvas(frame, width=600, height=500,bg="white")
canvas.pack()

shape_id = canvas.create_oval(150, 100, 200, 150, fill="red")

image_one=Image.open("Hero.png")
img_size=image_one.resize((150,150))
image=ImageTk.PhotoImage(img_size)
hero_id = canvas.create_image(100,100,image=image)

def moveLeft():
    if canvas.coords(hero_id)[0]>0:
        x = -10
        y = 0
        canvas.move(hero_id,x, y)
def moveRight():
    if canvas.coords(hero_id)[0]<500:
        x = 10
        y = 0
        canvas.move(hero_id,x, y)
def moveUp():
    if canvas.coords(hero_id)[1]>0:
        x = 0
        y = -10
        canvas.move(hero_id,x, y)
def moveDown():
    if canvas.coords(hero_id)[1]<500:
        x = 0
        y = 10
        canvas.move(hero_id,x, y)
def move(event):
    if event.keysym=="Up":
        moveUp()
    elif event.keysym=="Down":
        moveDown()
    elif event.keysym=="Left":
        moveLeft()
    elif event.keysym=="Right":
        moveRight()

window.bind("<Key>", move)




window.mainloop()