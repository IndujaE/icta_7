# def display():
#     print("helloworld!!")

# display()

# def add(x,y):
#     z=x+y
#     print(z)

# add(3,5)

# a=int(input("enter num1 : "))
# b=int(input("enter num2 : "))
# def add():
#     c=a+b
#     print("addition : ",c)
# def sub():
#     c=a-b
#     print("subtraction : ",c)
# def mul():
#     c=a*b
#     print("multiplication : ",c)
# def div(a,b):
#     c=a/b
#     # print("division : ",c)
#     return c

# add()
# sub()
# mul()
# result=div(a,b)
# print(result)


# n = int(input("enter a number : "))
# def reverse(n):
#     rm = 0
#     rev=0
#     while(n>0):
#         rm = n%10
#         rev = (rev*10)+rm
#         n=n//10
#     return rev
    
# result=reverse(n)
# print("reverse is : ",result)

def largest(a,b,c):
    if(a>b and a>c):
        return a
    else:
        if(b>c):
            return b
        else:
            return c

a = int(input("enter num1 : "))
b = int(input("enter num2 : "))
c = int(input("enter num3 : "))

print("largest is : ",largest(a,b,c))












    