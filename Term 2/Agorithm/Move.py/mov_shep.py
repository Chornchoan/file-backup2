import tkinter as tk
window = tk.Tk()

window.geometry("800x600")
window.title("Move Game")
window.resizable(0, 0)
#frame 
frame = tk.Frame(window)
frame.pack()

#canvas

canvas = tk.Canvas(frame, width =500, height = 350, bg="white")
canvas.pack(pady=20)
shape_id = canvas.create_rectangle(0, 0, 50, 50, fill = "black", outline="")
canvas.create_rectangle(0, 300, 500, 400, fill = "black", outline="",tags="wall")
def chack_moveable(y):
    coord =canvas.coords(shape_id) 
    walls=canvas.find_withtag("wall")
    overlap =canvas.find_overlapping(coord[0], coord[1],coord[2], coord[3])
    for wall in walls:
        if wall in overlap:
            return False
    return True
  
def gravity():
    canvas.move(shape_id, 0, 10)
    window.bind(50,gravity)
gravity()

window.mainloop()