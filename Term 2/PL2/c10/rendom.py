import tkinter as tk
import random
window = tk.Tk()
window.geometry("400x500")
window.title ("hello world")
frame = tk .Frame(window,width=400,height=500,bg="blue")
frame.pack()

canvas= tk .Canvas(frame,width=500,height=500, bg="blue")
canvas.pack()
canvas.create_oval(10, 10, 100, 100, fill="orange")
# arr=["red","blue","green","yello"]
# canvas.create_oval(10,10,100,100,fill=random.choice(arr))
cieral_id=canvas.create_oval(10, 10, 100, 100, fill="orange")
ragtangle_id=canvas.create_rectangle(110, 10, 200, 100, fill="red")
canvas.itemconfig(cieral_id, fill="green" )
canvas.itemconfig(ragtangle_id, fill="orange" )


window.mainloop()