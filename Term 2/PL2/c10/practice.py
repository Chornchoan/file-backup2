import tkinter as tk
import random
window = tk.Tk()
window.geometry("400x500")
window.title ("hello world")
# frame
frame = tk .Frame(window,width=400,height=500,bg="blue")
frame.pack()

# canvas
canvas= tk .Canvas(frame,width=500,height=600, bg="blue")
canvas.pack()

canvas.create_rectangle(10, 10, 100,100, fill="orange")
canvas.create_rectangle(110, 10, 200,100, fill="red")
canvas.create_rectangle(210, 10, 300,100, fill="green")
canvas.create_rectangle(310, 10, 400, 100, fill="black")
canvas.create_rectangle(410, 10, 500, 100, fill="orange")

canvas.create_rectangle(10, 110, 100,200, fill="blue")
canvas.create_rectangle(10, 210, 100,300, fill="yellow")
canvas.create_rectangle(10, 310, 100,400, fill="pink")
canvas.create_rectangle(10, 410, 100,500, fill="orange")

canvas.create_oval(210, 210, 300,300, fill="green")

canvas.create_rectangle(110, 410, 200,500, fill="teal")
canvas.create_rectangle(210, 410, 300,500, fill="red")
canvas.create_rectangle(310, 410, 400,500, fill="black")
canvas.create_rectangle(410, 410, 500,500, fill="orange")

canvas.create_rectangle(410, 410, 500,500, fill="orange")
canvas.create_rectangle(410, 310, 500,400, fill="purple")
canvas.create_rectangle(410, 210, 500,300, fill="green")
canvas.create_rectangle(410, 110, 500,200, fill="pink")
print(id)
# Shap
# canvasx, canvasy,
# event.x, event.y     
# find_closest
# itemconfigure
arr=["red","green","black","orange","pink"]
def change_color(event):
    x=canvas.canvasx(event.x)
    y=canvas.canvasy(event.y)
    print(x)
    shape_id = canvas.find_closest(x, y)
    canvas.itemconfig(shape_id, fill= random.choice(arr))
canvas.bind("<Button-1>")
btn= tk.Button(frame,text="Click on",command=change_color)
btn.pack()
window.mainloop()