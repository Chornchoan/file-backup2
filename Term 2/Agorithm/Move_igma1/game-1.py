import tkinter as tk
from PIL import Image, ImageTk
from pygame import mixer
import time
window = tk.Tk()
window.geometry("800x500")
window.title("Move Shape")
window.resizable(False, False)

# score
score =0

# frame 
frame = tk.Frame(window)
frame.pack()

# canvas
canvas = tk.Canvas(frame, width=700, height=400, bg="white")
canvas.pack(pady=20)

banana_file =Image.open("banana.png")
banana_size =banana_file.resize((50,50))
banana=ImageTk.PhotoImage(banana_size)

img_file = Image.open("chantho.png")
img_size = img_file.resize((60, 60))
ball = ImageTk.PhotoImage(img_size)
ball_id = canvas.create_image(60, 60, image=ball)

skin_banana_file = Image.open("skin_banana.png")
skin_banana_size = skin_banana_file.resize((50, 50))
skin_banana = ImageTk.PhotoImage(skin_banana_size)


# canvas
canvas.create_image(140, 100, image=banana, tags="player")
canvas.create_image(240, 200, image=banana, tags="player")
canvas.create_image(340, 300, image=banana, tags="player")
canvas.create_image(290, 100, image=banana, tags="player")
canvas.create_image(490, 350, image=banana, tags="player")
canvas.create_image(140, 300, image=banana, tags="player")



def is_moveable():
    coord = canvas.coords(ball_id)
    players = canvas.find_withtag("player")
    overlap = canvas.find_overlapping(coord[0], coord[1], coord[0] + ball.width(),coord[1] + ball.height())
    for player in players:
        if player in overlap:
            return player
    return 0


def is_border_left():
    return canvas.coords(ball_id)[0] < 40

def is_border_right():
    return canvas.coords(ball_id)[0] > 670

def is_border_top():
    return canvas.coords(ball_id)[1] < 40

def is_border_bottom():
    return canvas.coords(ball_id)[1] > 470

def move_shape(event):
    if event.keysym == "Left" and not is_border_left():
        canvas.move(ball_id, -5, 0)
    elif event.keysym == "Right" and not is_border_right():
        canvas.move(ball_id, 5, 0)
    elif event.keysym == "Up" and not is_border_top():
        canvas.move(ball_id, 0, -5)
    elif event.keysym == "Down" and not is_border_bottom():
        canvas.move(ball_id, 0, 5)

# ChangeColor
    # shape = is_moveable()
    # if shape > 0:
    #     canvas.itemconfigure(shape, fill="red")

# DeleteShep
    # shape = is_moveable()
    # if shape > 0:
    #     canvas.delete(shape)

# Change shep to image
    shape = is_moveable()
    if shape > 0:
        coord=canvas.coords(shape)
        canvas.delete(shape)
        canvas.create_image(coord[0], coord[1], image=skin_banana)
        mixer.init() #Initialzing pyamge mixer
        mixer.music.load('crash-6711.mp3') #Loading Music File
        mixer.music.play() #Playing Music with Pygame
        time.sleep(1)
        mixer.music.stop()

    # def score ():
        

window.bind("<Key>", move_shape)
window.mainloop()