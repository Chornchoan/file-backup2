# def motiplayRowandcol(col):
#     arr=[]
#     for i in range(col):
#         arr.append("0")
#     return arr
# row=int(input("Enter roe:"))
# col=int(input("Enter col:"))
# arr2D=[]
# for i in range(row):
#     arr2D.append([])
#     for j in range(col):
#         arr2D.append("0")
# print(arr2D)

#2
# arr2D=[
#     [0,0,0,0],
#     [0,0,0,0],
#     [0,0,0,0],
# ]
# res=""
# for i in range(len(arr2D)):
#     for j in range(len(arr2D[i])):
#         res+=arr2D[i] + " "
#     res+= "\n"
# print(res)

# #3
# def creatArr(col):
#     arr=[]
#     for i in range(col):
#         arr.append("0")
#     return arr
# def display(grid):
#     res=''
#     for i in range(len(grid)):
#         for j in range(len(grid[i])):
#            res+=grid[i][j] + " " 
#         res+= "\n"
#     return res
# row= int(input())
# col= int(input())
# arr2D =[]
# for i in range(row):
#     arr2D.append(creatArr(col))
# print(display(arr2D))

# ex4
arr2D=[
    ["*",0,0]
    ["*","*","*"]
    [0,0,"*"]
]
res="NOWIN"
for i in range(len(arr2D)):
    for j in range(len(arr2D[i])):
        if arr2D[i][j]=="*":
            res="WINER"
print(res)