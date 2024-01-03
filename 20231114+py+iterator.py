# 迭代是什么意思？
# EN: What does iteration mean?
# 迭代是指重复执行某个操作的过程。在编程中，迭代通常用于遍历集合中的元素，例如列表、元组、字典、字符串等。
# EN: Iteration refers to the process of repeating an operation. In programming, iteration is often used to traverse elements in a collection, such as lists, tuples, dictionaries, strings, etc.
# 最初是什么学科的概念？发展历史？
# EN: What is the concept of the original subject? Development history?
# 迭代最初是数学中的一个概念，指在某个区间内重复执行某个操作。例如，你可以使用迭代来计算一个数的平方根，或者使用迭代来计算一个数的阶乘。
# EN: Iteration was originally a concept in mathematics, which refers to repeating an operation within a certain range. For example, you can use iteration to calculate the square root of a number, or to calculate the factorial of a number.

# 迭代器（Iterator）是 Python 中的一个重要概念，它是一种用于遍历集合（如列表、元组、字典、字符串等）中元素的对象。迭代器提供了一种按序访问集合元素的方式，而不需要提前知道集合的大小或内部结构。迭代器可以帮助你逐一处理集合中的元素，节省内存和提高效率。
# EN: Iterator is an important concept in Python. It is an object used to traverse elements in a collection (such as lists, tuples, dictionaries, strings, etc.). Iterators provide a way to access collection elements in order without knowing the size or internal structure of the collection in advance. Iterators can help you process elements in a collection one by one, saving memory and improving efficiency.

# 迭代器有两个主要方法：

# __iter__(): 这个方法返回迭代器对象本身，它通常在迭代开始之前被调用。
# EN: __iter__(): This method returns the iterator object itself, which is usually called before the iteration begins.

# __next__(): 这个方法用于获取下一个元素。当没有更多元素可供迭代时，抛出 StopIteration 异常。
# EN: __next__(): This method is used to get the next element. When there are no more elements to iterate, throw a StopIteration exception.

# 下面是一个简单的示例，演示如何创建一个迭代器和使用它来遍历列表中的元素：

# 创建一个迭代器类
class MyIterator:
    def __init__(self, collection):
        self.collection = collection
        self.index = 0
# collection是什么意思
# EN: What does collection mean?
# collection是一个列表，index是一个索引，用于记录当前迭代到的位置
# EN: collection is a list, index is an index, used to record the current iteration position
# __init__是什么意思
# EN: What does __init__ mean?
# __init__是一个特殊的方法，用于初始化对象，它在对象创建后立即执行
# EN: __init__ is a special method used to initialize objects, which is executed immediately after the object is created
# __init__(self, collection)？
# EN: __init__(self, collection)?
# __init__方法的第一个参数必须是 self，它表示当前对象
# EN: The first parameter of the __init__ method must be self, which represents the current object
# __init__方法的其他参数用于接收传入的参数
# EN: Other parameters of the __init__ method are used to receive incoming parameters
# collection表达什么？可以设置别的参数吗？
# EN: What does collection express? Can other parameters be set?
# collection表示传入的列表，可以设置别的参数
# EN: collection represents the incoming list, and other parameters can be set
# 例如呢？
# EN: For example?
# 例如，可以设置一个参数用于接收传入的元组
# EN: For example, you can set a parameter to receive the incoming tuple
# 怎么设置？
# EN: How to set?
# 可以在 __init__ 方法中添加一个参数，用于接收传入的元组
# EN: You can add a parameter in the __init__ method to receive the incoming tuple
# 例如：def __init__(self, collection, tuple):
# 参数是python语言自带的吗？
# EN: Is the parameter built into the Python language?
# 参数是 Python 语言的一部分，它是函数和方法的一部分
# EN: Parameters are part of the Python language and are part of functions and methods
# 为什么要用self.collection = collection？
# EN: Why use self.collection = collection?
# self.collection = collection 是为了将传入的列表存储到对象的属性中
# EN: self.collection = collection is to store the incoming list into the object's attribute
# self.index = 0是什么意思
# EN: What does self.index = 0 mean?
# self.index = 0 是为了初始化索引，将索引设置为 0
# EN: self.index = 0 is to initialize the index and set the index to 0
# 初始化是什么意思？
# EN: What does initialization mean?
# 初始化是指在使用对象之前，对对象的属性进行赋值，以使对象具备某些可用的状态或行为
# EN: Initialization refers to assigning values to the attributes of an object before using the object, so that the object has certain available states or behaviors
# 为什么需要这样做？没有初始化的设计会有什么问题？
# EN: Why do you need to do this? What problems will there be without initialization design?
# 如果不初始化，对象的属性将是空的，无法使用
# EN: If not initialized, the object's attributes will be empty and cannot be used
# Self.collection是什么意思
# EN: What does self.collection mean?
# self.collection是一个属性，用于存储传入的列表
# EN: self.collection is an attribute used to store the incoming list
# 类，函数，方法，参数，对象，属性是什么意思？
# EN: What does class, function, method, parameter, object, and attribute mean?
# 类是一种数据类型，它是一种抽象的概念，用于表示具有相同特征和行为的对象的集合
# EN: Class is a data type. It is an abstract concept used to represent a collection of objects with the same characteristics and behaviors
# 函数是一段可重复使用的代码，它接收输入参数并返回输出结果
# EN: Function is a piece of reusable code that accepts input parameters and returns output results
# 方法是类中的函数，它接收输入参数并返回输出结果
# EN: Method is a function in a class that accepts input parameters and returns output results
# 参数是函数和方法的一部分，用于接收传入的数据
# EN: Parameters are part of functions and methods, used to receive incoming data
# 对象是类的实例，它具有类中定义的特征和行为
# EN: Object is an instance of a class, it has the characteristics and behaviors defined in the class
# 属性是对象的特征，它可以是数据或函数
# EN: Attribute is the characteristic of an object, it can be data or function
    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.collection):
            result = self.collection[self.index]
            self.index += 1
            return result
        else:
            raise StopIteration

# 创建一个列表
my_list = [1, 2, 3, 4, 5]

# 创建一个迭代器对象
my_iterator = MyIterator(my_list)

# 使用迭代器遍历列表
for item in my_iterator:
    print(item)
