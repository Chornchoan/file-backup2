def cont(arr):
    result=0
    for i in range(len(arr)):
        if arr[i]=='a':
            result+=1
        else:
            result+=0
    return result
arr=input()
print(cont(arr))