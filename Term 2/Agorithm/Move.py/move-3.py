import tkinter as tk

# Window size
window_width = 800
window_height = 600

window = tk.Tk()
window.geometry(str(window_width) + "x" + str(window_height))
window.resizable(0, 0)
window.title("Move Shape")

#Frame container
frame_container = tk.Frame(window, width=window_width, height=window_height)
frame_container.pack()

# Canvas
canvas = tk.Canvas(frame_container, width=window_width-100, height=window_height-100, bg="white")
canvas.pack(pady=20)

# Player
player = canvas.create_rectangle(100, 150, 150, 200, fill="red", outline="red")

# Wall
canvas.create_rectangle(400, 100, 450, 250, fill="black", tags="PLATFORM")
canvas.create_rectangle(350, 150, 400, 200, fill="black", tags="PLATFORM")
canvas.create_rectangle(350, 350, 500, 310, fill="black", tags="PLATFORM")
canvas.create_rectangle(350, 350, 500, 310, fill="black", tags="PLATFORM")
canvas.create_rectangle(250, 150, 290, 350, fill="black", tags="PLATFORM")
canvas.create_rectangle(10, 350, 195, 310, fill="black", tags="PLATFORM")
canvas.create_rectangle(105, 250, 195, 210, fill="black", tags="PLATFORM")
canvas.create_rectangle(10, 100, 50, 350, fill="black", tags="PLATFORM")
canvas.create_rectangle(10, 100, 290, 150, fill="black", tags="PLATFORM")
canvas.create_rectangle(450, 100, 550, 150, fill="black", tags="PLATFORM")
canvas.create_rectangle(510, 500, 550, 150, fill="black", tags="PLATFORM")
canvas.create_rectangle(60, 440, 300, 410, fill="black", tags="PLATFORM")


# Check is moveable

def check_moveablex(directionX):
    coordinator = canvas.coords(player)
    platforms = canvas.find_withtag("PLATFORM")

    if coordinator[0] + directionX < 0 or coordinator[2] + directionX > window_width - 100:
        return False

    overlap = canvas.find_overlapping(coordinator[0] + directionX, coordinator[1], coordinator[2] + directionX, coordinator[3])
    for platform in platforms:
        if platform in overlap:
            return False
    return True

def check_moveabley(directionY):
    coordinator = canvas.coords(player)
    platforms = canvas.find_withtag("PLATFORM")

    if coordinator[1] + directionY < 0 or coordinator[3] + directionY > window_height - 100:
        return False

    overlap = canvas.find_overlapping(coordinator[0] , coordinator[1]+ directionY, coordinator[2] , coordinator[3]+ directionY)
    for platform in platforms:
        if platform in overlap:
            return False
    return True

# Move Player
def move_player(event):
    x = 0
    y = 0
    if event.keysym == "Left":
        x = -7
    elif event.keysym == "Right":
        x = 7
    if check_moveablex(x):
        canvas.move(player, x, 0)
    if event.keysym == "Up":
        y= -7
    elif event.keysym == "Down":
        y= 7
    if check_moveabley(y):
        canvas.move(player, 0, y)


window.bind("<Key>", move_player)

window.mainloop()