import tkinter as tk
from PIL import Image, ImageTk

window = tk.Tk()
window.geometry("600x500")
window.title("Game")
frame = tk.Frame(window, width=600, height=500)
frame.pack()
canvas = tk.Canvas(frame, width=500, height=400, bg="white")
canvas.pack()

# shape
shape_id = canvas.create_oval(150, 100, 200, 150, fill="black")


# Image 
image_one = Image.open("Hero.png")

img_size = image_one.resize((150,100))

image = ImageTk.PhotoImage(img_size)

boy_id = canvas.create_image(50, 50, image=image)


def change_color(shape):
    touch=canvas.find_overlapping(shape[0], shape[1], shape[2], shape[3])
    print(touch)
    if len(touch)>1:
        if touch[1]==boy_id:
            canvas.itemconfigure(shape_id, fill="blue")
            canvas.create_text(250, 350, text="Game Over", font=("bold", 20), fill="red")
            canvas.itemconfig(shape_id, state = 'hidden')
        elif touch[1]!=boy_id:
            canvas.itemconfigure(shape_id)
def moveLeft(event):
    change_color(canvas.coords(shape_id))
    x = -10
    y = 0
    canvas.move(boy_id, x, y)
    
def moveRight(event):
    change_color(canvas.coords(shape_id))
    x = 10
    y = 0
    canvas.move(boy_id, x, y)

def moveUp(event):
    change_color(canvas.coords(shape_id))
    x = 0
    y = -10
    canvas.move(boy_id, x, y)

def moveDown(event):
    change_color(canvas.coords(shape_id))
    x = 0
    y = 10
    canvas.move(boy_id, x, y)

window.bind("<Left>", moveLeft)
window.bind("<Right>", moveRight)
window.bind("<Up>", moveUp)
window.bind("<Down>", moveDown)

window.mainloop()