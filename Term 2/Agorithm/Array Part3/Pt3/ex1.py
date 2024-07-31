# Ex1: 
# arr = ['0', '0', 'x', '0', '0', '0', '0']


#1 - Find index of x
# def findpossitionOfXstart(arr):
#     index=None
#     for i in range(len(arr)):
#         if arr[i]=="x":
#             index=i
#     return index
# arr = ['0', '0', 'x', '0', '0', '0', '0']
# courrentposition=findpossitionOfXstart(arr)
# command=input("Enter here:")
# if command.lower()=="l":
#     arr[courrentposition]="0"
#     arr[courrentposition-1]='x'
# elif command.lower()=="0":
#     arr[courrentposition]='0'
#     arr[courrentposition+1]='x'
# else:
#     print("Unknown"+command+"command")
# print(arr)
# >2
def findpossitionOfXstart(arr):
    index=None
    for i in range(len(arr)):
        if arr[i]=="x":
            index=i
    return index
arr = ['0', '0', 'x', '0', '0', '0', '0']
startAction=True
while startAction:
    courrentposition=findpossitionOfXstart(arr)
    command=input("Enter here:")
    if command.lower()=="l"and courrentposition >0:
        arr[courrentposition]="0"
        arr[courrentposition-1]='x'
        print(arr)
    elif command.lower()=="r" and courrentposition <len(arr)-1:
        arr[courrentposition]='0'
        arr[courrentposition+1]='x'
        print(arr)
    elif courrentposition==0:
        print("Piease go right")
    elif courrentposition==len(arr)-1:
        print("Piease go left")
    else:
        if command.lower()=="storp":
            startAction=False
            print("Action has been stopped...")
        else:
            print("Unknown"+command+"command")


# arr[2]="0"
# arr[3]="x"
# print(arr)
#2 - Replace x by 0 and replace 0 by x
#3 - Move x to next position
#   ['0', '0', '0', 'x', '0', '0', '0']
# def indexOfX(array):
#     index=None
#     for i in range(len(array)):
        
#4 - Move x to prevouis position
#   ['0', 'x', '0', '0', '0', '0', '0']