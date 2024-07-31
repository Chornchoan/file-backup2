import tkinter as tk 
window= tk. Tk()
window.title("Image Viewer")
window.geometry("700x600")

frame=tk.Frame(window, width=1024, height=600)
frame.pack()

canvas= tk .Canvas(frame,width=600,height=500,)
canvas.pack()
# canvas.create_rectangle(10,10,100,100,fill="red")
# canvas.create_rectangle(110,10,200,100,fill="red")
# canvas.create_rectangle(210,10,300,100,fill="red")
# canvas.create_rectangle(310,10,400,100,fill="red")
# canvas.create_rectangle(410,10,500,100,fill="red")

# shape
canvas.create_rectangle(10,10,100,100,tags="rectangle")
# canvas.itemconfigure(canvas.find_withtag('rectangle'),fill="orange")

def change_color(event):
    if event.keysym == "Left":
        canvas.itemconfigure(canvas.find_withtag('rectangle'),fill="orange")
    elif event.keysym =="Right":
        canvas.itemconfigure(canvas.find_withtag("rectangle"),fill="blue")
    elif event.keysym =="Up":
        canvas.itemconfigure(canvas.find_withtag("rectangle"),fill="red")
    elif event.keysym =="Down":
        canvas.itemconfigure(canvas.find_withtag("rectangle"),fill="green")
        
window.bind("<Key>",change_color)

window.mainloop()
