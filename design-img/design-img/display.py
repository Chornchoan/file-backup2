import tkinter as tk
from PIL import Image, ImageTk

window = tk.Tk()
window.title("Image Viewer")
window.geometry("800x600")

frame = tk.Frame(window, width=700, height=500)
frame.pack()

canvas = tk.Canvas(frame, width=700, height=450, bg="white")
canvas.pack(pady=20)

# Image 1
file_1 = Image.open('1.png')
file_U = Image.open('ucl.png')
file_1_size = file_1.resize((110, 110))
img_1 = ImageTk.PhotoImage(file_1_size)
canvas.create_image(50, 50, image=img_1, )

file_2 = Image.open('2.png')
file_2_size = file_2.resize((110, 110))
img_2 = ImageTk.PhotoImage(file_2_size)
canvas.create_image(150, 100, image=img_2, )

file_3 = Image.open('3.png')
file_3_size = file_3.resize((150, 150))
img_3 = ImageTk.PhotoImage(file_3_size)
canvas.create_image(320, 100, image=img_3,)

file_4= Image.open('4.png')
file_4_size = file_4.resize((110, 110))
img_4 = ImageTk.PhotoImage(file_4_size)
canvas.create_image(500, 100, image=img_4,)

file_5= Image.open('5.png')
file_5_size = file_5.resize((100, 100))
img_5 = ImageTk.PhotoImage(file_5_size)
canvas.create_image(650, 60, image=img_5,)

file_U = Image.open('ucl.png')
file_U_size = file_U.resize((50, 50))
img_U = ImageTk.PhotoImage(file_U_size)
canvas.create_image(375, 300, image=img_U, )

file_F = Image.open('fb-b.png')
file_F_size = file_F.resize((50, 50))
img_F = ImageTk.PhotoImage(file_F_size)
canvas.create_image(150, 350, image=img_F, )

file_C = Image.open('fc-b.png')
file_C_size = file_C.resize((50, 50))
img_C= ImageTk.PhotoImage(file_C_size)
canvas.create_image(550, 350, image=img_C, )

# Text
canvas.create_text(350, 200, text="Football Game", font=("Robus", 60, "bold"), fill="purple")
canvas.create_text(265, 360, text="Bayern Munich", font=("Arial", 15, "bold"), fill="purple")
canvas.create_text(375, 350, text="VS", font=("Robus", 30, "bold"), fill="purple")
canvas.create_text(465, 360, text="Bacelon", font=("Arial", 15, "bold"), fill="purple")
canvas.create_text(375, 400, text="8   :   0", font=("Arial", 15, "bold"), fill="purple")




window.resizable(0, 0)
window.mainloop()