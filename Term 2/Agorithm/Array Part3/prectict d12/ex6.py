# Ex6 - Array
# arr = ['banana','coconut','mango','Jackfruit','orange','apple']
#1 - Reverse only text contain 1 letter A
def reverString(word):
    lastIndex = len(word) - 1
    result = ""
    for i in range(len(word)):
        result += word[lastIndex - i]
    return result
def oneLetterA(word):
    counter = 0
    isOne = False
    for i in range(len(word)):
        if word[i].lower() == 'a':
            counter += 1
    if counter == 1:
        isOne = True
    return isOne
arr = ['banana','coconut','mango','Jackfruit','orange','apple']
newArr = []
for i in range(len(arr)):
    if oneLetterA(arr[i]):
        newArr.append(reverString(arr[i]))
    else:
        newArr.append(arr[i])
print(newArr)


#2 - Count letter A in text
# [3, 0, 1, 1, 1, 1]
#3 - Replace letter A with * in text