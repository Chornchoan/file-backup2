import tkinter as tk
wendow =tk.Tk()
wendow .geometry("500x600")
wendow.title("loop")
frame = tk .Frame(wendow,width=500,height=600,bg="blue")
frame.pack()
canvas= tk .Canvas(frame,width=500,height=600, bg="blue")
canvas.pack()
# canvas.create_rectangle(10, 10, 100,100, fill="orange")
# canvas.create_rectangle(110, 10, 200,100, fill="red")
# canvas.create_rectangle(210, 10, 300,100, fill="green")
# canvas.create_rectangle(310, 10, 400,100, fill="black")
for i in range(1,10):
    for j in range(1,10):
     canvas.create_rectangle(10+i*100 , 10*j*100, 100+i*100,100+j*100, fill="red")   
wendow.mainloop()