from tkinter import *
tk=Tk()
tk.title("allTech-Bouncing ball")
tk.resizable(False, False)
WIDTH, HEIDHT= 400, 300
canvas=Canvas(tk, width=WIDTH, height=HEIDHT)
canvas.pack()

ball= canvas.create_oval(10,10,50,50, fill="red")
#3) move the all
xspeed=3
yspeed=3
def moveBall():
    print("a")
    global xspeed, yspeed
    canvas.move(ball, xspeed, yspeed)
    (leftPos,topPos,rightPos,bottomPos)=canvas.coords(ball)
    if leftPos<= 0 or rightPos >= WIDTH:
        xspeed = -xspeed
    if topPos<= 0 or bottomPos >= HEIDHT:
        yspeed = -yspeed
    canvas.after(30,moveBall)
canvas.after(30, moveBall)
tk.mainloop()