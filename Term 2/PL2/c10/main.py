import tkinter as tk
window = tk.Tk()
window.geometry("400x500")
window.title ("hello world")
frame = tk .Frame(window,width=400,height=500,bg="blue")
frame.pack()

canvas= tk .Canvas(frame,width=500,height=500, bg="blue")
canvas.pack()
# canvas.create_rectangle(10, 10, 100, 100, fill="orange")
# canvas.create_rectangle(110,10, 200,100, fill="red")
# canvas.create_rectangle(210,10, 400,100, fill="black")
# canvas.create_rectangle(310,10, 400,100, fill="red")

# canvas.create_rectangle(10, 110, 100, 200, fill="orange")
# canvas.create_rectangle(110,110, 200,200, fill="red")
# canvas.create_rectangle(210,110, 400,200, fill="black")
# canvas.create_rectangle(310,210, 400,200, fill="red")
canvas.create_oval(10, 10, 100,100, fill="orange")
canvas.create_oval(110, 10, 200,100, fill="red")
canvas.create_oval(210, 10, 300,100, fill="green")

canvas.create_oval(10, 110, 100,200, fill="blue")
canvas.create_oval(10, 210, 100,300, fill="yellow")

canvas.create_oval(110, 110, 200,200, fill="pink")
canvas.create_oval(210, 110, 300,200, fill="purple")

canvas.create_oval(110, 210, 200,300, fill="teal")
canvas.create_oval(210, 210, 300,300, fill="black")


window.mainloop()