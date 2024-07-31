# import tkinter as tk
# import random
# window = tk.Tk()
# window.geometry("400x500")
# window.title ("hello world")
# frame = tk .Frame()
# frame.pack()

# canvas= tk .Canvas(frame)
# canvas.pack()

# # color=["red","geen"]
# # # cieral_id=canvas.create_oval(10, 10, 100, 100, fill="red")
# # ract_id=canvas.create_rectangle(110, 10, 200, 100, fill="green")

# def changeColor_red():
#     canvas.create_rectangle(110, 10, 200, 100, fill="red")

# def changeColor_green():
#     canvas.create_rectangle(110, 10, 200, 100, fill="green")

# btn= tk.Button(frame,text="red",command=changeColor_red)
# btn.pack()
# btn= tk.Button(frame,text="green",command=changeColor_green)
# btn.pack()

# window.mainloop()


# SUM
import tkinter as tk
import random
window = tk.Tk()
window.geometry("400x500")
window.title ("hello world")
# frame = tk .Frame()
# frame.pack()

# canvas= tk .Canvas(frame)
# canvas.pack()

frame = tk.Frame(window,width=400, height=500)
frame.pack()
canvas = tk.Canvas(frame)
canvas.pack()
total = 0

canvas.create_rectangle(10, 10, 100,100)
result = canvas.create_text(55, 60, text="0", fill="red", font=("bold", 40))
canvas.itemconfig(result, text="100")

def increment():
    global total
    total+=1
    canvas.itemconfig(result, text=total)

btn= tk.Button(frame,text="increment",command=increment)
btn.pack()
def decrement():
    global total
    total-=1
    canvas.itemconfig(result, text=total)

btn= tk.Button(frame,text="Decrement",command=decrement)
btn.pack()


window.mainloop()