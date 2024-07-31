from tkinter import*
root= Tk()
root.title ('bg')
root.geometry("1024x700")

# Define image
bg = PhotoImage(file="jungle.png")

# Creat lambda
my_label = Label(root,image=bg)
my_label.place(x=1, y=0, relwidth=1, relheight=1)

# Add something to the of our image
my_text=Label(root,text="Welcome! to play game",font=("Helvetica",50),fg="white")
my_text.pack(pady=50)

#Creat frame
my_frame=Frame(root)
my_frame.pack(pady=20)

# add some buttone
my_button1=Button(my_frame,text="Exit")
my_button1.grid(row=0, column=0, padx=20)

my_button1=Button(my_frame,text="start")
my_button1.grid(row=0, column=1, padx=20)

my_button1=Button(my_frame,text="Reset")
my_button1.grid(row=0, column=2, padx=20)


root.mainloop()