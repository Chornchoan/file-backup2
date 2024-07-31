def findPositionOfStar(array):
    positionStar = []
    for i in range(len(array)) :
        for j in range(len(array[i])):
            if array[i][j] == "*":
                positionStar.append(i)
                positionStar.append(j)
    return positionStar

def moveLeft(arr,row,col):
    arr[row][col]='0'
    arr[row][col-1]='*'
    return arr
def moveRight(arr,row,col):
    arr[row][col]='0'
    arr[row][col+1]='*'
    return arr
def moveUp(arr,row ,col):
    arr[row][col]='0'
    arr[row-1][col]='*'
    return arr
def moveDown(arr, row,col):
    arr[row][col]='0'
    arr[row+1][col]='*'
    return arr

array2D = [
    ['0','0','0'],
    ['0','*','0'],
    ['0','0','0']
]
startAction = True
while startAction:
    currentIndex=findPositionOfStar(array2D)
    row =currentIndex[0]
    col =currentIndex[0]
    command = input("Enter here")

    if command.upper() == 'L':
        print(moveLeft(array2D,row,col))
    elif command.upper() == 'R':
        print(moveLeft(array2D,row,col))
    elif command.upper() == 'D':
        print(moveDown(array2D,row,col))
    elif command.upper() == 'U':
        print(moveUp(array2D,row,col))
    else:
        if command.lower() == "stop":
            startAction = False
            print("Action has been stopped...")
        else:
            print("Unknown " + command + " command")