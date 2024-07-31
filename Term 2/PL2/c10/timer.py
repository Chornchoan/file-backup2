import tkinter as tk 
import time
window= tk. Tk()
window.title("Timer View")
window.geometry("400x300")

frame=tk.Frame(window, width=300, height=250)
frame.pack()

canvas= tk .Canvas(frame,width=300,height=250,)
canvas.pack()

time_id= canvas.create_text(150,150, text="",font=("bold",20))
def clock ():
    hour = time.strftime("%H:%M:%S")
    canvas.itemconfigure(time_id,text=hour)
def updateTime():
    clock()
    window.after(1000, updateTime)

window.after(1000, updateTime)

window.mainloop()
