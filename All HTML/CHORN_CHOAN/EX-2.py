arr=eval(input('Enter:'))
array=[]
for i in range(len(arr)):
    for j in range(len(arr[i])):
        if arr[i][j].upper()== 'E':
            array.append(arr[i])
print(array)