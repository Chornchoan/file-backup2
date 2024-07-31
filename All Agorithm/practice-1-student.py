import tkinter as tk
window = tk.Tk()
window.geometry("600x400")
window.title("Move Game")
window.resizable(0, 0)
#frame 
frame = tk.Frame(window)
frame.pack()

#canvas

canvas = tk.Canvas(frame, width =500, height = 350, bg="white")
canvas.pack(pady=20)
shape_id = canvas.create_rectangle(0, 0, 50, 50, fill = "black")

def check_shape_on_left():
    pass

def check_shape_on_right():
   pass

def check_shape_on_top():
    pass

def check_shape_on_bottom():
    pass

def moveShape(event):
   pass


window.bind("<Key>", moveShape)

#buttons
window.mainloop()