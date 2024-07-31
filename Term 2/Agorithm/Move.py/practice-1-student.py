import tkinter as tk
window = tk.Tk()
window_width = 800
window_height = 600
window.geometry(str(window_width) + "x" + str(window_height))
window.title("Move Game")
window.resizable(0, 0)
#frame 
frame = tk.Frame(window)
frame.pack()

#canvas

canvas = tk.Canvas(frame, width =500, height = 350, bg="white")
canvas.pack(pady=20)
shape_id = canvas.create_rectangle(0, 0, 50, 50, fill = "black")

def check_shape_on_left_add_right(directionX):
    coordinator = canvas.coords(shape_id)
    platforms = canvas.find_withtag("PLATFORM")

    if coordinator[0] + directionX < 0 or coordinator[2] + directionX > window_width - 100:
        return False

    overlap = canvas.find_overlapping(coordinator[0] + directionX, coordinator[1], coordinator[2] + directionX, coordinator[3])
    for platform in platforms:
        if platform in overlap:
            return False
    return True
# def check_shape_on_right(event):
#     x = 0
#     if event.keysym == "Right":
#         x= 7

# def check_shape_on_top(event):
#     y=0
#     if event.keysym == "Up":
#         y=-7

# def check_shape_on_bottom(event):
#     y=0
#     if event.keysym == "Down":
#         y=-7
def moveShape(event):
    x = 0
    y = 0
    if event.keysym == "Left":
        x = -7
    elif event.keysym == "Right":
        x = 7
    if check_shape_on_left(x):
        canvas.move(shape_id, x, 0)


window.bind("<Key>", moveShape)

#buttons
window.mainloop()