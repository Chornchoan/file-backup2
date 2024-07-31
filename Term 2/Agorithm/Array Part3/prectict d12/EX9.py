# Ex1 - Object
# object = {}
# #Question - Add items to object with difference price
    # 'name' : 'banana' , 'price' : 2,
    # 'name' : 'coconut' , 'price' : 4,
    # 'name' : 'mango' , 'price' : 3
# object = {}
# arr =[]
# object['name'] = 'banana'
# object['price'] = 2
# arr.append(object)
# object = {}

# object['name'] = 'coconut'
# object['price'] = 4
# arr.append(object)
# object = {}

# object['name'] = 'mango'
# object['price'] = 3
# arr.append(object)
# print(arr)
# -----------------------------------
# Ex2 - Dictionary
# fruit_stock = {'banana': 3, 'coconut': 30, 'mango': 21}
# #1 - Add new fruit: Orange with amount of 100
# fruit_stock['Orange']=100
# print(fruit_stock)

# fruit_stock = {'banana': 3, 'coconut': 30, 'mango': 21}
# #2 - Find average all fruits
# sum=0
# i = 0
# for fruit in fruit_stock:
#     sum+=fruit_stock[fruit]
#     i += 1
# print(sum / i)

# #3 - Find total fruit in stock

# fruit_stock = {'banana': 3, 'coconut': 30, 'mango': 21}
# total=0
# for i in range(len(fruit_stock)):
#     total+=1
# print(total)


# #4 - Now change fruit_stock to be input that you can input differneces fruit
# ----------------------------------

# Ex3 - Dictionary or object
# fruit_stock = [
#   {'name': 'banana', 'quality': 30},
#   {'name': 'coconut', 'quality': 10},
#   {'name': 'mango', 'quality': 20},
#   {'name': 'orange', 'quality': 42},
#   {'name': 'apple', 'quality': 25},
# ]
# #1 - Update orange quality to 100
# for object in fruit_stock:
#     if object['name']=='orange':
#         object['quality']=100
# print(fruit_stock)

# #2 - Count the quality of fruit in stock
# count=0
# for object in fruit_stock:
#     object['quality']
#     count+=object['quality']
# print(count)


# #3 - Which fruit have less in stock
# price=fruit_stock[0]['quality']
# Name=fruit_stock[0]['name']
# for object in fruit_stock:
#     for quality in object:
#         if object['quality']<price:
#             price=object['quality']
#             Name=object['name']
# print(Name +' =',price)

# #4 - Which fruit has the most in stock
# price = fruit_stock[0]['quality']
# Name = fruit_stock[0]['name']
# for object in fruit_stock:
#     for quality in object:
#         if object['quality']>price:
#             price=object['quality']
#             Name=object['name']
# print(Name +" =", price)

# ---------------------------------
# Ex4 - Dictionary or object
# fruit_stock = [
#   {'name': 'banana', 'quality': 1},
#   {'name': 'coconut', 'quality': 8},
#   {'name': 'mango', 'quality': 10},
#   {'name': 'orange', 'quality': 0},
#   {'name': 'apple', 'quality': 5},
# ]

#1 - Display fruit that has in stock
# array=[]
# for object in fruit_stock:
#     for key in object:
#         array.append(object[key])
# print(array)


#2 - Display fruit that has more than 5 in stoc
# res = 0 
# for object in fruit_stock:
#     if fruit_stock[object]>5:
#         res+=1
# print(res)

#3 - Increase quality of fruit that has less than 10 in stock to 20
# -------------------------------------------------------------------------------------
# Ex1 - Array
# input1: hello
# output: olleh
# text = input()
# res=''
# lastIndex=len(text)-1
# for i in range(len(text)):
#    res+=text[lastIndex-i]
# print(res) 
# -------------------------
# Ex2 - Array
# input1: hello
# output: ['o','l','l','e','h']
# text=input()
# lastIndext=len(text)-1
# array=[]
# for i in range(len(text)):
#     array.append(text[lastIndext-i])
# print(array)
# ----------------------------------
# Ex3 - Array
# input1: ['banana','coconut']
# ouput: ['ananab','tunococ']

# def reversIstring(arr):
#   res=''
#   for j in range(len(arr)):
#     res += arr[len(arr)-(j+1)]
#   return res
# array=eval(input('Enter here'))
# for i in range(len(array)):
#   array[i]=reversIstring(array[i])
# print(array)

        
        
# ---------------------------------------
# Ex4 - Array use only 1 function
# Case 1:
# input: [1, 3, 4, 4]
# input: odd
# output: 4
# arr=eval(input('En ter here:'))
# sum=0
# for i in range(len(arr)):
    

# Case 2:
# input: [1, 3, 4, 4]
# input: even
# output: 8

# def sumNumber(arr, typeNumber):
#     totol = 0
#     number = 0
#     if typeNumber == "odd":
#         number = 1
#     for n in arr:
#         if n % 2 == number:
#             totol += n
#     return totol
# arr = eval(input("Enter array: "))
# command = input("odd / even: ")
# if command.lower() == "odd":
#     print(sumNumber(arr, command))
# elif command.lower() == "even":
#     print(sumNumber(arr, command))
# else:
#     print("Command not recognized")

# case 3:
# input: [1, 3, 4, 4]
# input: add
# output: Command not found
# def sumnumber
# -----
# Ex5 - Array
# input: ['banana', 'coconut']
# output: 
# arr=[
#   {'b': 1},
#   {'a': 3},
#   {'n': 3},
#   {'c': 2},
#   {'o': 2},
#   {'u': 1},
#   {'t': 1},
# ]

# def check_letter(arr_object,letters):
#     isfound = True
#     for object in arr_object:
#         for letter in object:
#             if letter == letters:
#                 isfound = False
#     return isfound

# def count_letter(letter,arr):
#     count = 0
#     object = {}
#     for fruit in arr:
#         for i in range(len(fruit)):
#             if letter == fruit[i]:
#                 count += 1
#     object[letter] = count
#     return object

# sum=0
# array=[]
# arr=['banana','coconut']
# for fruit in arr:
#     for i in range(len(fruit)):
#         if check_letter(array,fruit[i]):
#             array.append(count_letter(fruit[i],arr))
# print(array)

# def contoinlLetterA(text):
#     isfound=False
#     i=0
#     while i < len(text) and not isfound:
#         if text[i].lower()=='a':
#             isfound=True
#         i+=1
#     return isfound
# arr=eval(input('Enter here:')) 
# newarr=[]       
# for value in arr:
#     if contoinlLetterA(value):
#         newarr.append(value)
# print(newarr)
