arr=[ 
    {'name':'dyna','subject':'Algorithm','score':10},
    {'name':'sokheang','subject':'Html','score':45}, 
    {'name':'sreynang','subject':'Algorithm','score':89},
    {'name':'phanit','subject':'Algorithm','score':49}, 
]

liststudent=arr[0]['name']
isScore=arr[0]['score']
obj={}
for object in arr:
    if object['score']<isScore:
        obj['isScore']=object['score']
print(obj)


