def getData():
    data = input()
    return data


def multiplyData(data1, data2):
    product = data1 * data2
    return product


def sumData(data1, data2):
    sum = data1 + data2
    return sum


data1 = int(getData())
data2 = int(getData())
product = multiplyData(data1, data2)
print(product)

if product > 1000:
    sum = sumData(data1, data2)
    print(sum)
