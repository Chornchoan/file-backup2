import tkinter as tk
from tkinter.colorchooser import askcolor
def draw(event):
    global color_draw
    x1=event.x-draw_size   
    x2=event.x+draw_size
    y1=event.y-draw_size
    y2=event.y+draw_size
    canvas.create_oval(x1, y1 ,x2, y2, fill= color_draw.get(),outline="")

def eraser():
    canvas.delete("all")

def choose_color():
    global color_draw
    color= askcolor()[1]
    if color:
       color_draw.set(color)

window=tk.Tk()
window.title('writ motion')
window.geometry('1000x600')

color_draw = tk.StringVar()
color_draw.set("green")
draw_size=5

frame=tk.Frame(window, width=1000,height=600)
frame.pack()
canvas=tk.Canvas(frame,width=800, height=500)
canvas.pack(pady=10)

canvas.bind("<B1-Motion>",draw)

btn= tk.Button(frame,text="choosColor",command=choose_color)
btn.pack()
btnDelete= tk.Button(frame,text="Delete",command=eraser)
btnDelete.pack()

window.mainloop()