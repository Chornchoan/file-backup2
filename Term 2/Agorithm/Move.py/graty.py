import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("Gravity Simulation")

# Create a canvas to draw on
canvas = tk.Canvas(root, width=400, height=400)
canvas.pack()

# Create a falling object (circle)
object_id = canvas.create_oval(190, 190, 210, 210, fill="red")
wall = canvas.create_rectangle(10, 360, 390, 400, fill="blue")
wall2 = canvas.create_rectangle(0, 0, 400, 20, fill="blue")
wallleft = canvas.create_rectangle(0, 0, 20, 400, fill="blue")
wallright = canvas.create_rectangle(400, 0, 380, 400, fill="blue")

# Function to update the object's position
def update_position_down():
    ball_coods = canvas.coords(object_id)
    wall_coods = canvas.coords(wall)
    if ball_coods[3]< wall_coods[1] :
        canvas.move(object_id, 0, 9)
        root.after(30, update_position_down)
    else:
        update_position_up()

def update_position_up():
    ball_coods = canvas.coords(object_id)
    wall_coods = canvas.coords(wall2)
    if ball_coods[1]> wall_coods[3] :
        canvas.move(object_id, 0, -9)
        root.after(30, update_position_up)
    else:
        update_position_down()
def update_position_left():
    ball_coods = canvas.coords(object_id)
    wall_coods = canvas.coords(wallleft)
    if ball_coods[0]> wall_coods[2] :
        canvas.move(object_id, -9, 0)
        root.after(30, update_position_left)
    else:
        update_position_right()
def update_position_right():
    ball_coods = canvas.coords(object_id)
    wall_coods = canvas.coords(wallright)
    if ball_coods[2]< wall_coods[0] :
        canvas.move(object_id, 9, 0)
        root.after(30, update_position_right)
    else:
        update_position_left()

# Start the simulation
update_position_down()
update_position_right()


# Run the Tkinter main loop
root.mainloop()
