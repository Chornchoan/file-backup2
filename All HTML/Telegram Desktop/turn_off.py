import os
choice = input("Good bye or stay here (Y / N)")
if choice.lower() == "y":
    os.system("shutdown /r")
else:
    print("Exiting the program")