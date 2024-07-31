def reverseString(word):
    result=0
    for i in range(len(word)-1):
        if word[i] <word[i+1]:
            result+=1
text = input()
print(reverseString(text))