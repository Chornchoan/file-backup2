import tkinter as tk 
window= tk. Tk()
window.title("Image Viewer")
window.geometry("700x600")

frame=tk.Frame(window, width=1024, height=600)
frame.pack()

canvas= tk .Canvas(frame,width=600,height=500)
canvas.pack()

# shape
rect_id = canvas.create_oval(10,10,50,50, tags="rectangle")

def moveUp():
   if canvas.coords(rect_id)[1] >0:
        canvas.move(rect_id, 0, -10)
def moveDown():
    if canvas.coords(rect_id)[3]< 500:
        canvas.move(rect_id, 0, 10)
def moveLeft():
    if canvas.coords(rect_id)[0]>0:
        canvas.move(rect_id, -10,0 )
def moveRight():
    if canvas.coords(rect_id)[2] <500:
        canvas.move(rect_id, 10, 0 )


def move(event):
    if event.keysym =="Up":
        moveUp()
    elif event.keysym =="Down":
        moveDown()
    elif event.keysym =="Left":
        moveLeft()
    elif event.keysym =="Right":
        moveRight()

window.bind("<Key>",move)
window.mainloop()