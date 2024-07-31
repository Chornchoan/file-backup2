arr=eval(input())
res=''
lastIndex=len(arr)-1
array=[]
for i in range(len(arr)):
   array.append(arr[lastIndex-i])
print(array)

